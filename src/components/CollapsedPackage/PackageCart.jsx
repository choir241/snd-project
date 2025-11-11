import { labels } from "../../static/labels";
import PackageCartItem from "./PackageCartItem";

export default function PackageCart() {
  return (
    <>
      <aside className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 hidden md-lg:block md-lg:px-4 max-w-cart-sidebar min-w-cart-sidebar ">
        <div className="sticky top-2">
          <div data-testid="desktop-cart" className="flex flex-col">
            <h2 className="mb-4 heading-20">
              {labels.bookings.appointmentSummary}
            </h2>
            <div className="desktop-cart mb-4 border border-solid border-black/[.05] rounded-md">
              <PackageCartItem

              />

              <div className="p-4">{labels.bookings.noServicesAddedYet}</div>
            </div>
          </div>
          <div className="market-button-group">
            <button className="nextButton nextButtonDisabled">
              {labels.bookings.nextButton}
            </button>

            <button className="nextButton button">
              {labels.bookings.nextButton}
            </button>
          </div>
        </div>
      </aside>
      <aside
        id="mobile-cart"
        data-testid="mobile-cart"
        className="mobile-cart md-lg:hidden z-below-market-context-manager absolute inset-x-0 bottom-0 bg-white shadow-[0_-4px_30px_-10px_rgba(0,0,0,0.3)] rounded-t-3xl max-h-full flex flex-col"
      ></aside>
    </>
  );
}
