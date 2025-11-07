export default function Package({
  name,
  featureList,
  price,
  timeAlloted,
  options = [],
}) {
  return (
    <section className="packageContainer">
      <div className="hero">
      <h2>{name}</h2>
      <span>
        {price} {timeAlloted}
      </span>
      </div>

      <ul>
        {featureList.map((feature) => {
          return <li key = {feature}>{feature}</li>;
        })}
      </ul>

      {options.length ? (
        <section>
          <h2>Options</h2>
          {options.map((option) => {
            return (
              <section key = {option.name}>
                <label>
                  <h3>{option.name}</h3>
                  <span>
                    {option.price} {option.timeAlloted}
                  </span>
                </label>
                <input type="radio" />
              </section>
            );
          })}
        </section>
      ) : (
        ""
      )}

      <button>Add</button>
    </section>
  );
}
