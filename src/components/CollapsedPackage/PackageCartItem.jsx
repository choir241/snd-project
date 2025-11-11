import CartHero from "./CartHero";
import { labels } from "../../static/labels";

export default function PackageCartItem({
  packageName,
  packagePrice,
  packageTimeAlloted,
}) {
  return (
    <div className="desktop-cart mb-4 border border-solid border-black/[.05] rounded-md">
      <div
        data-testid="cart-accordion-label"
        className="cart-header px-4 my-4 flex items-center"
      >
        <CartHero
          cartItems={[
            {
              packageName: labels.packages.premiumPackage.name,
              packagePrice: labels.packages.premiumPackage.price,
              packageTimeAlloted: labels.packages.premiumPackage.timeAlloted,
              packageOption: labels.packages.premiumPackage.options[0],
            },
            {
              packageName: labels.packages.premiumPackage.name,
              packagePrice: labels.packages.premiumPackage.price,
              packageTimeAlloted: labels.packages.premiumPackage.timeAlloted,
              packageOption: labels.packages.premiumPackage.options[0],
            },
            {
              packageName: labels.packages.premiumPackage.name,
              packagePrice: labels.packages.premiumPackage.price,
              packageTimeAlloted: labels.packages.premiumPackage.timeAlloted,
              packageOption: labels.packages.premiumPackage.options[1],
            },
            {
              packageName: labels.packages.premiumPackage.name,
              packagePrice: labels.packages.premiumPackage.price,
              packageTimeAlloted: labels.packages.premiumPackage.timeAlloted,
              packageOption: labels.packages.premiumPackage.options[2],
            },
          ]}
        />

        <button
          aria-label="Collapse cart"
          rank="primary"
          data-testid="toggle-cart-button"
          className="ml-2 rounded-full bg-gray-100 text-black w-8 h-8 flex items-center justify-center shrink-0 market-button"
          size="medium"
          type="button"
          variant="regular"
          hydrated=""
        >
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 0.585786C6.89052 0.195262 7.52369 0.195262 7.91421 0.585786L13.9142 6.58579L12.5 8L7.20711 2.70711L1.91421 8L0.5 6.58579L6.5 0.585786Z"
              fill="black"
              fillOpacity="0.9"
            ></path>
          </svg>
        </button>
      </div>
      <div className="py-4 px-4 md-lg:max-h-[calc(100vh-280px)] overflow-y-auto">
        <div className="">
          <div data-testid="service-staff-row">
            <div className="relative flex pl-0">
              <div className="flex relative items-center grow">
                <div className="flex flex-col flex-grow gap-0.5 text-core-text-20 text-sm font-normal">
                  <span className="text-black text-base font-medium overflow-wrap-anywhere">
                    {packageName}
                  </span>
                  <span></span>
                  <span>2 Row SUV/Small Truck</span>
                </div>
                <div className="text-base font-normal ml-4 ">$350.00</div>
                <market-link
                  aria-label="Edit selection: Premium Package"
                  data-testid="edit-service"
                  className="ml-4 flex market-link"
                  hydrated=""
                >
                  <template shadowrootmode="open">
                    <button aria-label="Edit selection: Premium Package">
                      <slot></slot>
                    </button>
                  </template>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M17 4.17188C17.72 4.17188 18.45 4.45187 19 5.00187C20.1 6.10187 20.1 7.90188 19 9.00187L17 11.0019L8 20.0019H4V16.0019L13 7.00187L15 5.00187C15.55 4.45187 16.28 4.17188 17 4.17188ZM17.01 6.17188C16.88 6.17188 16.63 6.20187 16.42 6.41187L15.84 7.01188L17.01 8.18187L17.6 7.59188C17.81 7.37188 17.84 7.13188 17.84 7.00187C17.84 6.87187 17.82 6.62187 17.6 6.41187C17.38 6.20187 17.14 6.17188 17.01 6.17188ZM6 18.0019H7.17L15.58 9.59188L14.41 8.42188L6 16.8319V18.0019ZM12 18.002H20V20.002H12V18.002Z"
                      fill="black"
                      fillOpacity="0.42"
                    ></path>
                  </svg>
                </market-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
