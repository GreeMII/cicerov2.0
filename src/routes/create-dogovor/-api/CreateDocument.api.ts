import { queryOptions } from "@tanstack/react-query";
import autoBind from "auto-bind";
import { CreateDocumentMock } from "./CreateDocument.mock.ts";
import type { FormDto } from "./dtos/Form.dto.ts";

class _CreateDocumentApi {
    readonly useMock = true;

    readonly baseQueryKey = ["CreateDocument"] as const;

    constructor() {
        autoBind(this);
    }

    getFormByTemplateId(templateId: number) {
        return queryOptions({
            queryKey: [...this.baseQueryKey, "templates", templateId, "form"],
            queryFn: async (): Promise<FormDto> => {
                if (this.useMock) {
                    return CreateDocumentMock.getForm();
                }

                return { label: "Серверная форма", groups: [] };
            },
        } as const);
    }
}

export const CreateDocumentApi = new _CreateDocumentApi();
