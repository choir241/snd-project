import OptionRadios from "./OptionRadios";

export default function PackageList({
  packageName,
  packageOptionList,
  packageOption,
  setPackageOption,
}) {
  return (
    <ul
      aria-multiselectable="false"
      className="market-list"
      aria-labelledby="service-variations-header"
    >
      {packageOptionList.map((option, i) => {
        return (
          <OptionRadios
            packageName={packageName}
            timeTaken={option.timeTaken}
            setPackageOption={setPackageOption}
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
