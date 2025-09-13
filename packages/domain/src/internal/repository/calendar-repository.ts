import type { Holiday } from "../types/holiday";
import type { ICalendarRepository } from "./calendar-repository.interface";

export class CalendarRepository implements ICalendarRepository {
    async getHolidays(year: number): Promise<Holiday[]> {
        return [
            { name: "New Year's Day", date: `January 1, ${year}` },
            { name: "Independence Day", date: `July 4, ${year}` },
            { name: "Christmas", date: `December 25, ${year}` }
        ] as Holiday[];
    }

    async createEvent(title: string, date: string): Promise<string> {
        return `Event "${title}" created for ${date}`;
    }
}
