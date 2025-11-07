import { labels } from "../static/labels";
import OptionRadios from "./OptionRadios";

export default function PackageList() {
  return (
    <ul
      aria-multiselectable="false"
      className="market-list"
      aria-labelledby="service-variations-header"
    >
      {labels.packages.premiumPackage.options.map((option, i) => {
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
