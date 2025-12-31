import { labels } from "../../static/labels";
import { useState } from "react";
import CheckoutInfoSection from "./CheckoutInfoSection";
import CheckoutCarSection from "./CheckoutCarSection";
import CheckoutHero from "./CheckoutHero";
import CheckoutLocationForm from "./CheckoutLocationForm";

export default function CheckoutForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [carYear, setCarYear] = useState("");
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [streetAddress, setStreetAddress] = useState("");

  return (
    <section
      id="checkoutForm"
      className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 flex flex-col w-full px-4 md-lg:max-w-main-content "
    >
      <div className="flex-col items-center">
        <div className="flex flex-col">
          <CheckoutHero />

          <CheckoutInfoSection
            setPhone={setPhone}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setEmail={setEmail}
          />

          <CheckoutCarSection
            setCarYear={setCarYear}
            setCarMake={setCarMake}
            setCarModel={setCarModel}
          />
        </div>

        <div className="mt-4">
          <h3 className="mb-2">{labels.checkout.whereWillApt}</h3>
          <CheckoutLocationForm setStreetAddress={setStreetAddress} />
        </div>

        <div className="col-span-2 flex flex-col py-6 separator">
          <div className="flex items-center">
            <h3 className="flex-1">{labels.checkout.aptNote}</h3>
            <span className="market-link" hydrated="">
              <span className="addLink font-purple font-semibold">
                {labels.checkout.addLink}
              </span>
            </span>
          </div>
        </div>
        <market-divider
          margin="large"
          size="thin"
          className="col-span-2 market-divider"
          hydrated=""
        >
          <template shadowrootmode="open"></template>
        </market-divider>
        <div className="my-4">
          <h3 className="mb-4">Cancellation policy</h3>
          <div className="w-full mb-4 pt-12">
            <div className="relative h-6 w-full">
              <div className="absolute h-full w-full rounded-full border border-solid border-black/5"></div>
              <div className="flex justify-end absolute h-full pr-1 bg-core-emphasis-40 w-2/3 rounded-full">
                <div className="relative">
                  <market-pill
                    size="small"
                    variant="emphasis"
                    className="absolute -translate-x-1/2 left-2 -top-10 bg-core-emphasis-fill text-core-text-white market-pill"
                    hydrated=""
                  >
                    <template shadowrootmode="open">
                      <slot name="icon"></slot>
                      <slot></slot>
                    </template>
                    Cancel before{" "}
                  </market-pill>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-bbf-darken-fill h-full"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 8C0 3.58222 3.58222 0 8 0C12.4178 0 16 3.58222 16 8C16 12.4178 12.4178 16 8 16C3.58222 16 0 12.4178 0 8ZM1.77778 8C1.77778 11.4311 4.56889 14.2222 8 14.2222C11.4311 14.2222 14.2222 11.4311 14.2222 8C14.2222 4.56889 11.4311 1.77778 8 1.77778C4.56889 1.77778 1.77778 4.56889 1.77778 8ZM8.00004 6.7467L10.0356 4.70226L11.2978 5.96448L9.25337 8.00004L11.2978 10.0356L10.0356 11.2978L8.00004 9.26226L5.96448 11.2978L4.70226 10.0356L6.7467 8.00004L4.70226 5.96448L5.96448 4.70226L8.00004 6.7467Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-1">
              <small className="text-core-text-10 text-xs">Today</small>
              <small className="text-core-text-10 text-xs">Appointment</small>
            </div>
          </div>
          <div>
            Please cancel or reschedule before on .&nbsp;
            <market-link className="market-link" hydrated="">
              <template shadowrootmode="open">
                <button>
                  <slot></slot>
                </button>
              </template>
              <span className="underline decoration-bbf-text-decoration-color">
                See full policy
              </span>
            </market-link>
            This appointment can’t be canceled or rescheduled after booking as
            the cancellation window has passed. See full policy
          </div>
        </div>
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
        <market-button
          data-testid="book-appointment-button-mobile"
          type="submit"
          rank="primary"
          className="md-lg:hidden w-full mb-8 market-button"
          size="medium"
          variant="regular"
          hydrated=""
        >
          <template shadowrootmode="open">
            <button className="inner-tag" type="submit">
              <slot name="icon"></slot>
              <span className="button-text" part="button-text">
                <slot></slot>
              </span>
            </button>
          </template>
          Book appointment
        </market-button>
      </div>
    </section>
  );
}
