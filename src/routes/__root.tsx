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

const linksReg = [
    { link: '/login', label: "Логин"},
    { link: '/register', label: "Регистрация"}
]

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
    const itemsReg = linksReg.map((link_reg) => (
        <Button className={classes.ButtonLink} size="lg" variant="outline" color="#495057" radius="lg">
            <Link
                search={{}}
                to={link_reg.link}
                className={classes.linkBut}
            >
                {link_reg.label}
            </Link>
        </Button>

    ));

    return (
        <header className={classes.header}>
            <Container size="2xl" className={classes.inner}>
                <div className={classes.logo}><Title size="h1">Cicero</Title></div>
                <Group gap={2} visibleFrom="sm" className={classes.links}>
                    <div className={classes.linksItem}>
                        {items}
                    </div>
                    <div className={classes.linksReg}>
                        {itemsReg}
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
                <Divider my="sm"/>


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