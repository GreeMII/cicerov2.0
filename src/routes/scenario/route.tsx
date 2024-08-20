import {Button, Container, Group, rem, Text, Title, TextInput, Accordion, Stack} from "@mantine/core";

import {createFileRoute} from "@tanstack/react-router";
import classes from "./route.module.css"
import {IconSearch} from "@tabler/icons-react";


const Page: React.FC = () => {

    const groceries = [
        {
            emoji: '🍎',
            value: 'Apples',
            description:
                'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
        },
        {
            emoji: '🍌',
            value: 'Bananas',
            description:
                'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
        },
        {
            emoji: '🥦',
            value: 'Broccoli',
            description:
                'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
        },
    ];

    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));

    return(
        <div className={classes.Container}>
                <Stack
                    className={classes.leftSide}
                    align="stretch"
                    justify="start"
                    gap="md"
                >
                    <TextInput
                        className={classes.search}
                        placeholder="Search"
                        leftSection={<IconSearch/>}
                    />
                    <Accordion className={classes.accordion}>
                        {items}
                    </Accordion>
                </Stack>
            <div className={classes.rightSide}>
                <div className={classes.mainRS}>
                    <Stack
                        align="stretch"
                        justify="start"
                        gap="xs"
                    >
                        <Title>
                            Договор поставки
                        </Title>
                        <Text>
                            Актуально по сей день
                        </Text>
                    </Stack>
                    <Button
                        className={classes.button}
                        fullWidth
                        variant="outline"
                        size="lg"
                        color="#495057"
                        radius="xl"
                    >
                        Создать договор
                    </Button>
                </div>
                <Stack
                    align="stretch"
                    justify="start"
                    gap="xs"
                    className={classes.description}
                >
                    <Title size="h5" className={classes.descriptionTitle}>
                        Описание
                    </Title>
                    <Text className={classes.descriptionText}>
                        ЖРПУЕОЖПОЛДУЖПЛАЛДОАПДЛАПВДЛВАП
                    </Text>
                </Stack>
            </div>
        </div>
    );
}

export const Route = createFileRoute("/scenario")({
    component: Page,
});