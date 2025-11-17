import PackageHeader from "../../components/Package/PackageHeader";
import CollapsedPackageList from "../../components/CollapsedPackage/CollapsedPackageList";
import Cart from "../../components/Cart/Cart";
import "./Booking.css";
import Footer from "../../components/Footer";
import CartButtonsSection from "../../components/Cart/CartButtonsSection";

export default function Bookings() {
  const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

  return (
    <div id="bookings">
      <div className="bg-white" id="root">
        <div className="mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
          <div className="flex flex-col flex-grow overflow-y-auto">
            <PackageHeader />

            <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
              {/* Package list */}
              <CollapsedPackageList />

              <aside className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 hidden md-lg:block md-lg:px-4 max-w-cart-sidebar min-w-cart-sidebar ">
                <div className="sticky top-2">
                  {/* Service Cart */}
                  <Cart />

                  <CartButtonsSection cartItems={cartItems} />
                </div>
              </aside>
            </div>

            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
