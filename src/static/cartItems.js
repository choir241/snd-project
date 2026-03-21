export function setCart(cartItems) {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}
