export default function OptionRadios({
  optionName,
  optionPrice,
  optionTimeAlloted,
  className = "",
}) {
  return (
    <form
      aria-selected="true"
      id="option-form"
      className={`market-row has-slotted-control ${className}`}
    >
      <div className="radio-label-container">
        <label slot="label">{optionName}</label>
        <span>
          {optionPrice}・{optionTimeAlloted}
        </span>
      </div>
      <input type="radio" aria-label={optionName} />
    </form>
  );
}
