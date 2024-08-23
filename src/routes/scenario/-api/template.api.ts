import { queryOptions } from "@tanstack/react-query";
import autoBind from "auto-bind";
import { appAxios } from "../../../api/config";
import { objectKeys, objectValues } from "../../../functional/object"
import type { TemplateDto } from "./dtos/Template.dto"
import type { TemplateGroupDto } from "./dtos/TemplateGroup.dto";

class _TemplatesApi {
    readonly baseQueryKey = ["Templates"] as const;

    constructor() {
        autoBind(this);
    }

    getTemplateGroups() {
        return queryOptions({
            queryKey: [...this.baseQueryKey, "scenario"],
            queryFn: async (): Promise<(TemplateGroupDto & { templates: TemplateDto[] })[]> => {
                const { data } = await appAxios.post<Record<string, TemplateDto[]>>("/get-scenarios");

                return objectKeys(data).map((name, index) => ({
                    id: index,
                    name: name,
                    templates: objectValues(data)[index].sort((a, b) => b.id - a.id),
                }));
            },
        } as const);
    }


    getTemplateById(templateId: number) {
        return queryOptions({
            queryKey: [...this.baseQueryKey, "templates", templateId],
            queryFn: async (): Promise<TemplateDto> => {
                const { data } = await appAxios.post<Record<string, TemplateDto[]>>("/get-scenarios");

                return objectValues(data)
                    .flat()
                    .find(it => it.id === templateId)!;
            },
        } as const);
    }
}

export const TemplatesApi = new _TemplatesApi();
