interface Dimensions extends DOMRect {}

export const getDimensions = (element: HTMLElement): Dimensions =>
    element.getBoundingClientRect();
