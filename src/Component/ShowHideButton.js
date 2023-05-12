import Button from "react-bootstrap/Button";

export default function ShowHideButton(props) {
  return (
    <>
      <Button className="btn btn-warning" onClick={props.handleShowHide}>
        {props.showHide === false ? "Hide ☑️" : "Show ☑️"}
      </Button>
    </>
  );
}
