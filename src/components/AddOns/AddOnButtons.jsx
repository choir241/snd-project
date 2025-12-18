import { useNavigate } from "react-router";
import { labels } from "../../static/labels";
import { removePackage } from "../../hooks/removePackage";
import { updateModifier } from "./AddModifier";

export default function AddButtons({ packageName, addOnOption }) {
  const navigate = useNavigate();

  return (
    <div className="package-button-container">
      <button
        className="button remove-button"
        onClick={() => removePackage({ packageName, navigate })}
      >
        {labels.services.removeButton}
      </button>
      <button
        className="button"
        onClick={() =>
          updateModifier({ packageName, addOn: addOnOption, navigate })
        }
      >
        {labels.services.updateButton}
      </button>
    </div>
  );
}
