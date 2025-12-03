import PackageHeader from "../../components/Package/PackageHeader";
import CollapsedPackageList from "../../components/CollapsedPackage/CollapsedPackageList";
import Cart from "../../components/Cart/Cart";
import "./Booking.css";
import Footer from "../../components/Footer";
import CartButtonsSection from "../../components/Cart/CartButtonsSection";
import axios from "axios";
import { useState, useEffect } from "react";
import { payments } from "@square/web-sdk";

export default function Bookings() {
  const cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

  const [authLink, setAuthLink] = useState("");

  // card.tokenize() return object
  // {
  //   details: {
  //     billing: {
  //       postalCode: "zip code";
  //     }
  //     card: {
  //       brand: "VISA";
  //       cardType: "CREDIT";
  //       expMonth: Number(month);
  //       expYear: Number(year);
  //       last4: "4 numbers";
  //       prepaidType: "NOT_PREPAID";
  //     }
  //     method: "Card";
  //   }
  //   status: "OK";
  //   token: "token";
  // }

  // TEST CARD ONLY NOT MEANT FOR ACTUAL PAYMENTS
  // 4111 1111 1111 1111
  // 111
  // 05/2026
  // 94103

  // verifyBuyer arguments
  // amount: string;
  // currencyCode: string;
  // intent: "CHARGE" | "STORE";
  // billingContact?: {...};

  // verifyBuyer return object
  // {
  //   token: "token";
  //   userChallenged: false;
  // }

  useEffect(() => {
    async function renderPaymentForm() {
      try {
        const response = await payments(
          import.meta.env.VITE_APP_ID,
          import.meta.env.VITE_LOCATION_ID
        );

        const cardOptions = {
          style: {
            input: {
              backgroundColor: "white",
            },
          },
        };
        const card = await response.card(cardOptions);
        await card.attach("#card");
        const payButton = document.getElementById("pay");
        payButton.addEventListener("click", async () => {
          const result = await card.tokenize();

          console.log(result);  
          const strongCustomerAuth = await response.verifyBuyer(result.token, {
            amount: "100.00",
            currencyCode: "USD",
            intent: "CHARGE",
            billingContact: { postalCode: result.details.billing.postalCode },
          });

        const paymentData = await axios.post("http://localhost:8000/createPayment", {
          amount: 100,
          token: result.token,
          verificationToken: strongCustomerAuth.token
        });

        });
      } catch (err) {
        console.error(err);
        throw new Error(
          `There was an error rendering the payment form: ${err}`
        );
      }
    }
    renderPaymentForm();
  }, []);

  useEffect(() => {
    async function generateToken() {
      try {
        const generatedToken = await axios.get(
          "http://localhost:8000/generateToken"
        );
        setAuthLink(generatedToken.data.url);
      } catch (err) {
        console.error(err);
      }
    }
    generateToken();
  }, []);

  useEffect(() => {
    async function refreshToken() {
      try {
        axios.get("http://localhost:8000/refreshToken");
      } catch (err) {
        console.error(`Error refreshing token + ${err}`);
      }
    }
  });

  return (
    <div id="bookings">
      <div className="bg-white" id="root">
        <div className="mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
          <div className="flex flex-col flex-grow overflow-y-auto">
            <PackageHeader />
            <button>
              <a href={authLink}>Login</a>
            </button>

            <div id="card"></div>
            <button id="pay">Pay</button>

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
