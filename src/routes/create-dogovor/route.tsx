import styles from "./route.module.css";
import {createFileRoute} from "@tanstack/react-router";
import {Container, Group, Text, Button} from "@mantine/core";
import classes from "./route.module.css"
import { ScrollArea } from '@mantine/core';
import {DataInput} from "../../components/inputs/data-input/data-input";
import React from "react";
import {PhoneInput} from "../../components/inputs/phone-input/phone-input";
import {RadioInput} from "../../components/inputs/radio-input/radio-input";
import {StringInput} from "../../components/inputs/string-input/string-input";


const Page: React.FC = () => {
    return(
        <div>
            <Container fluid h={61} className={classes.container}>
                <Group className={classes.headerGroup}>
                    <Text className={classes.titleText}>Договор беспроцентного займа</Text>
                    <Group className={classes.previewGroup}>
                        <Text className={classes.previewText}>Предварительный просмотр документа</Text>
                        <Group className={classes.buttonGroup}>
                            <Button className={classes.Button} color="#DEE2E6">
                                Скачать PDF
                            </Button>
                            <Button className={classes.Button} color="#DEE2E6">
                                Обновить
                            </Button>
                        </Group>
                    </Group>
                </Group>
            </Container>
            <div className={classes.containerMain}>
                <div className={classes.inputsForm}>
                    <ScrollArea className={classes.scrollbar} type="scroll" scrollbars="y" offsetScrollbars scrollHideDelay={1500}>
                        <DataInput/>
                        <PhoneInput/>
                        <RadioInput/>
                        <StringInput/>
                        <DataInput/>
                        <Text className={classes.groupInputTitle}>
                            Данные о займодавце:
                        </Text>
                        <PhoneInput/>
                        <DataInput/>
                        <PhoneInput/>
                        <RadioInput/>
                        <StringInput/>
                        <PhoneInput/>
                        <DataInput/>
                        <PhoneInput/>
                        <DataInput/>
                        <RadioInput/>
                        <StringInput/>
                    </ScrollArea>
                </div>

            <div className={classes.overview}></div>
            </div>
        </div>


    )
}

export const Route = createFileRoute("/create-dogovor")({
    component: Page,
});
