import { format } from "date-fns";
import { DateKey } from "../model/day";

export function getDateKey(date: Date): DateKey {
    return format(date, 'yyyy-MM-dd') as DateKey;
}