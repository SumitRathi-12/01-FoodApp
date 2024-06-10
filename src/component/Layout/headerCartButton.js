import { useContext } from "react";
import CartContext from "../../Store/Cart-Context";
import CartIcon from "../Cart/cartIcon";
import classes from "./headerCartButton.module.css";

const HeaderCartButton = (props) => {
  const CartCtx = useContext(CartContext);

  const NumberOfCartItems = CartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${classes.bump}`;

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{NumberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
