import PackageHeader from "../../components/Package/PackageHeader";
import Footer from "../../components/Footer";
import CheckoutCart from "../../components/Checkout/CheckoutCart";
import { labels } from "../../static/labels";
import "./checkout.css";
import CheckoutTimer from "../../components/Checkout/CheckoutTimer";
import CheckoutForm from "../../components/Checkout/CheckoutForm";

export default function Checkout() {
  return (
    <div className="bg-white" id="root">
      <div className="mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
        <div className="flex flex-col flex-grow overflow-y-auto">
          <PackageHeader />
          <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
            <form className="flex flex-col w-full items-center">
              <h2>{labels.checkout.checkoutH1}</h2>
              <CheckoutTimer />

              <aside className="flex justify-between">
                <CheckoutForm />
                <div className="sticky top-2">
                  <CheckoutCart />

                  <button className="button">{labels.checkout.bookApt}</button>
                </div>
              </aside>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
