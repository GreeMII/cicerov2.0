import autoBind from "auto-bind";
import type { GroupsDto } from "./dtos/Input.dto";

class _CreateDocumentMock {
    constructor() {
        autoBind(this);
    }

    getForm(): GroupsDto {
        return {
            label: "Договор",
            groups: [
                {
                    label: "Данные договора",
                    fields: [
                        {
                            key: "signedAt",
                            type: "String",
                            label: "Дата подписания договора",
                            required: true,
                        },
                        {
                            key: "city",
                            type: "String",
                            label: "Город подписания договора",
                            description: "Где подписан договор?",
                            required: true,
                        },
                    ],
                },
                {
                    label: "Данные о займодавце",
                    fields: [
                        {
                            key: "lastName",
                            type: "String",
                            label: "Фамилия",
                            required: true,
                        },
                        {
                            key: "firstName",
                            type: "String",
                            label: "Имя",
                            required: true,
                        },
                        {
                            key: "middleName",
                            type: "String",
                            label: "Отчество",
                            required: false,
                        },
                        {
                            key: "gender",
                            type: "Enum",
                            label: "Пол",
                            required: true,
                            variants: [
                                {
                                    label: "Мужской",
                                    value: "male",
                                },
                                {
                                    label: "Женский",
                                    value: "female",
                                },
                            ],
                        },
                    ],
                },
                {
                    label: "Проценты",
                    fields: [
                        {
                            key: "percentsEnabled",
                            type: "Enum",
                            label: "Присутствуют",
                            required: true,
                        },
                        {
                            key: "percentsValue",
                            type: "Number",
                            label: "Размер процентов",
                            required: true,
                            condition: {
                                equal: {
                                    fieldKey: "percentsEnabled",
                                    value: true,
                                },
                            },
                        },
                    ],
                },
            ],
        };

        // return [
        //   {
        //     name: "Договор",
        //     header: null,
        //     variables: [
        //       {
        //         name: "date_of_signing",
        //         comment: "<p>Дата подписания договора:</p>\n",
        //         ty: {
        //           ty: "String",
        //           is_required: true,
        //         },
        //       },
        //       {
        //         name: "town_of_signing",
        //         comment: "<p>Город подписания договора:</p>\n",
        //         ty: {
        //           ty: "String",
        //           is_required: true,
        //         },
        //       },
        //       {
        //         name: "loaner",
        //         comment: "<p>Данные о займодавце:</p>\n",
        //         ty: {
        //           ty: {
        //             Struct: {
        //               name: "Person",
        //               comment: null,
        //               fields: {
        //                 name: {
        //                   comment: "<p>Имя:</p>\n",
        //                   entity: {
        //                     ty: "String",
        //                     is_required: true,
        //                   },
        //                 },
        //                 surname: {
        //                   comment: "<p>Фамилия:</p>\n",
        //                   entity: {
        //                     ty: "String",
        //                     is_required: true,
        //                   },
        //                 },
        //                 patronymic: {
        //                   comment: "<p>Отчество:</p>\n",
        //                   entity: {
        //                     ty: "String",
        //                     is_required: false,
        //                   },
        //                 },
        //                 sex: {
        //                   comment: "<p>Пол:</p>\n",
        //                   entity: {
        //                     ty: {
        //                       Enum: {
        //                         name: "Sex",
        //                         comment: null,
        //                         variants: {
        //                           Male: {
        //                             name: "Male",
        //                             comment: "<p>Мужской</p>\n",
        //                             field: null,
        //                           },
        //                           Female: {
        //                             name: "Female",
        //                             comment: "<p>Женский</p>\n",
        //                             field: null,
        //                           },
        //                         },
        //                       },
        //                     },
        //                     is_required: true,
        //                   },
        //                 },
        //               },
        //               parent: null,
        //             },
        //           },
        //           is_required: true,
        //         },
        //       },
        //       {
        //         name: "borrower",
        //         comment: "<p>Данные о заемщике:</p>\n",
        //         ty: {
        //           ty: {
        //             Struct: {
        //               name: "Person",
        //               comment: null,
        //               fields: {
        //                 name: {
        //                   comment: "<p>Имя:</p>\n",
        //                   entity: {
        //                     ty: "String",
        //                     is_required: true,
        //                   },
        //                 },
        //                 surname: {
        //                   comment: "<p>Фамилия:</p>\n",
        //                   entity: {
        //                     ty: "String",
        //                     is_required: true,
        //                   },
        //                 },
        //                 patronymic: {
        //                   comment: "<p>Отчество:</p>\n",
        //                   entity: {
        //                     ty: "String",
        //                     is_required: false,
        //                   },
        //                 },
        //                 sex: {
        //                   comment: "<p>Пол:</p>\n",
        //                   entity: {
        //                     ty: {
        //                       Enum: {
        //                         name: "Sex",
        //                         comment: null,
        //                         variants: {
        //                           Male: {
        //                             name: "Male",
        //                             comment: "<p>Мужской</p>\n",
        //                             field: null,
        //                           },
        //                           Female: {
        //                             name: "Female",
        //                             comment: "<p>Женский</p>\n",
        //                             field: null,
        //                           },
        //                         },
        //                       },
        //                     },
        //                     is_required: true,
        //                   },
        //                 },
        //               },
        //               parent: null,
        //             },
        //           },
        //           is_required: true,
        //         },
        //       },
        //       {
        //         name: "cost",
        //         comment: "<p>Сумма займа в рублях (цифрами и прописью в скобках):</p>\n",
        //         ty: {
        //           ty: "String",
        //           is_required: true,
        //         },
        //       },
        //       {
        //         name: "percent",
        //         comment: "<p>Проценты:</p>\n",
        //         ty: {
        //           ty: {
        //             Enum: {
        //               name: "Percent",
        //               comment: null,
        //               variants: {
        //                 Yes: {
        //                   name: "Yes",
        //                   comment: "<p>Присутствуют в размере:</p>\n",
        //                   field: {
        //                     ty: "String",
        //                     is_required: true,
        //                   },
        //                 },
        //                 No: {
        //                   name: "No",
        //                   comment: "<p>Отсутствуют</p>\n",
        //                   field: null,
        //                 },
        //               },
        //             },
        //           },
        //           is_required: true,
        //         },
        //       },
        //       {
        //         name: "loan_repayment_procedure",
        //         comment: "<p>Порядок возврата суммы займа:</p>\n",
        //         ty: {
        //           ty: {
        //             Enum: {
        //               name: "LoanRepaymenProcedure",
        //               comment: null,
        //               variants: {
        //                 Straight: {
        //                   name: "Straight",
        //                   comment: "<p>Единовременно</p>\n",
        //                   field: null,
        //                 },
        //                 Period: {
        //                   name: "Period",
        //                   comment: "<p>По равным частям</p>\n",
        //                   field: {
        //                     ty: {
        //                       Struct: {
        //                         name: "Period",
        //                         comment: null,
        //                         fields: {
        //                           period: {
        //                             comment: "<p>Срок (ежемесячно, ежегодно):</p>\n",
        //                             entity: {
        //                               ty: "String",
        //                               is_required: true,
        //                             },
        //                           },
        //                           day: {
        //                             comment: "<p>Оплата не позднее (день месяца):</p>\n",
        //                             entity: {
        //                               ty: "String",
        //                               is_required: true,
        //                             },
        //                           },
        //                           sum_of_money: {
        //                             comment: "<p>Сумма равной части (цифрами и прописью в скобках):</p>\n",
        //                             entity: {
        //                               ty: "String",
        //                               is_required: true,
        //                             },
        //                           },
        //                         },
        //                         parent: null,
        //                       },
        //                     },
        //                     is_required: true,
        //                   },
        //                 },
        //               },
        //             },
        //           },
        //           is_required: true,
        //         },
        //       },
        //       {
        //         name: "date_of_return",
        //         comment: "<p>Срок возврата займа:</p>\n",
        //         ty: {
        //           ty: "String",
        //           is_required: true,
        //         },
        //       },
        //     ],
        //   },
        //   1,
        //   ["Договор"],
        //   {
        //     borrower: {
        //       name: "borrower",
        //       data: {
        //         Struct: {
        //           name: "Person",
        //           fields: {
        //             name: {
        //               String: "",
        //             },
        //             sex: {
        //               Enum: {
        //                 name: "Sex",
        //                 discriminant: "Male",
        //                 field: null,
        //               },
        //             },
        //             patronymic: {
        //               String: "",
        //             },
        //             surname: {
        //               String: "",
        //             },
        //           },
        //         },
        //       },
        //     },
        //     town_of_signing: {
        //       name: "town_of_signing",
        //       data: {
        //         String: "1",
        //       },
        //     },
        //     cost: {
        //       name: "cost",
        //       data: {
        //         String: "",
        //       },
        //     },
        //     percent: {
        //       name: "percent",
        //       data: {
        //         Enum: {
        //           name: "Percent",
        //           discriminant: "Yes",
        //           field: {
        //             String: "",
        //           },
        //         },
        //       },
        //     },
        //     date_of_return: {
        //       name: "date_of_return",
        //       data: {
        //         String: "",
        //       },
        //     },
        //     loan_repayment_procedure: {
        //       name: "loan_repayment_procedure",
        //       data: {
        //         Enum: {
        //           name: "LoanRepaymenProcedure",
        //           discriminant: "Straight",
        //           field: null,
        //         },
        //       },
        //     },
        //     loaner: {
        //       name: "loaner",
        //       data: {
        //         Struct: {
        //           name: "Person",
        //           fields: {
        //             sex: {
        //               Enum: {
        //                 name: "Sex",
        //                 discriminant: "Male",
        //                 field: null,
        //               },
        //             },
        //             surname: {
        //               String: "",
        //             },
        //             patronymic: {
        //               String: "",
        //             },
        //             name: {
        //               String: "",
        //             },
        //           },
        //         },
        //       },
        //     },
        //     date_of_signing: {
        //       name: "date_of_signing",
        //       data: {
        //         String: "1",
        //       },
        //     },
        //   },
        // ];
    }
}

export const CreateDocumentMock = new _CreateDocumentMock();
