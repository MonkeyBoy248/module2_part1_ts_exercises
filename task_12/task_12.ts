type Comparator<T> = (a:T, b: T) => number;
type GetElement = <T>(input: T[], compatator: Comparator<T>) => T | null;
type GetIndex = <T>(input: T[], compatator: Comparator<T>) => number;

declare module 'stats' {
    export const getMaxIndex:GetIndex;
    export const getMaxElement:GetElement;
    export const getMinElement:GetElement;
    export const getMinIndex:GetIndex;
    export const getMedianIndex:GetIndex;
    export const getMedianElement:GetElement;
    export function getAverageValue<T>(input: T[], getValue:(value: T) => number): number | null;

}