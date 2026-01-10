import { labels } from "../../../static/labels";
import AuthLink from "../../OAuth/AuthLink";

export default function CheckoutHero({ isCurrUser }) {
  return (
    <div className="flex mb-4 justify-between">
      <h3>{labels.checkout.contactInfo}</h3>
      <div>
        <div>
          <span className="underline decoration-bbf-text-decoration-color">
            {isCurrUser ? (
              <a href={`${import.meta.env.VITE_BACKEND_API_URL}/signOut`}>
                Sign out
              </a>
            ) : (
              <AuthLink />
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
