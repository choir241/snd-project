import { labels } from "../../static/labels";
import CartArrowButton from "../Cart/CartArrowButton";
import PackageItemList from "../Cart/PackageItemList";
import { useState } from "react";
import CheckoutCartHero from "./CheckoutCartHero";
import CheckoutCartTotals from "./CheckoutCartTotals";

export default function CheckoutCart() {
  const [togglePackageItemList, setTogglePackageItemList] = useState(false);
  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];

  return (
    <>
      {cartItems.length ? (
        <div
          id="checkout-cart"
          data-testid="desktop-cart"
          className="flex flex-col sticky top-2"
        >
          <h2 className="mb-4 heading-20">
            {labels.bookings.appointmentSummary}
          </h2>

          <div className="desktop-cart mb-4 border border-solid border-black/[.05] rounded-md">
            <div
              data-testid="cart-accordion-label"
              className={`${
                togglePackageItemList ? "" : "cart-header"
              } px-4 my-4 flex items-center justify-between`}
            >
              <CheckoutCartHero />

              <CartArrowButton
                togglePackageItemList={togglePackageItemList}
                setTogglePackageItemList={setTogglePackageItemList}
              />
            </div>

            {togglePackageItemList ? (
              ""
            ) : (
              <div className="overflow-x-hidden overflow-y-auto md-lg:max-h-[calc(100vh-412px)] -mx-4 px-4">
                {" "}
                <PackageItemList cartItems={cartItems} />
                <CheckoutCartTotals />
              </div>
            )}
          </div>

          <button className="button">{labels.checkout.bookApt}</button>
        </div>
      ) : (
        <div className="p-4">{labels.bookings.noServicesAddedYet}</div>
      )}
    </>
  );
}
