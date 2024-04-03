function ColorPicker() {
  return (
    <>
      <h3>Color picker</h3>
      <input
        type="color"
        className="form-control form-control-color"
        id="exampleColorInput"
        value="#563d7c"
        title="Choose your color"
      ></input>
    </>
  );
}

export default ColorPicker;
