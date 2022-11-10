import TimeAgo, { FormatStyleName } from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});
TimeAgo.addDefaultLocale(en);

const timeAgoFormatter = new TimeAgo("en-US");

export function timeAgo(date: Date, format?: FormatStyleName) {
    const result = timeAgoFormatter.format(date, format ?? "mini-minute-now");
    if (typeof result !== "string") return result;
    return `${result.replace("now", "just a second")}`;
}
