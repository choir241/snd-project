import { labels } from "../../static/labels";
import CartHero from "./CartHero";
import CartArrowButton from "./CartArrowButton";
import PackageItemList from "./PackageItemList";
import { useState } from "react";

export default function Cart() {
  const [togglePackageItemList, setTogglePackageItemList] = useState(false);

  const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

  return (
    <>
      {cartItems.length ? (
        <div data-testid="desktop-cart" className="flex flex-col">
          <h2 className="mb-4 heading-20">
            {labels.bookings.appointmentSummary}
          </h2>

          <div className="desktop-cart mb-4 border border-solid border-black/[.05] rounded-md">
            <div
              data-testid="cart-accordion-label"
              className={`${
                togglePackageItemList ? "" : "cart-header"
              } px-4 my-4 flex items-center`}
            >
              <CartHero cartItems={cartItems} />

              <CartArrowButton
                togglePackageItemList={togglePackageItemList}
                setTogglePackageItemList={setTogglePackageItemList}
              />
            </div>

            {togglePackageItemList ? (
              ""
            ) : (
              <PackageItemList cartItems={cartItems} />
            )}
          </div>
        </div>
      ) : (
        <div className="p-4">{labels.bookings.noServicesAddedYet}</div>
      )}
      {/* Mobile Cart */}
      <aside
        id="mobile-cart"
        data-testid="mobile-cart"
        className="mobile-cart md-lg:hidden z-below-market-context-manager absolute inset-x-0 bottom-0 bg-white shadow-[0_-4px_30px_-10px_rgba(0,0,0,0.3)] rounded-t-3xl max-h-full flex flex-col"
      ></aside>
    </>
  );
}
