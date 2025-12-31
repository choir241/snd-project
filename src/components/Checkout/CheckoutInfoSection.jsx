import { labels } from "../../static/labels";
import CheckoutFormPhone from "./CheckoutFormPhone";
import CheckoutUserDataInput from "./CheckoutUserDataInput";

export default function CheckoutInfoSection({
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
}) {
  return (
    <div
      className="grid grid-cols-2 gap-2"
      data-testid="customer-information-form"
    >
      <CheckoutFormPhone onChange={setPhone} />

      <CheckoutUserDataInput
        label={labels.checkout.firstName}
        htmlForId={"firstName"}
        type={"text"}
        onChange={setFirstName}
      />

      <CheckoutUserDataInput
        label={labels.checkout.lastName}
        htmlForId={"lastName"}
        type={"text"}
        onChange={setLastName}
      />

      <CheckoutUserDataInput
        label={labels.checkout.email}
        htmlForId={"email"}
        type={"email"}
        onChange={setEmail}
        className={"col-span-2"}
      />
    </div>
  );
}
