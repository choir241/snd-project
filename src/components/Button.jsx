export default function Button({ label, className, onClick }) {
  return (
    <button
      className={`${className}  cursor-pointer`}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }}
    >
      {label}
    </button>
  );
}
