function Button(props) {
  return (
    <>
      <button onClick={props.myfunction} className={props.myclass}>
        {props.btnValue}
      </button>
    </>
  );
}
function DarkButton(props) {
  return (
    <>
      <button
        style={{ backgroundColor: "black", color: "white" }}
        onClick={props.myfunction}
        className={props.myclass}
      >
        {props.btnValue}
      </button>
    </>
  );
}
export { Button, DarkButton };
