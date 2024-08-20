import styles from "./route.module.css";
import {createFileRoute} from "@tanstack/react-router";
import {Container, Group, Text, Button} from "@mantine/core";
import classes from "./route.module.css"
import {DateInput} from "@mantine/dates";
import { ScrollArea } from '@mantine/core';

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
                    <ScrollArea h={250} type="auto" scrollbars="y" offsetScrollbars scrollHideDelay={1500}>
                        <div className={classes.DataInput}>
                            <Text className={classes.dateLabel}>Дата подписания договора</Text>
                            <DateInput
                                className={classes.dateInput}
                                radius="xs"
                                placeholder="Дата подписания договора"
                                variant="filled"
                                color="#868686"
                            />
                        </div>
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
