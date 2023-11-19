import { useState } from "react";
import "./Button.css";
import App from "../App";
export const Button = (btnName) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <button
        className="click-btn"
        btnName={btnName}
        onClick={() => setActive((e) => !e)}
      >
        Click me
      </button>
      {active && <DropdownLinks />}
    </>
  );
};
export const DropdownLinks = () => {
  const [Offactive, setOffActive] = useState(false);
  return (
    <>
      <div className="dropdown-links-wrapper">
        <button
          className="dropdown-link"
          onClick={() => setOffActive((e) => !e)}
        >
          Link 1
        </button>
        <button className="dropdown-link">Link 2</button>
        <button className="dropdown-link">Link 3</button>
      </div>
    </>
  );
};
