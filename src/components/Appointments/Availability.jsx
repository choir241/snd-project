export default function Availabilty() {
  return (
    <div
      className="flex flex-1 flex-col"
      data-testid="availability-segments"
      id="availability-segments"
    >
      <div className="mb-4">
        <div className="mb-4">No availability until Friday, November 14.</div>
        <div className="w-full">
          <market-button
            rank="primary"
            size="small"
            className="w-full market-button"
            type="button"
            variant="regular"
            hydrated=""
          >
            <template shadowrootmode="open">
              <button className="inner-tag" type="button">
                <slot name="icon"></slot>
                <span className="button-text" part="button-text">
                  <slot></slot>
                </span>
              </button>
            </template>
            Go to next available
          </market-button>
        </div>
      </div>
      <div className="mb-4"></div>
    </div>
  );
}
