import {Button, Container, Group, rem, Text, Title,TextInput} from "@mantine/core";

import {createFileRoute} from "@tanstack/react-router";
import classes from "./route.module.css"
import {IconSearch} from "@tabler/icons-react";


const Page: React.FC = () => {
    return(
        <Container className={classes.Container}>
            <div className={classes.leftSide}>
                <TextInput
                    className={classes.search}
                    placeholder="Search"
                    leftSection={<IconSearch/>}
                />
                <div>greger</div>
            </div>
            <div className={classes.rightSide}>
                gfrw
            </div>
        </Container>
    );
}

export const Route = createFileRoute("/scenario")({
    component: Page,
});