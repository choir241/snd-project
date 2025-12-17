import PackageHeader from "../../components/Package/PackageHeader";
import Footer from "../../components/Footer";
import { useContext, useState } from "react";
import { ModifierSession } from "../../middleware/packageContext";
import AddOnOption from "../../components/AddOns/AddOnOption";

export default function AddOns() {
  const URL = window.location.href.split("/")[3];
  const { modifiers } = useContext(ModifierSession);
  const [addOnOption, setAddOnOption] = useState([]);

  console.log(addOnOption);
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
                <div className="h-full sm:h-auto">
                  <h2 className="mb-2 overflow-wrap-anywhere"></h2>

                  <div className="mt-8 mb-4">
                    <ul
                      aria-multiselectable="false"
                      className="market-list"
                      aria-labelledby="service-variations-header"
                    >
                      {modifiers.map((addOn) => {
                        return (
                          <AddOnOption
                            key={addOn.id}
                            optionName={addOn.name}
                            optionPrice={addOn.priceAmt}
                            addOnOption={addOnOption}
                            setAddOnOption={setAddOnOption}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
