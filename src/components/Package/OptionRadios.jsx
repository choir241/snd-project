export default function OptionRadios({
  packageName,
  optionName,
  optionPrice,
  optionTimeAlloted,
  setPackageOption,
  timeTaken,
  className = "",
}) {
  function isChecked() {
    const cart = JSON.parse(sessionStorage.getItem("cart"));

    if (cart) {
      const findSelectedOption = cart.find((item) => {
        if (
          item.packageOption.name === optionName &&
          item.packageName === packageName
        )
          return item;
      });

      if (findSelectedOption) {
        return findSelectedOption.packageOption.name;
      }
    }
  }

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
              min: timeTaken.min,
            },
            name: optionName,
            price: optionPrice,
            timeAlloted: optionTimeAlloted,
          });
        }}
        checked={isChecked()}
        type="radio"
        aria-label={optionName}
        name="options"
        id={optionName}
      />
    </label>
  );
}
