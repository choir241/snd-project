import { addPackage } from "../../hooks/addPackage";
import { removePackage } from "../../hooks/removePackage";
import { updatePackage } from "../../hooks/updatePackage";
import { checkForDupPackages } from "../../hooks/checkForDupPackages";
import { labels } from "../../static/labels";
import { useNavigate } from "react-router";

export default function PackageButtons({
  packageName,
  packageVersion,
  packageOption,
  packagePrice,
  packageTimeAlloted,
}) {
  const navigate = useNavigate();

  return checkForDupPackages({ packageName }) ? (
    <div className="package-button-container">
      <button
        className="button remove-button"
        onClick={() => removePackage({ packageName, navigate })}
      >
        {labels.services.removeButton}
      </button>
      <button
        className="button"
        onClick={() => updatePackage({ packageOption, packageName, navigate })}
      >
        {labels.services.updateButton}
      </button>
    </div>
  ) : (
    <button
      className="button"
      onClick={() =>
        addPackage({
          packageName,
          packageVersion,
          packagePrice,
          packageTimeAlloted,
          packageOption,
          navigate,
        })
      }
    >
      {labels.services.addButton}
    </button>
  );
}
