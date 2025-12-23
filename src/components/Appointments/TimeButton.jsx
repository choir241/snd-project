export default function TimeButton({ time }) {
  return (
    <button
      size="small"
      data-testid="time-slot"
      role="listitem"
      className="text-black w-24 sm:w-36 whitespace-nowrap flex-none market-button time-button"
      rank="secondary"
      type="button"
      variant="regular"
      hydrated=""
    >
      {time}
    </button>
  );
}
