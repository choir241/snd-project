export function setCart(cartItems) {
  sessionStorage.setItem("cart", JSON.stringify(cartItems));
}
