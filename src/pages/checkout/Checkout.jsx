import PackageHeader from "../../components/Package/PackageHeader";
import Footer from "../../components/Footer";
import CheckoutCart from "../../components/Checkout/CheckoutCart";
import { labels } from "../../static/labels";
import "./checkout.css";
import CheckoutTimer from "../../components/Checkout/CheckoutTimer";
import CheckoutForm from "../../components/Checkout/CheckoutForm";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Checkout() {
  const [isCurrUser, setIsCurrUser] = useState(false);

  useEffect(() => {
    async function getCurrUser() {
      try {
        const user = await axios.post(
          `${import.meta.env.VITE_BACKEND_API_URL}/getCurrUser`,
          { oAuthCode: "" },
        );

        const date = new Date(user.data.expiresAt);

        if (date) {
          setIsCurrUser(true);
        }
      } catch (err) {
        console.error(
          `There was an error getting the current user: ${err.message}`,
        );
      }
    }
    getCurrUser();
  }, []);

  return (
    <div className="bg-white" id="root">
      <div className="mb-0 flex min-h-screen relative">
        <div className="flex flex-col flex-grow">
          <PackageHeader />
          <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
            <form className="flex flex-col w-full items-center">
              <h2>{labels.checkout.checkoutH1}</h2>
              <CheckoutTimer />

              <aside className="flex justify-between mt-8 w-full items-start">
                <CheckoutForm isCurrUser={isCurrUser} />
                <CheckoutCart />
              </aside>
            </form>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
