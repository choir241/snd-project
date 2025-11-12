import { labels } from "../../static/labels";
export default function CollapsedPackage({
  packageRedirectLink,
  packageName,
  packageFirstService,
  packageSecondService,
  packagePrice,
  packageTimeAlloted,
}) {
  function checkIfAdded() {
    const cart = JSON.parse(sessionStorage.getItem("cart"));

    if (cart) {
      let isAdded = false;

      cart.forEach((item) => {
        if (item.packageName === packageName) {
          isAdded = true;
          return;
        }
      });

      return isAdded;
    }
  }

  return (
    <div className="collapsedPackageHoverContainer">
      <div className="collapsedPackage">
        <a href={packageRedirectLink}>
          <label slot="label" className="overflow-wrap-anywhere">
            {packageName}
          </label>
          <div
            data-testid="service-row-description"
            className="paragraph-20 text-ellipsis overflow-hidden line-clamp-2"
          >
            {packageFirstService && packageSecondService ? (
              <ul>
                <li>{packageFirstService}</li>
                <li>{packageSecondService}</li>
              </ul>
            ) : (
              ""
            )}
          </div>
          <p className="text-core-text-10">
            {packagePrice} ・ {packageTimeAlloted}
          </p>
          <p className="check-mark-added">
            {checkIfAdded() ? <>&#10003; {labels.bookings.added}</> : ""}
          </p>
        </a>
      </div>
    </div>
  );
}
