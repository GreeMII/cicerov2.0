export interface GroupsDto {
    label: string;
    groups: GroupsIdDto[];
}

interface GroupsIdDto {
    label: string;
    fields: FieldDto[];
}

export interface FieldDto {
    key: string;

    type: "String" | "Number" | "Data" | "Enum";

    label: string;
    description?: string;
    required: boolean;

    variants?: FieldVariant[];

    condition?: Condition;
}

interface Condition {
    equal: {
        fieldKey: string;
        value: string | number | boolean;
    };
}

interface FieldVariant {
    label: string;
    value: string;
}
