import BookingSlot from "./BookingSlot";

type BookingSlotsProps = {
  availableTimes: string[];
};

export default function BookingSlots({ availableTimes }: BookingSlotsProps) {
  if (availableTimes.length === 0) {
    return (
      <p className="rounded-2xl bg-white p-4 text-[#333333] shadow-sm">
        No available booking times at the moment.
      </p>
    );
  }

  return (
    <ul className="grid gap-4">
      {availableTimes.map((time) => (
        <BookingSlot key={time} time={time} />
      ))}
    </ul>
  );
}