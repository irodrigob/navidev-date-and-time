import DateUtils from "./src";

const d = new DateUtils();

const f = new Date(Date.UTC(2024, 10, 12));

const fecha = new DateUtils().format(f, "YYYY-MM-DD", true);

console.log(fecha);
