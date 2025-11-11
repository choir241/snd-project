import { labels } from "../../static/labels";

export default function CartHero({ cartItems }) {
  function calculateItemsTotal() {
    let sumPrice = 0;
    cartItems.forEach((item) => {
      const separateDollarSign = item.packageOption.price.split("$")[1];
      sumPrice += Number(separateDollarSign);
    });
    return sumPrice.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  function calculateTimeTotal() {
    let hrs = 0;
    let min = 0;
    cartItems.forEach((item) => {
      hrs += item.packageOption.timeTaken.hr;
      min += item.packageOption.timeTaken.min;
    });
    if (min >= 60) {
      while (min >= 60) {
        min -= 60;
        hrs += 1;
      }
    }
    if (min) {
      return `${hrs} hr ${min} min`;
    } else {
      return `${hrs} hr`;
    }
  }

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
