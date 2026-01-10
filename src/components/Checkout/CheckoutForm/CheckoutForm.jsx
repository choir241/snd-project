import { labels } from "../../../static/labels";
import CheckoutInfoSection from "./CheckoutInfoSection";
import CheckoutCarSection from "./CheckoutCarSection";
import CheckoutHero from "../CheckoutCart/CheckoutHero";
import CheckoutLocationForm from "./CheckoutLocationForm";
import axios from "axios";
import AddNote from "./AddNote";
import CancellationPolicyProgress from "./CancellationPolicyProgress";

export default function CheckoutForm({ isCurrUser, userInfo, setUserInfo }) {
  const handleChange = (e) => {
    if (e.target.value !== null) {
      setUserInfo((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    } else {
      throw new Error(`There was an error on inputting your information.`);
    }
  };

  async function BookAppointment() {
    try {
      if (
        firstName &&
        lastName &&
        email &&
        phone &&
        streetAddress &&
        aptSuite &&
        city &&
        state &&
        zip
      ) {
        const customer = await axios.post(
          `${import.meta.env.VITE_BACKEND_API_URL}/createCustomer`,
          {
            firstName,
            lastName,
            email,
            phoneNumber: phone,
            streetAddress,
            suiteAddress: aptSuite,
            city,
            state,
            zipCode: zip,
            country: "USA",
          },
        );

        if (!customer) {
          throw new Error(
            "There was an error creating the customer with variable customer's value at: " +
              customer,
          );
        }

        console.log(customer);
      } else {
        throw new Error("One of the inputs were not filled out");
      }
    } catch (err) {
      console.error(
        `There was an error booking the appointment, ${err.message}`,
      );
    }
  }

  return (
    <section
      id="checkoutForm"
      className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 flex flex-col w-full px-4 md-lg:max-w-main-content "
    >
      <div className="flex-col items-center">
        <div className="flex flex-col">
          <CheckoutHero isCurrUser={isCurrUser} />

          <CheckoutInfoSection handleChange={handleChange} />

          <CheckoutCarSection handleChange={handleChange} />
        </div>

        <div className="mt-4">
          <h3 className="mb-2">{labels.checkout.whereWillApt}</h3>
          <CheckoutLocationForm handleChange={handleChange} />
        </div>

        <AddNote handleChange={handleChange} noteValue={userInfo.note || ""} />

        <CancellationPolicyProgress />
        <market-divider
          size="thin"
          margin="large"
          className="market-divider"
          hydrated=""
        >
          <template shadowrootmode="open"></template>
        </market-divider>
        <div className="mb-8 text-[12px] text-core-text-20 text-center">
          Upon booking, Square will automatically create an account for you with
          Square Appointments. You can sign back in using your mobile number at
          any time. You may also receive promotional emails from Square.
        </div>
      </div>
    </section>
  );
}
