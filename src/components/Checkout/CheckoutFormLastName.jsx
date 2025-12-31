export default function CheckoutFormLastName() {
  return (
    <market-field name="lastName" className="market-field" hydrated="">
      <market-input-text
        name="lastName"
        autoComplete="family-name"
        label="Last name"
        value=""
        aria-describedby="5cf76d34-dc9f-4cd3-8810-cac6b12bb673-error"
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
            id="lastName"
            placeholder=" "
            required
          />
          <label for="lastName">Last Name</label>
        </div>
      </market-input-text>
      <small slot="error"></small>
    </market-field>
  );
}
