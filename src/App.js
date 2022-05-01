import {  useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const[cartIsShown, setCartIsShown]=useState(false);
   
  const showCartHendler =()=>{
    setCartIsShown(true);
  };

  const hideCartHndler=()=>{
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHndler}/>}
      <Header onShowCart={showCartHendler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
    
  );
}

export default App;
