export type BookingFormData = {
  date: string;
  time: string;
  guests: number;
  occasion: string;
};

export type BookingFormErrors = {
  date?: string;
  time?: string;
  guests?: string;
  occasion?: string;
};

export function validateBookingForm(data: BookingFormData): BookingFormErrors {
  const errors: BookingFormErrors = {};

  if (!data.date) {
    errors.date = "Please select a date.";
  }

  if (!data.time) {
    errors.time = "Please select a time.";
  }

  if (Number.isNaN(data.guests)) {
    errors.guests = "Please enter the number of guests.";
  } else if (data.guests < 1) {
    errors.guests = "Guests must be at least 1.";
  } else if (data.guests > 10) {
    errors.guests = "Guests cannot be more than 10.";
  }

  if (!data.occasion) {
    errors.occasion = "Please select an occasion.";
  }

  return errors;
}

export function isBookingFormValid(data: BookingFormData): boolean {
  return Object.keys(validateBookingForm(data)).length === 0;
}