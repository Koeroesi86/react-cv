import formatPeriod from "./formatPeriod";

describe("formatPeriod", () => {
  it("puts the month before the year", () => {
    expect(formatPeriod("2026 Jan.", "2026 Oct.")).toBe("Jan 2026 – Oct 2026");
  });

  it("turns now into Present", () => {
    expect(formatPeriod("2026 Jan.", "now")).toBe("Jan 2026 – Present");
  });

  it("keeps years without a month", () => {
    expect(formatPeriod("2007", "2011")).toBe("2007 – 2011");
    expect(formatPeriod(undefined, "2007")).toBe("2007");
  });

  it("leaves unknown formats alone", () => {
    expect(formatPeriod("Spring 2020", "Summer 2021")).toBe("Spring 2020 – Summer 2021");
  });
});
