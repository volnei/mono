import styles from "./page.module.css";
import { HolidaysService } from "@mono/features/holidays/service/holidays-service";

export default async function Home() {
  const holidaysService = new HolidaysService();
  return <main className={styles.main}>
    <h1>Holidays</h1>
    <ul>
      { (await holidaysService.getHolidays(2024)).map(holiday => <li key={holiday.date}>{holiday.name} - {holiday.date}</li>) }
    </ul>
  </main>;
}
