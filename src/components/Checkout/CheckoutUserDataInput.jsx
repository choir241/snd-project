export default function CheckoutUserDataInput({
  label,
  htmlForId,
  type,
  onChange,
  className,
}) {
  function onInputChange(inputValue) {
    if (inputValue !== null) {
      onChange(inputValue);
    } else {
      throw new Error(`There was an error on inputting the ${label}`);
    }
  }

  return (
    <div className={`field ${className}`}>
      <input
        className={className}
        onChange={(e) => onInputChange(e.target.value)}
        type={type}
        id={htmlForId}
        placeholder=" "
        required
      />
      <label htmlFor={htmlForId}>{label}</label>
    </div>
  );
}
