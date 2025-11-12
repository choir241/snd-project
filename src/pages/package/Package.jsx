import { labels } from "../../static/labels";
import PackageHeader from "../../components/Package/PackageHeader";
import PackageNav from "../../components/Package/PackageNav";
import PackageList from "../../components/Package/PackageList";
import "./Package.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Package({
  packageName,
  packagePrice,
  packageTimeAlloted,
  packageFeatureList,
  packageOptionList,
}) {
  const navigate = useNavigate();

  const [packageOption, setPackageOption] = useState(null);

  function updatePackage() {
    if (packageOption) {
      const cart = JSON.parse(sessionStorage.getItem("cart"));
      const updatedCartPackageOption = cart.map((item) => {
        if (item.packageName === packageName) {
          item.packageOption = packageOption;
          return item;
        } else {
          return item;
        }
      });
      sessionStorage.setItem("cart", JSON.stringify(updatedCartPackageOption));
    }

    return navigate("/");
  }

  function addPackage() {
    if (!packageOption) {
      document.querySelector("#noOptionSelected").innerHTML =
        "&#x26A0; Please select an option.";
      throw new Error("Please select an option.");
    }

    if (sessionStorage.getItem("cart")) {
      const cart = JSON.parse(sessionStorage.getItem("cart"));
      cart.push({
        packageName: packageName,
        packagePrice: packagePrice,
        packageTimeAlloted: packageTimeAlloted,
        packageOption: packageOption,
      });
      sessionStorage.setItem("cart", JSON.stringify(cart));
    } else {
      sessionStorage.setItem(
        "cart",

        JSON.stringify([
          {
            packageName: packageName,
            packagePrice: packagePrice,
            packageTimeAlloted: packageTimeAlloted,
            packageOption: packageOption,
          },
        ]),
      );
    }

    return navigate("/");
  }

  function removePackage() {
    const cart = JSON.parse(sessionStorage.getItem("cart"));
    const updatedCartRemovePackage = cart.filter((item) => {
      if (item.packageName !== packageName) {
        return item;
      }
    });
    sessionStorage.setItem("cart", JSON.stringify(updatedCartRemovePackage));

    return navigate("/");
  }

  function checkForDups() {
    const cartArray = JSON.parse(sessionStorage.getItem("cart"));
    let isDup = false;

    if (cartArray) {
      cartArray.forEach((cart) => {
        if (cart.packageName === packageName) {
          isDup = true;
          return;
        }
      });
      return isDup;
    }
  }

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
                      <h3 className="mb-1" slot="compact">
                        {labels.services.options}
                      </h3>

                      <span id="noOptionSelected"></span>

                      <PackageList
                        packageOption={packageOption}
                        packageName={packageName}
                        setPackageOption={setPackageOption}
                        packageOptionList={packageOptionList}
                      />

                      {checkForDups() ? (
                        <div className="package-button-container">
                          <button
                            className="button remove-button"
                            onClick={() => removePackage()}
                          >
                            {labels.services.removeButton}
                          </button>
                          <button
                            className="button"
                            onClick={() => updatePackage()}
                          >
                            {labels.services.updateButton}
                          </button>
                        </div>
                      ) : (
                        <button className="button" onClick={() => addPackage()}>
                          {labels.services.addButton}
                        </button>
                      )}
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
