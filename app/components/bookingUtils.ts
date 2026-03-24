export type BookingAction =
  | { type: "UPDATE_TIMES"; date: string }
  | { type: "BOOK_TIME"; time: string };

export function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

export function updateTimes(state: string[], action: BookingAction) {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    case "BOOK_TIME":
      return state.filter((time) => time !== action.time);
    default:
      return state;
  }
}