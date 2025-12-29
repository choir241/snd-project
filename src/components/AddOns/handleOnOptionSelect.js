import { checkForOptionDups } from "./checkForOptionDups";

export function handleOnOptionSelect({
  isDisabled,
  optionName,
  optionPrice,
  addOnOption,
  setAddOnOption,
}) {
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
