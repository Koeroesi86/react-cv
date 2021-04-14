import transformCv from "./transformCv";
import exampleCV from "../example/cv";
import getColourScheme from "./utils/getColourScheme";
import { SchemeNames } from "./types";

describe("transformCv", () => {
  it("should transform cv with lightblue scheme", () => {
    const result = transformCv(exampleCV, getColourScheme(SchemeNames.lightblue), "A4");

    expect(result).toMatchSnapshot();
  });
});
