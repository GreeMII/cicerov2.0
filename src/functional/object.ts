export const objectKeys = <T extends object>(obj: T): (keyof T)[] => Object.keys(obj) as (keyof T)[];
export const objectValues = <T extends object>(obj: T): T[keyof T][] => Object.values(obj) as T[keyof T][];
