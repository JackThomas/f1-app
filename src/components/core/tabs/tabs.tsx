import { Box, Tabs as ChakraTabs } from "@chakra-ui/react";
import { ReactElement } from "react";

type TabItem = {
    id: string;
    label: string;
    component: ReactElement;
};

interface TabsProps {
    tabs: TabItem[];
}

const Tabs = ({ tabs }: TabsProps) => {
    return (
        <ChakraTabs.Root defaultValue={tabs[0].id} variant="plain">
            <ChakraTabs.List
                width="100%"
                bg="f1.red"
                gap={4}
                display="flex"
                justifyContent="space-between"
            >
                {tabs?.map(({ id, label }) => (
                    <ChakraTabs.Trigger
                        key={`tabs_trigger_${id}`}
                        display="flex"
                        justifyContent="center"
                        flexGrow={1}
                        p={4}
                        color="white"
                        value={id}
                    >
                        {label}
                    </ChakraTabs.Trigger>
                ))}

                <ChakraTabs.Indicator
                    display="flex"
                    alignItems="flex-end"
                    background="transparent"
                    boxShadow="none"
                >
                    <Box width="100%" height="3px" background="white" />
                </ChakraTabs.Indicator>
            </ChakraTabs.List>
            {tabs &&
                tabs.map(({ id, component }) => (
                    <ChakraTabs.Content key={`tabs_content_${id}`} value={id}>
                        {component}
                    </ChakraTabs.Content>
                ))}
        </ChakraTabs.Root>
    );
};

export { Tabs };
