import "./Button.css";
export const Button = (btnName) => {
  return (
    <>
      <button
        className="click-btn"
        btnName={btnName}
        onClick={() => console.log()}
      >
        Click me
      </button>

      <button className="dropdown-link">Link 1</button>
      <button className="dropdown-link">Link 2</button>
      <button className="dropdown-link">Link 3</button>
    </>
  );
};
