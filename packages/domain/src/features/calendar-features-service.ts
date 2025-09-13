import { CalendarService } from "@mono/domain/internal/services/calendar-service";
import type { Holiday } from "@mono/domain/internal/types/holiday";

/**
 * Facade for calendar-related features.
 */
export class CalendarFeaturesService {
    constructor(private calendarService: CalendarService = new CalendarService()) {
    }

    async getHolidays(year: number): Promise<Holiday[]> {
        return this.calendarService.getHolidays(year);
    }
}