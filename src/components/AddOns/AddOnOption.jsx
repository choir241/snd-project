export default function AddOnOption({
  optionName,
  optionPrice,
  className,
  addOnOption,
  setAddOnOption,
  id,
  findPackage,
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

  function handleOnOptionSelect({ isDisabled }) {
    if (isDisabled) {
      throw new Error("This is disabled");
    }

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

  let modifiers;
  let isDisabled;

  if (findPackage.modifiers) {
    modifiers = findPackage.modifiers.filter((modifier) => {
      if (modifier.modifierId === id) {
        return modifier;
      }
    })[0];

    isDisabled = modifiers.hiddenOnlineOverride === "YES" ? true : false;
  }

  return (
    <label
      aria-selected="true"
      id="option-form"
      htmlFor={optionName}
      className={`add-on-option option-form-container market-row has-slotted-control ${className}`}
    >
      <div className={`radio-label-container ${isDisabled ? "disabled" : ""}`}>
        <label slot="label">{optionName}</label>
        <span>${optionPrice}</span>
      </div>

      <input
        disabled={isDisabled}
        onChange={() => {
          handleOnOptionSelect({ isDisabled: isDisabled });
        }}
        type="checkbox"
        aria-label={optionName}
        name="options"
        id={optionName}
      />
    </label>
  );
}
