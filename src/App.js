import Header from "./component/Layout/header";
import { useState } from "react";
import Meals from "./component/meals/Meals";
import Cart from "./component/Cart/cart";
import CartProvider from "./Store/CartProvider";

//const [cartIsShown, setCartIsShown] = useState(false);

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
