export default function CheckoutCarForm({ carLabel, carFor, setCar }) {
  return (
    <span>
      <label for={carFor}>{carLabel}</label>
      <input
        onChange={(e) => {
          e.preventDefault();
          const value = e.target.value;
          if (Number(value)) {
            console.log(value);
          } else {
            throw new Error("test");
          }
        }}
        type="text"
        id={carFor}
        placeholder=" "
        required
      />
    </span>
  );
}
