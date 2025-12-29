import { useNavigate } from "react-router";
import { labels } from "../../static/labels";
import { removePackage } from "../../hooks/removePackage";
import { updateModifier } from "./AddModifier";
import Button from "../Button";

export default function AddButtons({ packageName, addOnOption }) {
  const navigate = useNavigate();

  return (
    <div className="package-button-container">
      <Button
        className="button remove-button"
        onClick={() => removePackage({ packageName, navigate })}
        label={labels.services.removeButton}
      />

      <Button
        className="button"
        onClick={() =>
          updateModifier({ packageName, addOnItems: addOnOption, navigate })
        }
        label={labels.services.updateButton}
      />
    </div>
  );
}
