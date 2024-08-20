import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Text, Anchor, Title } from '@mantine/core';
import classes from './__root.module.css';
import {Link, Outlet, createFileRoute, createRootRouteWithContext} from "@tanstack/react-router";
import {QueryClient} from "@tanstack/react-query";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import '@mantine/core/styles.css'
const links = [
    { link: '/', label: 'Главная' },
    { link: '/scenario', label: 'Конструктор' },
];

const Header: React.FC = () => {
    const [opened, { toggle }] = useDisclosure(false);
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

                <div className={classes.logo}><Title size="h1" >Cicero</Title></div>
                <Group gap={2} visibleFrom="xs">
                    <div className={classes.links}>
                        {items}
                    </div>
                </Group>

                <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
            </Container>
            <Outlet />
            <TanStackRouterDevtools />
        </header>
    );
}

interface RouterContext {
    queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
    component: Header,
})