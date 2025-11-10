import PackageHeader from "./components/Package/PackageHeader";
import CollapsedPackage from "./components/CollapsedPackage/CollapsedPackage";
import { labels } from "./static/labels";

export default function Bookings() {
  return (
    <div>
      <div className="bg-white" id="root">
        <div className="mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
          <div className="flex flex-col flex-grow overflow-y-auto">
            <PackageHeader />

            <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
              {/* Package list */}
              <section
                aria-label="Main content"
                className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 flex flex-col w-full px-4 md-lg:max-w-main-content "
              >
                <div data-testid="services-page" className="flex-col">
                  <h2 className="sr-only">Services</h2>
                  <CollapsedPackage
                    packageRedirectLink={labels.bookings.premiumPackageLink}
                    packageName={labels.packages.premiumPackage.name}
                    packageFirstService={
                      labels.packages.premiumPackage.featureList[0]
                    }
                    packageSecondService={
                      labels.packages.premiumPackage.featureList[1]
                    }
                    packagePrice={labels.packages.premiumPackage.price}
                    packageTimeAlloted={
                      labels.packages.premiumPackage.timeAlloted
                    }
                  />

                  <CollapsedPackage
                    packageRedirectLink={labels.bookings.expressPackageLink}
                    packageName={labels.packages.expressPackage.name}
                    packageFirstService={
                      labels.packages.expressPackage.featureList[0]
                    }
                    packageSecondService={
                      labels.packages.expressPackage.featureList[1]
                    }
                    packagePrice={labels.packages.expressPackage.price}
                    packageTimeAlloted={
                      labels.packages.expressPackage.timeAlloted
                    }
                  />

                  <CollapsedPackage
                    packageRedirectLink={labels.bookings.interiorPackageLink}
                    packageName={labels.packages.interiorPackage.name}
                    packageFirstService={
                      labels.packages.interiorPackage.featureList[0]
                    }
                    packageSecondService={
                      labels.packages.interiorPackage.featureList[1]
                    }
                    packagePrice={labels.packages.interiorPackage.price}
                    packageTimeAlloted={
                      labels.packages.interiorPackage.timeAlloted
                    }
                  />

                  <CollapsedPackage
                    packageRedirectLink={labels.bookings.exteriorPackageLink}
                    packageName={labels.packages.exteriorPackage.name}
                    packageFirstService={
                      labels.packages.exteriorPackage.featureList[0]
                    }
                    packageSecondService={
                      labels.packages.exteriorPackage.featureList[1]
                    }
                    packagePrice={labels.packages.exteriorPackage.price}
                    packageTimeAlloted={
                      labels.packages.exteriorPackage.timeAlloted
                    }
                  />

                  <CollapsedPackage
                    packageRedirectLink={
                      labels.bookings.supremeNomadsSpecialLink
                    }
                    packageName={labels.packages.supremeNomadsSpecial.name}
                    packageFirstService={
                      labels.packages.supremeNomadsSpecial.featureList[0]
                    }
                    packageSecondService={
                      labels.packages.supremeNomadsSpecial.featureList[1]
                    }
                    packagePrice={labels.packages.supremeNomadsSpecial.price}
                    packageTimeAlloted={
                      labels.packages.supremeNomadsSpecial.timeAlloted
                    }
                  />

                  <CollapsedPackage
                    packageRedirectLink={labels.bookings.ceramicCoatingLink}
                    packageName={labels.packages.ceramicCoating.name}
                    packageFirstService={
                      labels.packages.ceramicCoating.featureList[0]
                    }
                    packageSecondService={
                      labels.packages.ceramicCoating.featureList[1]
                    }
                    packagePrice={labels.packages.ceramicCoating.price}
                    packageTimeAlloted={
                      labels.packages.ceramicCoating.timeAlloted
                    }
                  />
                </div>
              </section>

              {/* Service Cart */}
              <aside className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 hidden md-lg:block md-lg:px-4 max-w-cart-sidebar min-w-cart-sidebar ">
                <div className="sticky top-2">
                  <div data-testid="desktop-cart" className="flex flex-col">
                    <h2 className="mb-4 heading-20">Appointment summary</h2>
                    <div className="desktop-cart mb-4 border border-solid border-black/[.05] rounded-md">
                      <div className="p-4">No services added yet</div>
                    </div>
                  </div>
                  <market-button-group
                    alignment="stack"
                    className="market-button-group"
                    hydrated=""
                    style={{ style: "" }}
                  >
                    <template shadowrootmode="open">
                      <div className="content">
                        <slot></slot>
                      </div>
                    </template>
                    <market-button
                      rank="primary"
                      disabled=""
                      className="bg-core-emphasis-color market-button"
                      size="medium"
                      type="button"
                      variant="regular"
                      hydrated=""
                    >
                      <template shadowrootmode="open">
                        <button
                          className="inner-tag"
                          type="button"
                          disabled=""
                          tabIndex="-1"
                        >
                          <slot name="icon"></slot>
                          <span className="button-text" part="button-text">
                            <slot></slot>
                          </span>
                        </button>
                      </template>
                      Next
                    </market-button>
                  </market-button-group>
                </div>
              </aside>
              <aside
                id="mobile-cart"
                data-testid="mobile-cart"
                className="mobile-cart md-lg:hidden z-below-market-context-manager absolute inset-x-0 bottom-0 bg-white shadow-[0_-4px_30px_-10px_rgba(0,0,0,0.3)] rounded-t-3xl max-h-full flex flex-col"
              ></aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
