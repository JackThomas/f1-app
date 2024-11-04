"use client";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import {
    cloneElement,
    createRef,
    ReactElement,
    RefObject,
    useCallback,
    useMemo,
    useRef,
} from "react";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import { CSSTransitionProps } from "react-transition-group/CSSTransition";

interface RouteListElement extends ReactElement {
    ref: RefObject<HTMLElement>;
}
const getTransformStyles = (transformFn: string, max: string) => `
    // back
    & > .back-enter {
      transform: ${transformFn}(-${max});
    }
    & > .back-enter-active {
      transform: ${transformFn}(0);
    }
    & > .back-exit {
      transform: ${transformFn}(0);
    }
    & > .back-exit-active {
      transform: ${transformFn}(${max});
    }
  
    // forward
    & > .forward-enter {
      transform: ${transformFn}(${max});
    }
    & > .forward-enter-active {
      transform: ${transformFn}(0);
    }
    & > .forward-exit {
      transform: ${transformFn}(0);
    }
    & > .forward-exit-active {
      transform: ${transformFn}(-${max});
    }
  `;

const getTransitionGroupCss = (
    duration: number,
    timing: string,
    direction: string
) => css`
    display: grid;

    & > .item {
        grid-area: 1 / 1 / 2 / 2;

        &:not(:only-child) {
            &.${direction}-enter-active, &.${direction}-exit-active {
                transition: transform ${duration}ms ${timing};
            }
        }
    }

    &.slide {
        overflow: hidden;
        ${getTransformStyles("translateX", "100%")}
    }
`;

const Home = () => <div className="card home">Home</div>;
const About = () => <div className="card about">About</div>;
const Contact = () => <div className="card contact">Contact</div>;

const panels = [
    {
        index: 0,
        path: "/standings/drivers",
        element: <Home />,
    },
    {
        index: 1,
        path: "/standings/constructors",
        element: <About />,
    },
    {
        index: 2,
        path: "/standings/race-results",
        element: <Contact />,
    },
];

type Direction = "forward" | "back" | "undirected";
interface SlideRoutesProps {
    duration?: number;
    timing?: string;
    destroy?: boolean;
    nextPathname: string;
}
const SlideRoutes = (props: SlideRoutesProps) => {
    const {
        duration = 200,
        timing = "ease",
        destroy = true,
        nextPathname,
    } = props;

    // routes
    const routeElements = panels.map((child) => {
        const { element, ...restProps } = child;

        const nodeRef = createRef<HTMLDivElement>();
        const newElement = (
            <div className="item" ref={nodeRef}>
                {element}
            </div>
        );
        return { ...child, props: { ...restProps, element: newElement } };
    });

    const getPanel = (nextPathname: string) =>
        panels.find(({ path }) => path === nextPathname);

    const getComponent = (nextPathname: string) => {
        const nextPanel = getPanel(nextPathname);
        const index = nextPanel?.index ?? 0;
        return routeElements[index].props?.element;
    };

    const routeList = getComponent(nextPathname);

    // direction
    const nextPath = useMemo<number>(
        () => getPanel(nextPathname)?.index ?? 0,
        [nextPathname]
    );
    const prevPath = useRef<number>(0);
    const direction = useMemo<Direction>(() => {
        if (prevPath.current !== nextPath) {
            const indexDiff = nextPath - prevPath.current;
            prevPath.current = nextPath;

            if (indexDiff > 0) {
                return "forward";
            }

            if (indexDiff < 0) {
                return "back";
            }
        }

        return "undirected";
    }, [nextPath]);

    // props
    const childFactory = useCallback(
        (child: ReactElement<CSSTransitionProps>) =>
            cloneElement(child, { classNames: direction }),
        [direction]
    );

    const cssTransitionProps = useMemo(
        () => (destroy ? { timeout: duration } : { addEndListener() {} }),
        [destroy, duration]
    );

    return (
        <TransitionGroup
            className="slide-routes slide"
            childFactory={childFactory}
            css={getTransitionGroupCss(duration, timing, direction)}
        >
            <CSSTransition
                key={nextPath}
                nodeRef={(routeList as RouteListElement).ref}
                {...cssTransitionProps}
            >
                {routeList}
            </CSSTransition>
        </TransitionGroup>
    );
};

export default SlideRoutes;
