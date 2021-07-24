function Button(props) {
  return (
    <>
      <button onClick={props.myfunction} className={props.myclass}>
        {props.btnValue}
      </button>
    </>
  );
}
export default Button;
