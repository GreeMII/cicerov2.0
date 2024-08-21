import React from 'react';
import classes from "./string-input.module.css"
import {TextInput, Text} from "@mantine/core";

export function StringInput() {
    return (

        <div className={classes.StringInput}>
            <Text className={classes.StringLabel}>Example</Text>
            <TextInput
                className={classes.stringInput}
                size="md"
                variant="unstyled"
                placeholder="Example"
            />
        </div>

    )
};