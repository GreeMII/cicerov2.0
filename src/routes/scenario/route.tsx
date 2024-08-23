import {Button, Container, Group, rem, Text, Title, TextInput, Accordion, Stack} from "@mantine/core";
import {createFileRoute, Link, useParams} from "@tanstack/react-router";
import classes from "./route.module.css"
import {IconSearch} from "@tabler/icons-react";
import {useSuspenseQuery} from "@tanstack/react-query";
import {TemplatesApi} from "./-api/template.api";
import React from "react";


const Page: React.FC = () => {

    const { data: groups } = useSuspenseQuery(TemplatesApi.getTemplateGroups());


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
                    {groups.map(group => (
                        <Accordion.Item className={classes.accordion} key={group.id} value={group.name}>
                            <Accordion.Control>{group.name}</Accordion.Control>
                            {group.templates.map(template => (
                                <Accordion.Panel>
                                    <Link
                                        key={template.id}
                                        to="/scenario/$scenarioid/scenariogroup/$scenariogroup"
                                        params={{templateId: template.id.toString() }}
                                        search={{}}
                                    >
                                        {template.name}
                                    </Link>
                                </Accordion.Panel>
                            ))}
                        </Accordion.Item>
                    ))}
                </Stack>
        </div>
    );
};

export const Route = createFileRoute("/scenario")({
    loader: async ({ context: { queryClient } }) => queryClient.ensureQueryData(TemplatesApi.getTemplateGroups()),
    component: Page,
});
