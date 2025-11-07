import Package from "./components/Package";
import "./Booking.css";
import { labels } from "./static/labels";

export default function Bookings() {
  return (
    <>
      {/* <Package
        name={labels.packages.touchUpPackage.name}
        featureList={labels.packages.touchUpPackage.featureList}
        price={labels.packages.touchUpPackage.price}
        timeAlloted={labels.packages.touchUpPackage.timeAlloted}
        options={labels.packages.touchUpPackage.options}
      /> */}

        <div className="mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
          <div className="flex flex-col flex-grow overflow-y-auto">
            <header className="flex items-center py-2 pl-4 pr-2 mb-2 justify-between">
              <a
                className="!text-black"
                href="/appointments/bvvj6fvmjuosjt/location/LP3QWMTHKC1DJ"
              >
                <img
                  className="rounded-xl object-contain h-12"
                  aria-hidden="true"
                  src="https://seller-brand-assets-f.squarecdn.com/ML22SA78W688X/03849d2363963a8e996df8f711f242d0.png?height=250"
                />
                <h1 className="sr-only">Supreme Nomads Detailing</h1>
              </a>
              <button
                className="p-0 bg-transparent border-none cursor-pointer"
                aria-label="Menu"
              >
                <svg
                  data-testid="menu-hamburger"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  role="presentation"
                  className="!text-black h-auto w-auto p-2"
                  aria-hidden="true"
                  style={{ style: "color: var(--color-ultra-dark)" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </header>
            <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
              <div className="w-full">
                <div className="flex justify-center h-full">
                  <section
                    aria-label="Main content"
                    className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 flex flex-col w-full px-4 md-lg:max-w-main-content flex-grow justify-between sm:justify-normal"
                  >
                    <nav
                      aria-label="Breadcrumb"
                      className="font-semibold mb-5 text-sm"
                    >
                      <ol className="flex list-none m-0 p-0">
                        <li className="after:content-['/'] after:mx-2 after:text-core-text-20">
                          <a
                            className="min-w-fit text-nowrap !text-core-text-20"
                            href="/appointments/bvvj6fvmjuosjt/location/LP3QWMTHKC1DJ/services/P24I7TCH2NXL7WFU5SLM3QAJ/appointments/bvvj6fvmjuosjt/location/LP3QWMTHKC1DJ/services"
                          >
                            <span>All services</span>
                          </a>
                        </li>
                        <li>
                          <a
                            aria-current="page"
                            className="!text-black"
                            href="/appointments/bvvj6fvmjuosjt/location/LP3QWMTHKC1DJ/services/P24I7TCH2NXL7WFU5SLM3QAJ"
                          >
                            <span className="line-clamp-1">
                              Premium Package
                            </span>
                          </a>
                        </li>
                      </ol>
                    </nav>
                    <div className="h-full sm:h-auto">
                      <h2 className="mb-2 overflow-wrap-anywhere">
                        Premium Package
                      </h2>
                      <div>
                        <div
                          className="paragraph-20 mb-2 flex flex-col"
                          data-testid="variation-details-summary"
                        >
                          <span>Price varies ・ 3 hr 30 min</span>
                        </div>
                        <div
                          className="paragraph-20 text-core-text-20 whitespace-pre-wrap"
                          data-testid="service-description"
                        >
                          <ul>
                            <li>6 Month Ceramic Wax</li>
                            <li>Iron Removal Treatment</li>
                            <li>Clay Treatment</li>
                            <li>Wheel Surfaces, Barrel, &amp; Tire Clean</li>
                            <li>Tire Dressing</li>
                            <li>Foam Bath and Hand Wash</li>
                            <li>Shampoo and Conditioner</li>
                            <li>Headliner Spot Cleaning</li>
                            <li>Seats &amp; Carpets Sanitized</li>
                            <li>
                              UV Protect &amp; Sanitize Dash/Vents/Trims/Panels
                            </li>
                            <li>Deep Interior &amp; Trunk Vacuum</li>
                            <li>Windows and Door Jams Cleaned</li>
                            <li>Rain-X®&nbsp;Window Treatment</li>
                          </ul>
                          <p>
                            <br />
                          </p>
                        </div>
                        <div className="mt-8 mb-4">
                          <market-header
                            id="service-variations-header"
                            className="market-header"
                            close-button-aria-label="Close"
                            hydrated=""
                          >
                            <template shadowrootmode="open">
                              <div className="grid">
                                <div className="navigation">
                                  <nav>
                                    <slot name="navigation">
                                      <market-button
                                        slot="navigation"
                                        aria-label="Close"
                                        className="market-button"
                                        icon-only=""
                                        rank="secondary"
                                        size="medium"
                                        type="button"
                                        variant="regular"
                                        hydrated=""
                                      >
                                        <template shadowrootmode="open">
                                          <button
                                            className="inner-tag"
                                            type="button"
                                            aria-label="Close"
                                          >
                                            <slot name="icon"></slot>
                                            <span
                                              className="button-text"
                                              part="button-text"
                                            >
                                              <slot></slot>
                                            </span>
                                          </button>
                                        </template>
                                        <market-icon
                                          slot="icon"
                                          className="market-icon"
                                          tintable=""
                                          name="x"
                                          hydrated=""
                                          style={{style: "--icon-width: 24px; --icon-height: 24px"}}
                                        >
                                          <template shadowrootmode="open">
                                            <slot></slot>
                                          </template>
                                          <svg
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            data-name="x"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            height="24"
                                          >
                                            <path
                                              d="M19.7069 5.70691L13.4139 11.9999L19.7069 18.2928L18.2928 19.7069L11.9999 13.4139L5.70691 19.7069L4.29285 18.2928L10.5858 11.9999L4.29285 5.70691L5.70691 4.29285L11.9999 10.5858L18.2928 4.29285L19.7069 5.70691Z"
                                              fill="currentColor"
                                            ></path>
                                          </svg>
                                        </market-icon>
                                      </market-button>
                                    </slot>
                                  </nav>
                                </div>
                                <div className="compact">
                                  <slot name="compact"></slot>
                                </div>
                                <div className="actions">
                                  <menu>
                                    <slot name="actions"></slot>
                                  </menu>
                                </div>
                              </div>
                              <div className="heading" part="heading">
                                <slot name="wayfinding"></slot>
                                <slot></slot>
                                <slot name="subheading"></slot>
                              </div>
                            </template>
                            <h3 className="mb-1">Options</h3>
                            <h3 className="mb-1" slot="compact">
                              Options
                            </h3>
                          </market-header>
                          <span
                            className="text-error-text paragraph-20"
                            role="alert"
                          ></span>
                          <market-list
                            interactive=""
                            value="7HQU5TXOGKNWVRNGAEBNJVKP"
                            name="service-variations-header"
                            role="listbox"
                            aria-multiselectable="false"
                            className="market-list"
                            aria-labelledby="service-variations-header"
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
                              value="7HQU5TXOGKNWVRNGAEBNJVKP"
                              role="option"
                              aria-selected="true"
                              className="market-row has-slotted-control"
                              size="medium"
                              interactive=""
                              drag-handle-position="trailing"
                              hydrated=""
                              selected=""
                            >
                              <template
                                shadowrootmode="open"
                                shadowrootdelegatesfocus=""
                              >
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
                              <label slot="label">Sedan/Coupé</label>
                              <div slot="subtext">
                                <span>$300.00・3 hr 30 min</span>
                              </div>
                              <market-radio
                                slot="control"
                                className="market-radio"
                                hydrated=""
                                aria-label="Sedan/Coupé"
                                selected=""
                              >
                                <template shadowrootmode="open">
                                  <input
                                    type="radio"
                                    aria-label="Sedan/Coupé"
                                  />
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
                              value="LD4TNMW4BVZZPBTXJXWUYUBA"
                              role="option"
                              aria-selected="false"
                              className="market-row preload has-slotted-control"
                              size="medium"
                              interactive=""
                              drag-handle-position="trailing"
                              hydrated=""
                            >
                              <template
                                shadowrootmode="open"
                                shadowrootdelegatesfocus=""
                              >
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
                              <label slot="label">2 Row SUV/Small Truck</label>
                              <div slot="subtext">
                                <span>$350.00・3 hr 30 min</span>
                              </div>
                              <market-radio
                                slot="control"
                                className="market-radio"
                                hydrated=""
                                aria-label="2 Row SUV/Small Truck"
                              >
                                <template shadowrootmode="open">
                                  <input
                                    type="radio"
                                    aria-label="2 Row SUV/Small Truck"
                                  />
                                </template>
                              </market-radio>
                            </market-row>
                            <market-row
                              value="GJ4LXNWDBWYU43NIFVLOX6HZ"
                              role="option"
                              aria-selected="false"
                              className="market-row preload has-slotted-control hide-bottom-border"
                              size="medium"
                              interactive=""
                              drag-handle-position="trailing"
                              hydrated=""
                            >
                              <template
                                shadowrootmode="open"
                                shadowrootdelegatesfocus=""
                              >
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
                              <label slot="label">3 Row SUV/Large Truck</label>
                              <div slot="subtext">
                                <span>$400.00・3 hr 30 min</span>
                              </div>
                              <market-radio
                                slot="control"
                                className="market-radio"
                                hydrated=""
                                aria-label="3 Row SUV/Large Truck"
                              >
                                <template shadowrootmode="open">
                                  <input
                                    type="radio"
                                    aria-label="3 Row SUV/Large Truck"
                                  />
                                </template>
                              </market-radio>
                            </market-row>
                          </market-list>
                        </div>
                      </div>
                    </div>
                    <market-footer
                      role="contentinfo"
                      className="w-full pb-4 block sm:hidden sticky market-footer"
                      style={{style: "margin-bottom: 0px"}}
                      hydrated=""
                    >
                      <template shadowrootmode="open">
                        <slot></slot>
                      </template>
                      <div className="w-full flex flex-col items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          className="w-4 h-4"
                        >
                          <path
                            d="M33.315 2.07833e-07H6.685C5.80719 -0.000218697 4.93794 0.172489 4.12689 0.50826C3.31584 0.844031 2.57888 1.33629 1.95809 1.95692C1.33731 2.57755 0.844869 3.31439 0.508896 4.12536C0.172923 4.93632 -2.72948e-08 5.80553 0 6.68334V33.3133C-5.50792e-08 35.0865 0.704258 36.787 1.95789 38.0409C3.21152 39.2949 4.91187 39.9996 6.685 40H33.315C35.0881 39.9996 36.7885 39.2949 38.0421 38.0409C39.2957 36.787 40 35.0865 40 33.3133V6.68334C40 5.80553 39.8271 4.93632 39.4911 4.12536C39.1551 3.31439 38.6627 2.57755 38.0419 1.95692C37.4211 1.33629 36.6842 0.844031 35.8731 0.50826C35.0621 0.172489 34.1928 -0.000218697 33.315 2.07833e-07ZM32.7267 30.6183C32.7267 31.1777 32.5046 31.7141 32.1093 32.1097C31.7139 32.5054 31.1777 32.7279 30.6183 32.7283H9.385C9.10799 32.7283 8.83369 32.6737 8.57779 32.5677C8.32189 32.4616 8.08939 32.3062 7.8936 32.1102C7.6978 31.9143 7.54253 31.6817 7.43668 31.4257C7.33082 31.1697 7.27645 30.8953 7.27667 30.6183V9.38334C7.27645 9.10633 7.33082 8.83199 7.43668 8.576C7.54253 8.32001 7.6978 8.0874 7.8936 7.89145C8.08939 7.6955 8.32189 7.54004 8.57779 7.43398C8.83369 7.32792 9.10799 7.27334 9.385 7.27334H30.6183C31.1777 7.27378 31.7139 7.49627 32.1093 7.89193C32.5046 8.28758 32.7267 8.82402 32.7267 9.38334V30.6183Z"
                            fill="black"
                            fillOpacity="0.9"
                          ></path>
                          <path
                            d="M15.75 25.4267C15.5907 25.4267 15.4329 25.3952 15.2858 25.3341C15.1387 25.273 15.0051 25.1834 14.8926 25.0705C14.7802 24.9576 14.6912 24.8236 14.6307 24.6763C14.5702 24.5289 14.5393 24.371 14.54 24.2117V15.735C14.5391 15.5755 14.5698 15.4175 14.6302 15.2699C14.6906 15.1223 14.7796 14.9882 14.892 14.8751C15.0045 14.762 15.1382 14.6723 15.2854 14.6111C15.4326 14.5498 15.5905 14.5183 15.75 14.5183H24.25C24.4094 14.5186 24.5672 14.5502 24.7143 14.6115C24.8615 14.6728 24.9951 14.7626 25.1075 14.8756C25.2199 14.9886 25.3089 15.1227 25.3694 15.2702C25.4299 15.4176 25.4607 15.5756 25.46 15.735V24.2117C25.4604 24.3709 25.4295 24.5287 25.3689 24.676C25.3083 24.8233 25.2193 24.9572 25.1069 25.07C24.9945 25.1829 24.861 25.2724 24.7139 25.3336C24.5669 25.3948 24.4093 25.4265 24.25 25.4267H15.75Z"
                            fill="black"
                            fillOpacity="0.9"
                          ></path>
                        </svg>
                        <div className="mt-2 leading-4 text-[12px] text-core-text-20">
                          Powered by Square
                        </div>
                        <market-link
                          className="leading-4 market-link"
                          hydrated=""
                        >
                          <template shadowrootmode="open">
                            <button>
                              <slot></slot>
                            </button>
                          </template>
                          <span className="text-core-text-20 text-[12px] font-normal underline">
                            Cookie Preferences
                          </span>
                        </market-link>
                      </div>
                    </market-footer>
                    <market-footer
                      className="sticky bottom-0 bg-white -mx-4 md-lg:m-0 p-4 md-lg:p-0 md-lg:py-4 w-screen md-lg:w-full border-0 border-t-[0.5px] md-lg:border-t-0 border-solid border-gray-200 market-footer"
                      hydrated=""
                    >
                      <template shadowrootmode="open">
                        <slot></slot>
                      </template>
                      <market-button-group
                        alignment="fill"
                        className="market-button-group"
                        hydrated=""
                      >
                        <template shadowrootmode="open">
                          <div className="content">
                            <slot></slot>
                          </div>
                        </template>
                        <market-button
                          rank="primary"
                          className="market-button"
                          size="medium"
                          type="button"
                          variant="regular"
                          hydrated=""
                        >
                          <template shadowrootmode="open">
                            <button className="inner-tag" type="button">
                              <slot name="icon"></slot>
                              <span className="button-text" part="button-text">
                                <slot></slot>
                              </span>
                            </button>
                          </template>
                          Update
                        </market-button>
                        <market-button
                          rank="secondary"
                          className="market-button"
                          size="medium"
                          type="button"
                          variant="regular"
                          hydrated=""
                        >
                          <template shadowrootmode="open">
                            <button className="inner-tag" type="button">
                              <slot name="icon"></slot>
                              <span className="button-text" part="button-text">
                                <slot></slot>
                              </span>
                            </button>
                          </template>
                          Remove
                        </market-button>
                      </market-button-group>
                    </market-footer>
                  </section>
                </div>
                <market-footer
                  role="contentinfo"
                  className="w-full pb-4 hidden sm:block market-footer"
                  style={{style: "margin-bottom: 0px"}}
                  hydrated=""
                >
                  <template shadowrootmode="open">
                    <slot></slot>
                  </template>
                  <div className="w-full flex flex-col items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      className="w-4 h-4"
                    >
                      <path
                        d="M33.315 2.07833e-07H6.685C5.80719 -0.000218697 4.93794 0.172489 4.12689 0.50826C3.31584 0.844031 2.57888 1.33629 1.95809 1.95692C1.33731 2.57755 0.844869 3.31439 0.508896 4.12536C0.172923 4.93632 -2.72948e-08 5.80553 0 6.68334V33.3133C-5.50792e-08 35.0865 0.704258 36.787 1.95789 38.0409C3.21152 39.2949 4.91187 39.9996 6.685 40H33.315C35.0881 39.9996 36.7885 39.2949 38.0421 38.0409C39.2957 36.787 40 35.0865 40 33.3133V6.68334C40 5.80553 39.8271 4.93632 39.4911 4.12536C39.1551 3.31439 38.6627 2.57755 38.0419 1.95692C37.4211 1.33629 36.6842 0.844031 35.8731 0.50826C35.0621 0.172489 34.1928 -0.000218697 33.315 2.07833e-07ZM32.7267 30.6183C32.7267 31.1777 32.5046 31.7141 32.1093 32.1097C31.7139 32.5054 31.1777 32.7279 30.6183 32.7283H9.385C9.10799 32.7283 8.83369 32.6737 8.57779 32.5677C8.32189 32.4616 8.08939 32.3062 7.8936 32.1102C7.6978 31.9143 7.54253 31.6817 7.43668 31.4257C7.33082 31.1697 7.27645 30.8953 7.27667 30.6183V9.38334C7.27645 9.10633 7.33082 8.83199 7.43668 8.576C7.54253 8.32001 7.6978 8.0874 7.8936 7.89145C8.08939 7.6955 8.32189 7.54004 8.57779 7.43398C8.83369 7.32792 9.10799 7.27334 9.385 7.27334H30.6183C31.1777 7.27378 31.7139 7.49627 32.1093 7.89193C32.5046 8.28758 32.7267 8.82402 32.7267 9.38334V30.6183Z"
                        fill="black"
                        fillOpacity="0.9"
                      ></path>
                      <path
                        d="M15.75 25.4267C15.5907 25.4267 15.4329 25.3952 15.2858 25.3341C15.1387 25.273 15.0051 25.1834 14.8926 25.0705C14.7802 24.9576 14.6912 24.8236 14.6307 24.6763C14.5702 24.5289 14.5393 24.371 14.54 24.2117V15.735C14.5391 15.5755 14.5698 15.4175 14.6302 15.2699C14.6906 15.1223 14.7796 14.9882 14.892 14.8751C15.0045 14.762 15.1382 14.6723 15.2854 14.6111C15.4326 14.5498 15.5905 14.5183 15.75 14.5183H24.25C24.4094 14.5186 24.5672 14.5502 24.7143 14.6115C24.8615 14.6728 24.9951 14.7626 25.1075 14.8756C25.2199 14.9886 25.3089 15.1227 25.3694 15.2702C25.4299 15.4176 25.4607 15.5756 25.46 15.735V24.2117C25.4604 24.3709 25.4295 24.5287 25.3689 24.676C25.3083 24.8233 25.2193 24.9572 25.1069 25.07C24.9945 25.1829 24.861 25.2724 24.7139 25.3336C24.5669 25.3948 24.4093 25.4265 24.25 25.4267H15.75Z"
                        fill="black"
                        fillOpacity="0.9"
                      ></path>
                    </svg>
                    <div className="mt-2 leading-4 text-[12px] text-core-text-20">
                      Powered by Square
                    </div>
                    <market-link className="leading-4 market-link" hydrated="">
                      <template shadowrootmode="open">
                        <button>
                          <slot></slot>
                        </button>
                      </template>
                      <span className="text-core-text-20 text-[12px] font-normal underline">
                        Cookie Preferences
                      </span>
                    </market-link>
                  </div>
                </market-footer>
              </div>
            </div>
            <market-footer
              role="contentinfo"
              className="w-full pb-4 market-footer hidden"
              style={{style: "margin-bottom: 0px"}}
              hydrated=""
            >
              <template shadowrootmode="open">
                <slot></slot>
              </template>
              <div className="w-full flex flex-col items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="w-4 h-4"
                >
                  <path
                    d="M33.315 2.07833e-07H6.685C5.80719 -0.000218697 4.93794 0.172489 4.12689 0.50826C3.31584 0.844031 2.57888 1.33629 1.95809 1.95692C1.33731 2.57755 0.844869 3.31439 0.508896 4.12536C0.172923 4.93632 -2.72948e-08 5.80553 0 6.68334V33.3133C-5.50792e-08 35.0865 0.704258 36.787 1.95789 38.0409C3.21152 39.2949 4.91187 39.9996 6.685 40H33.315C35.0881 39.9996 36.7885 39.2949 38.0421 38.0409C39.2957 36.787 40 35.0865 40 33.3133V6.68334C40 5.80553 39.8271 4.93632 39.4911 4.12536C39.1551 3.31439 38.6627 2.57755 38.0419 1.95692C37.4211 1.33629 36.6842 0.844031 35.8731 0.50826C35.0621 0.172489 34.1928 -0.000218697 33.315 2.07833e-07ZM32.7267 30.6183C32.7267 31.1777 32.5046 31.7141 32.1093 32.1097C31.7139 32.5054 31.1777 32.7279 30.6183 32.7283H9.385C9.10799 32.7283 8.83369 32.6737 8.57779 32.5677C8.32189 32.4616 8.08939 32.3062 7.8936 32.1102C7.6978 31.9143 7.54253 31.6817 7.43668 31.4257C7.33082 31.1697 7.27645 30.8953 7.27667 30.6183V9.38334C7.27645 9.10633 7.33082 8.83199 7.43668 8.576C7.54253 8.32001 7.6978 8.0874 7.8936 7.89145C8.08939 7.6955 8.32189 7.54004 8.57779 7.43398C8.83369 7.32792 9.10799 7.27334 9.385 7.27334H30.6183C31.1777 7.27378 31.7139 7.49627 32.1093 7.89193C32.5046 8.28758 32.7267 8.82402 32.7267 9.38334V30.6183Z"
                    fill="black"
                    fillOpacity="0.9"
                  ></path>
                  <path
                    d="M15.75 25.4267C15.5907 25.4267 15.4329 25.3952 15.2858 25.3341C15.1387 25.273 15.0051 25.1834 14.8926 25.0705C14.7802 24.9576 14.6912 24.8236 14.6307 24.6763C14.5702 24.5289 14.5393 24.371 14.54 24.2117V15.735C14.5391 15.5755 14.5698 15.4175 14.6302 15.2699C14.6906 15.1223 14.7796 14.9882 14.892 14.8751C15.0045 14.762 15.1382 14.6723 15.2854 14.6111C15.4326 14.5498 15.5905 14.5183 15.75 14.5183H24.25C24.4094 14.5186 24.5672 14.5502 24.7143 14.6115C24.8615 14.6728 24.9951 14.7626 25.1075 14.8756C25.2199 14.9886 25.3089 15.1227 25.3694 15.2702C25.4299 15.4176 25.4607 15.5756 25.46 15.735V24.2117C25.4604 24.3709 25.4295 24.5287 25.3689 24.676C25.3083 24.8233 25.2193 24.9572 25.1069 25.07C24.9945 25.1829 24.861 25.2724 24.7139 25.3336C24.5669 25.3948 24.4093 25.4265 24.25 25.4267H15.75Z"
                    fill="black"
                    fillOpacity="0.9"
                  ></path>
                </svg>
                <div className="mt-2 leading-4 text-[12px] text-core-text-20">
                  Powered by Square
                </div>
                <market-link className="leading-4 market-link" hydrated="">
                  <template shadowrootmode="open">
                    <button>
                      <slot></slot>
                    </button>
                  </template>
                  <span className="text-core-text-20 text-[12px] font-normal underline">
                    Cookie Preferences
                  </span>
                </market-link>
              </div>
            </market-footer>
          </div>
        </div>
        <market-context-manager className="market-context-manager" hydrated="">
          <template shadowrootmode="open">
            <slot></slot>
          </template>
        </market-context-manager>
    </>
  );
}
