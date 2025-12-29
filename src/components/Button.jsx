export default function Button({ label, className, onClick }) {
  return (
    <button
      className={`${className}  cursor-pointer`}
      onClick={() => onClick()}
    >
      {label}
    </button>
  );
}
