import Cart from "./Cart";
import CartButtonsSection from "./CartButtonsSection";
import "./cart.css";

export default function PackageCart() {
  const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

  return (
    <>
      <aside className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 hidden md-lg:block md-lg:px-4 max-w-cart-sidebar min-w-cart-sidebar ">
        <div className="sticky top-2">
          <Cart />

          <CartButtonsSection cartItems={cartItems} />
        </div>
      </aside>
      {/* Mobile Cart */}
      <aside
        id="mobile-cart"
        data-testid="mobile-cart"
        className="mobile-cart md-lg:hidden z-below-market-context-manager absolute inset-x-0 bottom-0 bg-white shadow-[0_-4px_30px_-10px_rgba(0,0,0,0.3)] rounded-t-3xl max-h-full flex flex-col"
      ></aside>
    </>
  );
}
