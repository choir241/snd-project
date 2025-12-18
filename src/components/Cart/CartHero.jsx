import { labels } from "../../static/labels";
import { calculateItemsTotal } from "../../hooks/calculateItemsTotal";

export default function CartHero({ cartItems }) {
  return (
    <div className="flex-grow flex-col overflow-wrap-anywhere">
      <div className="line-clamp-3 font-semibold">
        {cartItems.length} {labels.cart.services}
      </div>
      <div className="text-sm text-core-text-20">
        ${calculateItemsTotal({ cartItems })} ・{" "}
        {cartItems[0].packageTimeAlloted}
      </div>
    </div>
  );
}
