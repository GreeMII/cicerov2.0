import { useState } from 'react';
import {
    HoverCard,
    Group,
    Button,
    UnstyledButton,
    SimpleGrid,
    ThemeIcon,
    Divider,
    Center,
    Box,
    Burger,
    Drawer,
    Collapse,
    ScrollArea,
    rem,
    useMantineTheme, Container,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Text, Anchor, Title } from '@mantine/core';
import classes from './__root.module.css';
import {Link, Outlet, createFileRoute, createRootRouteWithContext} from "@tanstack/react-router";
import {QueryClient} from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import '@mantine/core/styles.css'
import theme from "tailwindcss/defaultTheme";
import {IconChevronDown} from "@tabler/icons-react";
const links = [
    { link: '/', label: 'Главная' },
    { link: '/scenario', label: 'Конструктор' },
];

const Header: React.FC = () => {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [active, setActive] = useState(links[0].link);

    const items = links.map((link) => (
        <Link
            search={{}}
            to={link.link}
            className={classes.link}
        >
            {link.label}
        </Link>
    ));

    return (
        <header className={classes.header}>
            <Container size="2xl" className={classes.inner}>
                <div className={classes.logo}><Title size="h1">Cicero</Title></div>
                <Group gap={2} visibleFrom="sm">
                    <div className={classes.links}>
                        {items}
                    </div>
                </Group>
                <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"/>
            </Container>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="20%"
                position="top"
                padding="md"
                title="Cicero"
                hiddenFrom="sm"
                className={classes.drawer}
                color="#DEE2E6"
            >
                <Divider my="sm"/>
                <div className={classes.smallbar}>
                    {items}
                </div>

            </Drawer>
            <Outlet/>
            <TanStackRouterDevtools/>
        </header>
    );
}

interface RouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: Header,
})