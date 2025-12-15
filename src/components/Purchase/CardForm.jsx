import { payments } from "@square/web-sdk";
import { useEffect } from "react";
import { labels } from "../../static/labels";

export default function CardForm() {
  useEffect(() => {
    async function renderPaymentForm() {
      try {
        /*CREATE ORDER at POST /orders to create order purchase for a particular item to be able to identify the item(s) when you create a payment*/

        const response = await payments(
          import.meta.env.VITE_APP_ID,
          import.meta.env.VITE_LOCATION_ID,
        );

        if (!response) {
          throw new Error("There was an error ");
        }

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

          const strongCustomerAuth = await response.verifyBuyer(result.token, {
            amount: amount,
            currencyCode: "USD",
            intent: "CHARGE",
            billingContact: { postalCode: result.details.billing.postalCode },
          });

          const paymentData = await axios.post(
            `${import.meta.env.VITE_BACKEND_API_URL}/createPayment`,
            {
              amount: amount,
              token: result.token,
              verificationToken: strongCustomerAuth.token,
            },
          );

          if (paymentData) {
          }
        });
      } catch (err) {
        throw new Error(
          `There was an error rendering the payment form: ${err}`,
        );
      }
    }
    renderPaymentForm();
  }, []);

  return (
    <>
      <div id="card"></div>
      <button className="button" id="pay">
        {labels.payments.bookAppointment}
      </button>
    </>
  );
}
