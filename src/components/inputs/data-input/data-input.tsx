import React from 'react';
import classes from "./data-input.module.css"
import {Text} from "@mantine/core";
import {DateInput, DatePickerInput, DatesProvider} from "@mantine/dates"

export function DataInput() {
    return (

        <div className={classes.DataInput}>
            <Text className={classes.dateLabel}>Дата подписания договора:</Text>

            <DateInput
                size="md"
                className={classes.dateInput}
                placeholder="Дата подписания договора"
                variant="unstyled"
            />
        </div>

    )
}