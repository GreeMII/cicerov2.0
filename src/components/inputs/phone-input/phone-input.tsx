import React from 'react';
import classes from "./phone-input.module.css"
import {InputBase, Text} from "@mantine/core";
import { IMaskInput } from 'react-imask';

export function PhoneInput() {
    return (

        <div className={classes.PhoneInput}>
            <Text className={classes.phoneLabel}>Номер телефона:</Text>
            <InputBase
                className={classes.phoneInput}
                component={IMaskInput}
                mask="+7 (000) 000-00-00"
                placeholder="Номер телефона"
                size="md"
                variant="unstyled"
            />
        </div>

    )
}