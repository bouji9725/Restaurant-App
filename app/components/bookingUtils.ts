export type BookingAction =
  | { type: "INITIALIZE_TIMES" }
  | { type: "UPDATE_TIMES"; date: string }
  | { type: "BOOK_TIME"; time: string };

const DEFAULT_TIMES = ["17:00", "18:00", "19:00", "20:00", "21:00"];

export function initializeTimes() {
  if (typeof window !== "undefined" && window.fetchAPI) {
    return window.fetchAPI(new Date());
  }

  return DEFAULT_TIMES;
}

export function updateTimes(state: string[], action: BookingAction) {
  switch (action.type) {
    case "INITIALIZE_TIMES": {
      if (typeof window !== "undefined" && window.fetchAPI) {
        return window.fetchAPI(new Date());
      }
      return DEFAULT_TIMES;
    }

    case "UPDATE_TIMES": {
      if (typeof window !== "undefined" && window.fetchAPI) {
        return window.fetchAPI(new Date(action.date));
      }
      return DEFAULT_TIMES;
    }

    case "BOOK_TIME":
      return state.filter((time) => time !== action.time);

    default:
      return state;
  }
}