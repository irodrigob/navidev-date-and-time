import DateUtils from "../dateUtils";

test("Transformar una fecha", () => {
  let date = new DateUtils();
  let salida = date.transform("21.08.2023", "DD.MM.YYYY", "YYYY-MM-DD");
  expect(salida).toBe("2023-08-21");
});
