export function calculateItemsTotal({ cartItems }) {
  let sumPrice = 0;
  cartItems.forEach((item) => {
    const separateDollarSign = item.packageOption.price
      .split("$")[1]
      .split(",")
      .join("");
    sumPrice += Number(separateDollarSign);
  });
  return sumPrice.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
