import { labels } from "../../static/labels";
import PackageHeader from "./PackageHeader";
import PackageNav from "./PackageNav";
import PackageList from "./PackageList";

export default function Package({
  packageName,
  packagePrice,
  packageTimeAlloted,
  packageFeatureList,
  packageOptionList,
}) {
  return (
    <div className="packageContainer mb-0 flex w-screen max-h-screen-svh min-h-screen-svh h-full overflow-hidden relative">
      <div className="flex flex-col flex-grow overflow-y-auto">
        <PackageHeader />

        <div className="flex justify-center flex-grow w-full max-w-lg mx-auto">
          <div className="w-full">
            <div className="flex justify-center h-full">
              <section
                aria-label="Main content"
                className="transition-opacity delay-150 duration-500 ease-in-out opacity-100 flex flex-col w-full px-4 md-lg:max-w-main-content flex-grow justify-between sm:justify-normal"
              >
                <PackageNav packageNavName={packageName} />

                <div className="h-full sm:h-auto">
                  <h2 className="mb-2 overflow-wrap-anywhere">{packageName}</h2>
                  <div>
                    <div
                      className="paragraph-20 mb-2 flex flex-col"
                      data-testid="variation-details-summary"
                    >
                      <span>
                        {packagePrice} ・ {packageTimeAlloted}
                      </span>
                    </div>
                    <div
                      className="paragraph-20 text-core-text-20 whitespace-pre-wrap"
                      data-testid="service-description"
                    >
                      <ul>
                        {packageFeatureList.map((feature) => {
                          return <li key={feature}>{feature}</li>;
                        })}
                      </ul>
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
                                      style={{
                                        style:
                                          "--icon-width: 24px; --icon-height: 24px",
                                      }}
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
                                      ></svg>
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
                        <h3 className="mb-1" slot="compact">
                          {labels.services.options}
                        </h3>
                      </market-header>

                      <PackageList packageOptionList={packageOptionList} />

                      <button className="button">
                        {labels.services.addButton}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
