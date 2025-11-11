import PackageCartItem from "./PackageCartItem";

export default function PackageItemList({ cartItems }) {
  return (
    <div className="py-4 px-4 md-lg:max-h-[calc(100vh-280px)] overflow-y-auto">
      <div className="">
        {cartItems.map((cartItem, i) => {
          return (
            <PackageCartItem
              key={i}
              packageName={cartItem.packageName}
              optionName={cartItem.packageOption.name}
              optionPrice={cartItem.packageOption.price}
            />
          );
        })}
      </div>
    </div>
  );
}
