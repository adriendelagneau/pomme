import { ShoppingBagIcon } from "@heroicons/react/outline";
import Link from "next/link";

import React, { useContext, useEffect, useState } from 'react'


function Basket() {

    const [cartItemsCount, setCartItemsCount] = useState(2);

    /*

    useEffect(() => {
        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
      }, [cart.cartItems]);
    
  if (cartItemsCount === 0) return null;
*/
  return (
    <Link href="/checkout">
      <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300">
        {cartItemsCount> 0 && (
          <span className="absolute -right-2 -top-2 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-sm text-white">
            {cartItemsCount}
          </span>
        )}
        <ShoppingBagIcon className="headerIcon h-8 w-8" />
      </div>
    </Link>
  );
}

export default Basket;