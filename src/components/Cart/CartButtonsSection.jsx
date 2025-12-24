import { labels } from "../../static/labels";

export default function CartButtonsSection({ cartItems }) {
  if (cartItems.length) {
    return (
      <div className="market-button-group">
        <a href={labels.bookings.appointmentsLink}>
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
