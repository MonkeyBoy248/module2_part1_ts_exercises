type Pad = (s: number) => string;

declare module 'date-wizard' {
    export interface DateDetails {
        hours: number;
        minutes: number;
        seconds: number;
    }
    export const pad: Pad;
}