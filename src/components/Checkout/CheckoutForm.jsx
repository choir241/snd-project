import CheckoutFormPhone from "./CheckoutFormPhone";
import CheckoutFormFirstName from "./CheckoutFormFirstName";
import CheckoutFormLastName from "./CheckoutFormLastName";
import CheckoutFormEmail from "./CheckoutFormEmail";

export default function CheckoutForm() {
  return (
    <section
      id="checkoutForm"
      className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 flex flex-col w-full px-4 md-lg:max-w-main-content "
    >
      <div className="flex-col items-center">
        <div className="flex flex-col">
          <div className="flex mb-4 justify-between">
            <h3>Contact info</h3>
            <div>
              <div>
                <span className="underline decoration-bbf-text-decoration-color">
                  Sign in
                </span>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-2 gap-2"
            data-testid="customer-information-form"
          >
            <CheckoutFormPhone />

            <CheckoutFormFirstName />

            <CheckoutFormLastName />

            <CheckoutFormEmail />
          </div>

          <span>
            <label for="make">Year</label>
            <input
              onChange={(e) => {
                e.preventDefault();
                const value = e.target.value;
                if (Number(value)) {
                  console.log(value);
                } else {
                  throw new Error("test");
                }
              }}
              type="text"
              id="year"
              placeholder=" "
              required
            />

            <market-field
              name="0b5c7a1b-cda4-43a7-bad9-87db3a8ba860"
              className="market-field"
              hydrated=""
            >
              <market-input-text
                name="0b5c7a1b-cda4-43a7-bad9-87db3a8ba860"
                placeholder="Enter a response"
                type="number"
                size="medium"
                value=""
                aria-describedby="f1a46be4-1f79-47c0-8115-0e69b210f479-error"
                className="market-input-text"
                hydrated=""
              >
                <template shadowrootmode="open">
                  <div className="label-input-container">
                    <slot name="input">
                      <input
                        part="native-input"
                        name="0b5c7a1b-cda4-43a7-bad9-87db3a8ba860"
                        type="number"
                        placeholder="Enter a response"
                        autoComplete="on"
                        aria-label="0b5c7a1b-cda4-43a7-bad9-87db3a8ba860"
                        aria-describedby="f1a46be4-1f79-47c0-8115-0e69b210f479-error"
                      />
                    </slot>
                  </div>
                  <slot name="trailing-accessory"></slot>
                </template>
                <label></label>
              </market-input-text>
              <small slot="error"></small>
            </market-field>
          </span>

          <span>
            <label for="make">Make</label>
            <input
              onChange={(e) => {
                e.preventDefault();
                const value = e.target.value;
                if (Number(value)) {
                  console.log(value);
                } else {
                  throw new Error("test");
                }
              }}
              type="text"
              id="make"
              placeholder=" "
              required
            />
          </span>

          <span>
            <label for="make">Model</label>
            <input
              onChange={(e) => {
                e.preventDefault();
                const value = e.target.value;
                if (Number(value)) {
                  console.log(value);
                } else {
                  throw new Error("test");
                }
              }}
              type="text"
              id="model"
              placeholder=" "
              required
            />
          </span>
        </div>
        <market-divider
          margin="large"
          size="thin"
          className="col-span-2 market-divider "
          hydrated=""
        >
          <template shadowrootmode="open"></template>
        </market-divider>
        <div className="mt-4">
          <h3 className="mb-2">Where will this appointment take place?</h3>
          <market-list
            interactive=""
            value="premises"
            role="listbox"
            aria-multiselectable="false"
            className="market-list"
            reorderable="off"
            hydrated=""
          >
            <template shadowrootmode="open">
              <slot name="search"></slot>
              <slot name="control-row"></slot>
              <slot></slot>
              <slot name="empty-state">
                <market-empty-state
                  className="hidden market-empty-state"
                  hydrated=""
                >
                  <template shadowrootmode="open">
                    <slot></slot>
                    <slot name="media"></slot>
                    <div className="text">
                      <slot name="primary-text"></slot>
                      <slot name="secondary-text"></slot>
                    </div>
                  </template>
                  <svg
                    height="40"
                    slot="media"
                    viewBox="0 0 40 40"
                    width="40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.4667 17.2L28.1 10.8333H26.6667C26.6667 9.45 25.55 8.33333 24.1667 8.33333C22.7834 8.33333 21.6667 9.45 21.6667 10.8333H18.3334C18.3334 9.45 17.2167 8.33333 15.8334 8.33333C14.45 8.33333 13.3334 9.45 13.3334 10.8333H11.9L5.53337 17.2C4.11671 18.6167 3.33337 20.5 3.33337 22.5C3.33337 26.6333 6.70004 30 10.8334 30C14.8 30 18.0167 26.9 18.2834 23.0167C18.8167 23.2167 19.4 23.3333 20 23.3333C20.6 23.3333 21.1834 23.2167 21.7167 23.0167C21.9834 26.9 25.2 30 29.1667 30C33.3 30 36.6667 26.6333 36.6667 22.5C36.6667 20.5 35.8834 18.6167 34.4667 17.2ZM10.8334 26.6667C8.53337 26.6667 6.66671 24.8 6.66671 22.5C6.66671 21.3833 7.10004 20.3333 7.88337 19.55C8.66671 18.7667 9.71671 18.3333 10.8334 18.3333C13.1334 18.3333 15 20.2 15 22.5C15 24.8 13.1334 26.6667 10.8334 26.6667ZM15.35 16.55C14.4667 15.8833 13.4334 15.3833 12.3 15.15L13.2667 14.1667H17.2334C16.3834 14.7333 15.7167 15.5667 15.35 16.55ZM20 20C19.0834 20 18.3334 19.25 18.3334 18.3333C18.3334 17.4167 19.0834 16.6667 20 16.6667C20.9167 16.6667 21.6667 17.4167 21.6667 18.3333C21.6667 19.25 20.9167 20 20 20ZM22.75 14.1667H26.7167L27.7 15.15C26.5667 15.3833 25.5334 15.8833 24.65 16.55C24.2834 15.5667 23.6167 14.7333 22.75 14.1667ZM29.1667 26.6667C26.8667 26.6667 25 24.8 25 22.5C25 20.2 26.8667 18.3333 29.1667 18.3333C30.2834 18.3333 31.3334 18.7667 32.1167 19.55C32.9 20.3333 33.3334 21.3833 33.3334 22.5C33.3334 24.8 31.4667 26.6667 29.1667 26.6667Z"
                      fill="var(--core-text-10-color)"
                      fillOpacity="0.9"
                    ></path>
                  </svg>
                  <h3 slot="primary-text">
                    <slot name="empty-state-primary-text">
                      No search results for “”
                    </slot>
                  </h3>
                  <p slot="secondary-text">
                    <slot name="empty-state-secondary-text">
                      Try a different search.
                    </slot>
                  </p>
                </market-empty-state>
              </slot>
            </template>
            <market-row
              value="premises"
              role="option"
              aria-selected="true"
              className="market-row has-slotted-control"
              size="medium"
              interactive=""
              drag-handle-position="trailing"
              hydrated=""
              selected=""
            >
              <template shadowrootmode="open" shadowrootdelegatesfocus="">
                <div part="container" className="container">
                  <slot name="leading-accessory"></slot>
                  <div className="main" part="main">
                    <slot name="label"></slot>
                    <slot name="subtext"></slot>
                    <slot></slot>
                  </div>
                  <div part="side" className="side hidden">
                    <slot name="side-label"></slot>
                    <slot name="side-subtext"></slot>
                  </div>
                  <slot name="trailing-accessory"></slot>
                  <slot name="control"></slot>
                </div>
              </template>
              <label slot="label">Supreme Nomads Detailing</label>
              <p className="" slot="subtext"></p>
              <market-radio
                slot="control"
                className="market-radio"
                hydrated=""
                aria-label="Supreme Nomads Detailing"
                selected=""
              >
                <template shadowrootmode="open">
                  <input type="radio" aria-label="Supreme Nomads Detailing" />
                  <svg
                    width="6"
                    height="6"
                    viewBox="0 0 6 6"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="3" cy="3" r="3"></circle>
                  </svg>
                </template>
              </market-radio>
            </market-row>
            <market-row
              value="customer"
              role="option"
              aria-selected="false"
              className="market-row preload has-slotted-control hide-bottom-border"
              size="medium"
              interactive=""
              drag-handle-position="trailing"
              hydrated=""
            >
              <template shadowrootmode="open" shadowrootdelegatesfocus="">
                <div part="container" className="container">
                  <slot name="leading-accessory"></slot>
                  <div className="main" part="main">
                    <slot name="label"></slot>
                    <slot name="subtext"></slot>
                    <slot></slot>
                  </div>
                  <div part="side" className="side hidden">
                    <slot name="side-label"></slot>
                    <slot name="side-subtext"></slot>
                  </div>
                  <slot name="trailing-accessory"></slot>
                  <slot name="control"></slot>
                </div>
              </template>
              <label slot="label">My location</label>
              <p slot="subtext">Enter an address and we’ll come to you.</p>
              <market-radio
                slot="control"
                className="market-radio"
                hydrated=""
                aria-label="My location"
              >
                <template shadowrootmode="open">
                  <input type="radio" />
                </template>
              </market-radio>
            </market-row>
          </market-list>
        </div>
        <market-divider
          margin="large"
          size="thin"
          className="col-span-2 market-divider"
          hydrated=""
        >
          <template shadowrootmode="open"></template>
        </market-divider>
        <div className="col-span-2 flex flex-col">
          <div className="flex items-center">
            <h3 className="flex-1">Appointment note</h3>
            <market-link className="market-link" hydrated="">
              <template shadowrootmode="open">
                <button>
                  <slot></slot>
                </button>
              </template>
              <span className="underline decoration-bbf-text-decoration-color">
                Add
              </span>
            </market-link>
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
