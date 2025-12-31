import { labels } from "../../static/labels";

export default function CheckoutHero() {
  return (
    <div className="flex mb-4 justify-between">
      <h3>{labels.checkout.contactInfo}</h3>
      <div>
        <div>
          <span className="underline decoration-bbf-text-decoration-color">
            {labels.checkout.signIn}
          </span>
        </div>
      </div>
    </div>
  );
}
