import {useState} from "react";
import {createFileRoute, Link} from "@tanstack/react-router";
import {Button, Container, Group, Text, Title} from "@mantine/core";
import classes from "./route.module.css"

const Page: React.FC = () => {
    return (
        <Container className={classes.Container}>
            <Group className={classes.group}>
                <Title className={classes.title}>
                    Проект <Text className={classes.TitleName}>Cicero</Text>- это удобный инструмент для создания юридически значимых документов.
                </Title>
                <Text className={classes.text}>
                    Это быстрый и надёжный способ получить готовый договор или другой юридический
                    документ, соответствующий вашим потребностям. Сэкономьте время и упростите
                    процесс создания документации  с нашим конструктором документов.
                </Text>
                <Link search={{}}
                      to="/scenario"
                      className={classes.linkBut}
                >
                    <Button className={classes.button}>
                        Создать свой первый документ
                    </Button>
                </Link>

            </Group>
        </Container>
    );
}

export const Route = createFileRoute("/")({
    component: Page,
});
