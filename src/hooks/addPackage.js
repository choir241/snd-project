import { labels } from "../static/labels";

export function addPackage({
  packageOption,
  packageName,
  packagePrice,
  packageTimeAlloted,
  navigate,
}) {
  if (!packageOption) {
    document.querySelector("#noOptionSelected").innerHTML =
      "&#x26A0; Please select an option.";
    throw new Error("Please select an option.");
  }

  sessionStorage.setItem(
    "cart",
    JSON.stringify([
      {
        packageName: packageName,
        packagePrice: packagePrice,
        packageTimeAlloted: packageTimeAlloted,
        packageOption: packageOption,
      },
    ]),
  );

  return navigate(labels.bookings.appointmentsLink);
}
