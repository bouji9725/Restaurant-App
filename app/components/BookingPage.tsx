"use client";

import { useReducer, useState } from "react";
import BookingForm from "@/components/BookingForm";
import BookingSlots from "@/components/BookingSlots";

type FormData = {
  date: string;
  time: string;
  guests: number;
  occasion: string;
};

type Action =
  | { type: "UPDATE_TIMES"; date: string }
  | { type: "BOOK_TIME"; time: string };

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state: string[], action: Action) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    case "BOOK_TIME":
      return state.filter((time) => time !== action.time);
    default:
      return state;
  }
}

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const [formData, setFormData] = useState<FormData>({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  });

  return (
    <main className="bg-[#EDEFEE] px-4 py-10 md:px-6 md:py-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <h1 className="mb-2 font-serif text-5xl leading-none text-[#495E57] md:text-6xl">
            Reserve a Table
          </h1>
          <p className="mb-8 max-w-xl text-base text-[#333333] md:text-lg">
            Choose your preferred date, time, number of guests, and occasion to
            complete your reservation at Little Lemon.
          </p>

          <BookingForm
            formData={formData}
            setFormData={setFormData}
            availableTimes={availableTimes}
            dispatch={dispatch}
          />
        </div>

        <div>
          <h2 className="mb-6 font-serif text-4xl leading-none text-[#333333] md:text-5xl">
            Available Slots
          </h2>
          <BookingSlots availableTimes={availableTimes} />
        </div>
      </div>
    </main>
  );
}