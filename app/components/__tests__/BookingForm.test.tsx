import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

describe("BookingForm", () => {
  test("renders the BookingForm labels", () => {
    render(
      <BookingForm
        formData={{
          date: "",
          time: "",
          guests: 1,
          occasion: "",
        }}
        setFormData={jest.fn()}
        availableTimes={["17:00", "18:00", "19:00"]}
        dispatch={jest.fn()}
        submitForm={jest.fn()}
      />
    );

    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
  });
});