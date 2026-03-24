"use client";

import {
  BookingFormData,
  validateBookingForm,
  isBookingFormValid,
} from "./validation";

type BookingFormProps = {
  formData: BookingFormData;
  setFormData: React.Dispatch<React.SetStateAction<BookingFormData>>;
  availableTimes: string[];
  dispatch: React.Dispatch<
    | { type: "INITIALIZE_TIMES" }
    | { type: "UPDATE_TIMES"; date: string }
    | { type: "BOOK_TIME"; time: string }
  >;
  submitForm: (formData: BookingFormData) => void;
};

export default function BookingForm({
  formData,
  setFormData,
  availableTimes,
  dispatch,
  submitForm,
}: BookingFormProps) {
  const errors = validateBookingForm(formData);
  const isValid = isBookingFormValid(formData);

  function handleDateChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selectedDate = e.target.value;

    setFormData((prev) => ({
      ...prev,
      date: selectedDate,
      time: "",
    }));

    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!isValid) {
      return;
    }

    submitForm(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-2xl bg-white p-6 shadow-md"
      aria-label="Booking form"
    >
      <div className="grid gap-2">
        <label htmlFor="res-date" className="font-semibold text-[#333333]">
          Date
        </label>
        <input
          id="res-date"
          type="date"
          value={formData.date}
          onChange={handleDateChange}
          min={new Date().toISOString().split("T")[0]}
          required
          aria-label="Choose reservation date"
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "date-error" : undefined}
          className="min-h-12 rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#495E57]"
        />
        {errors.date && (
          <p id="date-error" className="text-sm text-red-600">
            {errors.date}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="res-time" className="font-semibold text-[#333333]">
          Time
        </label>
        <select
          id="res-time"
          value={formData.time}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              time: e.target.value,
            }))
          }
          required
          aria-label="Choose reservation time"
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? "time-error" : undefined}
          className="min-h-12 rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#495E57]"
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
        {errors.time && (
          <p id="time-error" className="text-sm text-red-600">
            {errors.time}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="guests" className="font-semibold text-[#333333]">
          Number of guests
        </label>
        <input
          id="guests"
          type="number"
          min={1}
          max={10}
          step={1}
          value={formData.guests}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              guests: Number(e.target.value),
            }))
          }
          required
          aria-label="Number of guests"
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? "guests-error" : undefined}
          className="min-h-12 rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#495E57]"
        />
        {errors.guests && (
          <p id="guests-error" className="text-sm text-red-600">
            {errors.guests}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <label htmlFor="occasion" className="font-semibold text-[#333333]">
          Occasion
        </label>
        <select
          id="occasion"
          value={formData.occasion}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              occasion: e.target.value,
            }))
          }
          required
          aria-label="Choose occasion"
          aria-invalid={!!errors.occasion}
          aria-describedby={errors.occasion ? "occasion-error" : undefined}
          className="min-h-12 rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#495E57]"
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && (
          <p id="occasion-error" className="text-sm text-red-600">
            {errors.occasion}
          </p>
        )}
      </div>

      <button
  type="submit"
  disabled={!isValid}
  aria-label="Submit Reservation"
  className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#F4CE14] px-6 font-bold text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
>
  Submit Reservation
</button>
    </form>
  );
}