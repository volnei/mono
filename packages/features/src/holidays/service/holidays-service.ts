import { CalendarFeaturesService } from '@mono/domain/features/calendar-features-service';

// error cannot be imported
// import { CalendarRepository } from '@mono/domain/src/internal/repository/calendar-repository';

export class HolidaysService {

    constructor(private calendarFeatures: CalendarFeaturesService = new CalendarFeaturesService()) {
        // error cannot be imported
        // const calendarRepository = new CalendarRepository();
        // calendarRepository.getHolidays(2031)
    }

    async getHolidays(year: number) {
        return this.calendarFeatures.getHolidays(year);
    }
}