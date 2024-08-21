import React from 'react';
import classes from "./radio-input.module.css"
import {Group, InputBase, Radio, Text, getGradient, useMantineTheme} from "@mantine/core";
import { IMaskInput } from 'react-imask';

export function RadioInput() {
    return (

        <div className={classes.RadioInput}>
            <Text className={classes.RadioLabel}>Номер телефона:</Text>
            <Radio.Group
                withAsterisk
                className={classes.radioInput}

            >
                <Group mt="xs">
                    <Radio
                        value="m"
                        label="мужской"
                        iconColor="#343A40"
                        color='#C8420D'
                        styles={{
                            label: {
                                color: '#868686',
                                fontSize: 16,
                            }
                        }}
                    />
                    <Radio
                        value="w"
                        label="женский"
                        iconColor="#343A40"
                        color='#C8420D'
                        styles={{
                            label: {
                                color: '#868686',
                                fontSize: 16,
                            }
                        }}
                    />
                </Group>
            </Radio.Group>
        </div>

    )
}