import type { Holiday } from "@mono/domain/internal/types/holiday";

export interface ICalendarRepository {
    getHolidays(year: number): Promise<Holiday[]>;
    createEvent(title: string, date: string): Promise<string>;
}