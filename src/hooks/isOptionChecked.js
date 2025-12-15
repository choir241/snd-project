export function isOptionChecked({ optionName, packageName }) {
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
      return true;
    }
  }

  return false;
}
