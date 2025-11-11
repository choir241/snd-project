export default function OptionRadios({
  optionName,
  optionPrice,
  optionTimeAlloted,
  setPackageOption,
  timeTaken,
  className = "",
}) {
  return (
    <label
      aria-selected="true"
      id="option-form"
      htmlFor={optionName}
      className={`option-form-container market-row has-slotted-control ${className}`}
    >
      <div className="radio-label-container">
        <label slot="label">{optionName}</label>
        <span>
          {optionPrice}・{optionTimeAlloted}
        </span>
      </div>
      <input
        onChange={() => {
          setPackageOption({
            timeTaken: {
              hr: timeTaken.hr,
              min: timeTaken.min
            },
            name: optionName,
            price: optionPrice,
            timeAlloted: optionTimeAlloted,
          });
        }}
        type="radio"
        aria-label={optionName}
        name="options"
        id={optionName}
      />
    </label>
  );
}
