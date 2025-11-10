import OptionRadios from "./OptionRadios";

export default function PackageList({ packageOptionList }) {
  return (
    <ul
      aria-multiselectable="false"
      className="market-list"
      aria-labelledby="service-variations-header"
    >
      {packageOptionList.map((option, i) => {
        return (
          <OptionRadios
            className="border-seperator"
            key={i}
            optionName={option.name}
            optionPrice={option.price}
            optionTimeAlloted={option.timeAlloted}
          />
        );
      })}
    </ul>
  );
}
