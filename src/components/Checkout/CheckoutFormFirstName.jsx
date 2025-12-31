import { labels } from "../../static/labels";

export default function CheckoutFormFirstName() {
  return (
    <market-field name="firstName" className="market-field" hydrated="">
      <market-input-text
        name="firstName"
        autoComplete="given-name"
        label="First name"
        value=""
        aria-describedby="edc62443-717d-4412-9889-ad90220bc39e-error"
        className="market-input-text"
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
            type="text"
            id="firstName"
            placeholder=" "
            required
          />
          <label for="firstName">{labels.checkout.firstName}</label>
        </div>
      </market-input-text>
    </market-field>
  );
}
