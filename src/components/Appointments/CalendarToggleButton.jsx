export default function CalendarToggleButton() {
  return (
    <div className="flex justify-center mb-2">
      <market-button
        aria-controls="month-view week-view"
        aria-expanded="false"
        aria-label="Expand to show month view"
        className="rounded-full bg-gray-100 w-8 h-8 flex items-center justify-center market-button"
        rank="secondary"
        size="medium"
        type="button"
        variant="regular"
        hydrated=""
      >
        <template shadowrootmode="open">
          <button
            className="inner-tag"
            type="button"
            aria-controls="month-view week-view"
            aria-expanded="false"
            aria-label="Expand to show month view"
          >
            <slot name="icon"></slot>
            <span className="button-text" part="button-text">
              <slot></slot>
            </span>
          </button>
        </template>
        <svg
          width="14"
          height="8"
          viewBox="0 0 14 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.70703 7.70711C7.31651 8.09763 6.68334 8.09763 6.29282 7.70711L0.292818 1.70711L1.70703 0.292892L6.99992 5.58579L12.2928 0.292893L13.707 1.70711L7.70703 7.70711Z"
            fill="black"
            fillOpacity="0.9"
          ></path>
        </svg>
      </market-button>
    </div>
  );
}
