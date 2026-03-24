import { fireEvent, render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

window.alert = jest.fn();

describe("BookingForm interactions", () => {
  test("dispatches UPDATE_TIMES when the date changes", () => {
    const mockDispatch = jest.fn();
    const mockSetFormData = jest.fn();

    render(
      <BookingForm
        formData={{
          date: "",
          time: "",
          guests: 1,
          occasion: "",
        }}
        setFormData={mockSetFormData}
        availableTimes={["17:00", "18:00", "19:00"]}
        dispatch={mockDispatch}
      />
    );

    const dateInput = screen.getByLabelText("Date");

    fireEvent.change(dateInput, {
      target: { value: "2026-03-24" },
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      date: "2026-03-24",
    });

    expect(mockSetFormData).toHaveBeenCalled();
  });

  test("calls setFormData when a time is selected", () => {
    const mockDispatch = jest.fn();
    const mockSetFormData = jest.fn();

    render(
      <BookingForm
        formData={{
          date: "",
          time: "",
          guests: 1,
          occasion: "",
        }}
        setFormData={mockSetFormData}
        availableTimes={["17:00", "18:00", "19:00"]}
        dispatch={mockDispatch}
      />
    );

    const timeSelect = screen.getByLabelText("Time");

    fireEvent.change(timeSelect, {
      target: { value: "18:00" },
    });

    expect(mockSetFormData).toHaveBeenCalled();
  });

  test("dispatches BOOK_TIME when the form is submitted with valid data", () => {
    const mockDispatch = jest.fn();
    const mockSetFormData = jest.fn();

    render(
      <BookingForm
        formData={{
          date: "2026-03-24",
          time: "18:00",
          guests: 2,
          occasion: "Birthday",
        }}
        setFormData={mockSetFormData}
        availableTimes={["17:00", "18:00", "19:00"]}
        dispatch={mockDispatch}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: "Submit Reservation",
    });

    fireEvent.click(submitButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "BOOK_TIME",
      time: "18:00",
    });

    expect(mockSetFormData).toHaveBeenCalledWith({
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    });
  });
});