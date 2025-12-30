import PackageHeader from "../../components/Package/PackageHeader";
import Footer from "../../components/Footer";
import CheckoutCart from "../../components/Checkout/CheckoutCart";
import { labels } from "../../static/labels";
import "./checkout.css";
import CheckoutTimer from "../../components/Checkout/CheckoutTimer";

export default function Checkout() {
  return (
    <div className="bg-white" id="root">
      <div className="mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
        <div className="flex flex-col flex-grow overflow-y-auto">
          <PackageHeader />
          <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
            <CheckoutTimer />
            <aside className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 hidden md-lg:block md-lg:px-4 max-w-cart-sidebar min-w-cart-sidebar ">
              <div className="sticky top-2">
                <CheckoutCart />

                <button className="button">{labels.checkout.bookApt}</button>
              </div>
            </aside>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
