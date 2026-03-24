import {
  validateBookingForm,
  isBookingFormValid,
} from "../validation";

describe("validation utilities", () => {
  test("returns no errors for valid form data", () => {
    const result = validateBookingForm({
      date: "2026-03-24",
      time: "18:00",
      guests: 2,
      occasion: "Birthday",
    });

    expect(result).toEqual({});
    expect(
      isBookingFormValid({
        date: "2026-03-24",
        time: "18:00",
        guests: 2,
        occasion: "Birthday",
      })
    ).toBe(true);
  });

  test("returns errors for invalid form data", () => {
    const result = validateBookingForm({
      date: "",
      time: "",
      guests: 0,
      occasion: "",
    });

    expect(result.date).toBe("Please select a date.");
    expect(result.time).toBe("Please select a time.");
    expect(result.guests).toBe("Guests must be at least 1.");
    expect(result.occasion).toBe("Please select an occasion.");

    expect(
      isBookingFormValid({
        date: "",
        time: "",
        guests: 0,
        occasion: "",
      })
    ).toBe(false);
  });
});