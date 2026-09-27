const now = 1618425476787;

jest.spyOn(Date, "now").mockImplementation(() => now);

const currentDate = new Date(now);

class MockDate extends Date {
  constructor(date?: number | string | Date) {
    if (date !== undefined) {
      super(date as string);
    } else {
      super(currentDate);
    }
  }
}

Object.defineProperty(global, "Date", { value: MockDate });