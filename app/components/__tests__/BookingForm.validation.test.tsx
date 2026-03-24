import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm validation", () => {
  test("applies correct HTML5 validation attributes", () => {
    render(
      <BookingForm
        formData={{
          date: "",
          time: "",
          guests: 1,
          occasion: "",
        }}
        setFormData={jest.fn()}
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const dateInput = screen.getByLabelText("Date");
    const timeSelect = screen.getByLabelText("Time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    const submitButton = screen.getByRole("button", {
      name: "Submit Reservation",
    });

    expect(dateInput).toHaveAttribute("required");
    expect(timeSelect).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(occasionSelect).toHaveAttribute("required");
    expect(submitButton).toBeDisabled();
  });

  test("enables submit button when form is valid", () => {
    render(
      <BookingForm
        formData={{
          date: "2026-03-24",
          time: "18:00",
          guests: 2,
          occasion: "Birthday",
        }}
        setFormData={jest.fn()}
        availableTimes={["17:00", "18:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: "Submit Reservation",
    });

    expect(submitButton).toBeEnabled();
  });
});