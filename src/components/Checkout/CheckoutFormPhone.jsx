import { labels } from "../../static/labels";

export default function CheckoutFormPhone() {
  return (
    <>
      <div className="col-span-2 relative">
        <market-field name="phone" className="market-field" hydrated="">
          <div className="flex justify-between items-center gap-2">
            <market-button
              icon-only=""
              size="small"
              rank="tertiary"
              aria-haspopup=""
              aria-expanded="false"
              aria-controls="country-calling-code-popover"
              aria-label="Select a country code"
              aria-activedescendant="United States"
              caret="down"
              className="market-button"
              type="button"
              variant="regular"
              hydrated=""
            >
              <market-accessory
                slot="icon"
                className="mr-1 market-accessory"
                hydrated=""
              >
                <span className="text-3xl">🇺🇸</span>
                <span
                  className="ml-3 text-black font-medium text-base pointer-events-none"
                  aria-label="Calling code"
                >
                  +1
                </span>
              </market-accessory>
            </market-button>
            <market-input-text
              type="tel"
              autoComplete="tel-national"
              value=""
              placeholder="(000) 000-0000"
              className="max-h-16 flex-1 market-input-text"
              aria-describedby="a3b3c9ee-9216-4e18-9829-ae172630d3e3-error"
              size="large"
              hydrated=""
            >
              <div className="field">
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
                  id="phoneNumber"
                  placeholder=" "
                  required
                />
                <label for="phoneNumber">Phone Number</label>
              </div>
            </market-input-text>
          </div>
        </market-field>
      </div>

      <div className="col-span-2  paragraph-10">
        <div className="textConsent mt-2 text-subtext leading-4 line-clamp-2 md-lg:line-clamp-none">
          {labels.checkout.textConsent}
        </div>
      </div>
    </>
  );
}
