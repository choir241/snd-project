import { useNavigate } from "react-router";
import { labels } from "../../static/labels";
import { removePackage } from "../../hooks/removePackage";

export default function AddButtons({packageName}){
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
        onClick={() => ""}
      >
        {labels.services.updateButton}
      </button>
    </div>
  )
}