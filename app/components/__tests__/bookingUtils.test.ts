import { initializeTimes, updateTimes } from "../bookingUtils";

describe("bookingUtils", () => {
  test("initializeTimes returns the expected initial times", () => {
    expect(initializeTimes()).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
    ]);
  });

  test("updateTimes returns the same available times for UPDATE_TIMES", () => {
    const state = ["17:00", "18:00", "19:00", "20:00", "21:00"];

    const result = updateTimes(state, {
      type: "UPDATE_TIMES",
      date: "2026-03-24",
    });

    expect(result).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
    ]);
  });
});