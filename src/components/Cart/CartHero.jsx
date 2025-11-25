import { labels } from "../../static/labels";
import { calculateItemsTotal } from "../../hooks/calculateItemsTotal";
import {calculateTimeTotal} from "../../hooks/calculateTimeTotal";

export default function CartHero({ cartItems }) {

  if (cartItems.length === 1) {
    return (
      <div className="flex-grow flex-col overflow-wrap-anywhere">
        <div className="line-clamp-3 font-semibold">
          {cartItems[0].packageName}
        </div>
        <div className="text-sm text-core-text-20">
          {cartItems[0].packagePrice} ・ {cartItems[0].packageTimeAlloted}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-grow flex-col overflow-wrap-anywhere">
        <div className="line-clamp-3 font-semibold">
          {cartItems.length} {labels.cart.services}
        </div>
        <div className="text-sm text-core-text-20">
          ${calculateItemsTotal()} ・ {calculateTimeTotal()}
        </div>
      </div>
    );
  }
}
