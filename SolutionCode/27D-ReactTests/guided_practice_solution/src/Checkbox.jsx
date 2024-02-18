import { useState } from "react";

/**
 * A checkbox component that displays different labels when checked and unchecked.
 */
function Checkbox({ labelOn, labelOff }) {
  const [isChecked, setIsChecked] = useState(false);
  const toggleChecked = () => setIsChecked(!isChecked);
  return (
    <label className="checkbox">
      {isChecked ? labelOn : labelOff}
      <input type="checkbox" checked={isChecked} onChange={toggleChecked} />
    </label>
  );
}

export default Checkbox;
