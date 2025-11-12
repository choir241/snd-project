import { labels } from "../../static/labels";

export default function CartButtonsSection({ cartItems }) {
  if (cartItems.length) {
    return (
      <div className="market-button-group">
        <button className="nextButton button">
          {labels.bookings.nextButton}
        </button>
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
