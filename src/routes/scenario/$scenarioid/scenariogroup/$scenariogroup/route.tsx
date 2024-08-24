
import {Button, Stack, Text, Title} from "@mantine/core";
import { useSuspenseQuery } from "@tanstack/react-query";
import {Link, createFileRoute, useParams, getRouteApi} from "@tanstack/react-router";
import React from "react";
import { TemplatesApi } from "../../../-api/template.api";
import styles from "./route.module.css";
import classes from "../../../route.module.css";

const Page: React.FC = () => {

    const routeApi = getRouteApi('/scenario/$scenarioid/scenariogroup/$scenariogroup');
    const scenariogroup = routeApi.useParams();

    const {data: template} = useSuspenseQuery(TemplatesApi.getTemplateById(parseInt(scenariogroup, 10)));
    const TemplateID: number = template.id;
    return (
        <div className={classes.rightSide}>
            <div className={classes.mainRS}>
                <Stack
                    align="stretch"
                    justify="start"
                    gap="xs"
                >
                    <Title>
                        {template.name}
                    </Title>
                    <Text>
                        {template.category}
                    </Text>
                </Stack>
                <Link to="/create-dogovor" search={{ scenariogroup: parseInt(scenariogroup, 10) }}>
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
                    {template.description}
                </Text>
            </Stack>
        </div>
    )
};


export const Route = createFileRoute("/scenario/$scenarioid/scenariogroup/$scenariogroup")({
    loader: ({params: {TemplateID}, context: {queryClient}}) =>
        queryClient.ensureQueryData(TemplatesApi.getTemplateById(parseInt(TemplateID, 10))),
    component: Page,
});
