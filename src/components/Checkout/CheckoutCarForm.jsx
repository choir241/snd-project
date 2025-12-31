export default function CheckoutCarForm({
  carLabel,
  carForId,
  onChange,
  className,
}) {
  function onInputChange(inputValue) {
    if (inputValue) {
      onChange(inputValue);
    } else {
      throw new Error(`There was an error on inputting the ${carLabel}`);
    }
  }

  return (
    <span>
      <label className="font-semibold" htmlFor={carForId}>
        {carLabel}
      </label>
      <input
        className={`mt-2 ${className}`}
        onChange={(e) => {
          onInputChange(e.target.value);
        }}
        type="text"
        id={carForId}
        placeholder="Enter your response"
        required
      />
    </span>
  );
}
