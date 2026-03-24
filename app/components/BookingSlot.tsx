type BookingSlotProps = {
  time: string;
};

export default function BookingSlot({ time }: BookingSlotProps) {
  return (
    <li className="rounded-2xl bg-white px-5 py-4 shadow-sm">
      <span className="font-semibold text-[#495E57]">{time}</span>
    </li>
  );
}