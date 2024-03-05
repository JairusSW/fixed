import { Fixed } from "../assembly/fixed";
import { describe, expect, initialize } from "./lib/test";

initialize("@steerprotocol/fixed");
describe("Should Perform Subtraction", () => {
  expect(Fixed.from(600.25).sub(Fixed.from(25.5)))
    .toEqual(600.25 - 25.5)
    .desc("600.25 - 25.5")
    .test(true);

  expect(Fixed.from(25.5).sub(Fixed.from(600.25)))
    .toEqual(25.5 - 600.25)
    .desc("25.5 - 600.25")
    .test(true);

  expect(Fixed.from(0.5).sub(Fixed.from(0.5)))
    .toEqual(0.5 - 0.5)
    .desc("0.5 - 0.5")
    .test(true);

  expect(Fixed.from(0.6).sub(Fixed.from(0.5)))
    .toEqual(0.6 - 0.5)
    .desc("0.6 - 0.5")
    .test(true);

  expect(Fixed.from(0.55).sub(Fixed.from(0.5)))
    .toEqual(0.55 - 0.5)
    .desc("0.55 - 0.5")
    .test(true);

  expect(Fixed.from(0.5).sub(Fixed.from(0.55)))
    .toEqual(0.5 - 0.55)
    .desc("0.5 - 0.55")
    .test(true);
});