import { payments } from "@square/web-sdk";
import { useEffect } from "react";

export default function CardForm() {
  useEffect(() => {
    async function renderPaymentForm() {
      try {
        const response = await payments(
          import.meta.env.VITE_APP_ID,
          import.meta.env.VITE_LOCATION_ID
        );

        if(!response){
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
            amount: "1.00",
            currencyCode: "USD",
            intent: "CHARGE",
            billingContact: { postalCode: result.details.billing.postalCode },
          });

          const paymentData = await axios.post(
            "http://localhost:8000/createPayment",
            {
              amount: 1,
              token: result.token,
              verificationToken: strongCustomerAuth.token,
            }
          );

          if (paymentData) {
          }
        });
      } catch (err) {
        throw new Error(
          `There was an error rendering the payment form: ${err}`
        );
      }
    }
    renderPaymentForm();
  }, []);

  return (
    <>
      <div id="card"></div>
      <button className="button" id="pay">Pay</button>
    </>
  );
}
