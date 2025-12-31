import { labels } from "../../static/labels";

export default function CheckoutFormEmail() {
  return (
    <market-field
      name="email"
      className="col-span-2 mb-1 market-field"
      hydrated=""
    >
      <market-input-text
        name="email"
        autoComplete="email"
        label="Email"
        value=""
        className="col-span-2 mb-1 market-input-text"
        aria-describedby="358f72ae-e05f-42eb-9c5b-5521086d8f0a-error"
        type="text"
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
            type="email"
            id="email"
            placeholder=" "
            required
          />
          <label for="email">{labels.checkout.email}</label>
        </div>
      </market-input-text>
    </market-field>
  );
}
