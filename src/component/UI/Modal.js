import classes from "./Modal.module.css";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const Overlays = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDom.createPortal(
        <Overlays> {props.children}</Overlays>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;

/*{ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <Overlays> {props.children} </Overlays>,
        portalElement
      )}*/
