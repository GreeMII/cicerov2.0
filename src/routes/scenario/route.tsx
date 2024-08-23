import {Button, Container, Group, rem, Text, Title, TextInput, Accordion, Stack} from "@mantine/core";
import {createFileRoute, Link} from "@tanstack/react-router";
import classes from "./route.module.css"
import {IconSearch} from "@tabler/icons-react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {TemplatesApi} from "./-api/template.api";


const Page: React.FC = () => {

    const { data: groups } = useSuspenseQuery(TemplatesApi.getTemplateGroups());
    {groups.map(group => {
        <Accordion.Item key={group.id} value={group.name}>
            <Accordion.Control>{group.name}</Accordion.Control>
        </Accordion.Item>
    })}

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
                    <Link to="/create-dogovor">
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
                    </Link>
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
};

export const Route = createFileRoute("/groups")({
    loader: async ({ context: { queryClient } }) => queryClient.ensureQueryData(TemplatesApi.getTemplateGroups()),
    component: Page,
});