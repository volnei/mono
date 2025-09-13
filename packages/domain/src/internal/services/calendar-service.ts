import { CalendarRepository } from "../repository/calendar-repository";
import type { ICalendarRepository } from "../repository/calendar-repository.interface";
import type { Holiday } from "../types/holiday";

/**
 * Service for calendar-related operations.
 */
export class CalendarService {
    constructor(private calendarRepository: ICalendarRepository = new CalendarRepository()) {
    }
    async getHolidays(year: number): Promise<Holiday[]> {
        return this.calendarRepository.getHolidays(year);
    }

    async createEvent(title: string, date: string): Promise<string> {
        return this.calendarRepository.createEvent(title, date);
    }
}