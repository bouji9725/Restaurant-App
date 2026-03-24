"use client";

type FormData = {
  date: string;
  time: string;
  guests: number;
  occasion: string;
};

type BookingFormProps = {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  availableTimes: string[];
  dispatch: React.Dispatch<
    | { type: "UPDATE_TIMES"; date: string }
    | { type: "BOOK_TIME"; time: string }
  >;
};

export default function BookingForm({
  formData,
  setFormData,
  availableTimes,
  dispatch,
}: BookingFormProps) {
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

    if (!formData.date || !formData.time || !formData.occasion) {
      alert("Please complete all required fields.");
      return;
    }

    dispatch({
      type: "BOOK_TIME",
      time: formData.time,
    });

    alert("Reservation submitted successfully!");

    setFormData({
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 rounded-2xl bg-white p-6 shadow-md"
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
          className="min-h-12 rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#495E57]"
          required
        />
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
          className="min-h-12 rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#495E57]"
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
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
          value={formData.guests}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              guests: Number(e.target.value),
            }))
          }
          className="min-h-12 rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#495E57]"
          required
        />
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
          className="min-h-12 rounded-xl border border-gray-300 px-4 outline-none transition focus:border-[#495E57]"
          required
        >
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>

      <button
        type="submit"
        className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-[#F4CE14] px-6 font-bold text-black transition hover:opacity-90"
      >
        Submit Reservation
      </button>
    </form>
  );
}