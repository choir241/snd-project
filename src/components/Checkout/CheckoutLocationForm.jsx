import CheckoutUserDataInput from "./CheckoutUserDataInput";
import { labels } from "../../static/labels";

export default function CheckoutLocationForm({
  setStreetAddress,
  setAptSuite,
  setCity,
  setState,
  setZip,
}) {
  return (
    <div className="grid grid-cols-2 gap-2 separator">
      <CheckoutUserDataInput
        label={labels.checkout.address}
        htmlForId={"streetAddress"}
        type={"text"}
        onChange={setStreetAddress}
        className={"col-span-2"}
      />

      <CheckoutUserDataInput
        label={labels.checkout.aptSuite}
        htmlForId={"aptSuite"}
        type={"text"}
        onChange={setAptSuite}
        className={"col-span-2"}
      />

      <CheckoutUserDataInput
        label={labels.checkout.city}
        htmlForId={"city"}
        type={"text"}
        onChange={setCity}
        className={"col-span-2"}
      />

      <CheckoutUserDataInput
        label={labels.checkout.state}
        htmlForId={"state"}
        type={"text"}
        onChange={setState}
      />

      <CheckoutUserDataInput
        label={labels.checkout.zip}
        htmlForId={"zip"}
        type={"text"}
        onChange={setZip}
      />
    </div>
  );
}
