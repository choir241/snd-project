import { labels } from "../../static/labels";

export default function CartButtonsSection() {
  const cartItems = sessionStorage.getItem("cart")
    ? JSON.parse(sessionStorage.getItem("cart"))
    : [];
  if (cartItems.length) {
    return (
      <div className="market-button-group">
        <a href={labels.links.appointmentsLink}>
          <button className="nextButton button">
            {labels.bookings.nextButton}
          </button>
        </a>
      </div>
    );
  } else {
    return (
      <div className="market-button-group">
        <button className="nextButton nextButtonDisabled">
          {labels.bookings.nextButton}
        </button>
      </div>
    );
  }
}
