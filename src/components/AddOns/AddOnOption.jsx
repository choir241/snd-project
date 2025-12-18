export default function AddOnOption({
  optionName,
  optionPrice,
  className,
  addOnOption,
  setAddOnOption,
}) {
  function checkForOptionDups(optionList) {
    const uniqueOptions = [];
    let dups = false;
    optionList.forEach((option) => {
      if (uniqueOptions.indexOf(option.optionName) == -1) {
        uniqueOptions.push(option.optionName);
      } else {
        dups = true;
        return;
      }
    });

    return dups;
  }

  function handleOnOptionSelect() {
    const optionList = [{ optionName, optionPrice }, ...addOnOption];
    if (!addOnOption.length) {
      setAddOnOption([{ optionName, optionPrice }]);
    } else if (checkForOptionDups(optionList)) {
      const removeSelectedOption = addOnOption.filter((option) => {
        if (option.optionName !== optionName) {
          return option;
        }
      });
      setAddOnOption(removeSelectedOption);
    } else {
      setAddOnOption(optionList);
    }
  }

  return (
    <label
      aria-selected="true"
      id="option-form"
      htmlFor={optionName}
      className={`add-on-option option-form-container market-row has-slotted-control ${className}`}
    >
      <div className="radio-label-container">
        <label slot="label">{optionName}</label>
        <span>${optionPrice}</span>
      </div>

      <input
        onChange={() => {
          handleOnOptionSelect();
        }}
        type="checkbox"
        aria-label={optionName}
        name="options"
        id={optionName}
      />
    </label>
  );
}
