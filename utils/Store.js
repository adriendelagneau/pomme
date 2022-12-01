import { createContext, useReducer } from "react";
import Cookies from 'js-cookie'
export const Store = createContext()

const initialState = {
  cart: Cookies.get('cart')
  ? JSON.parse(Cookies.get('cart'))
  : { cartItems: [] },
}

function reducer(state, action) {
    switch (action.type) {

      case 'CART_ADD_ITEM': { 
        const newItem = action.payload;
        //console.log(newItem)
  
        const existItem = state.cart.cartItems.find(
          (item) =>  item.productId === action.payload.productId
        );
       
        const cartItems = existItem 
          ? 
            state.cart.cartItems.map((item) =>
              item.productId === action.payload.productId  
            ?  
              newItem 
            : 
              item
            )
          : [...state.cart.cartItems, newItem];

            Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
        return { ...state, cart: { ...state.cart, cartItems } };
       
      }
 
      case 'CART_REMOVE_ITEM': {
      
        const cartItems = state.cart.cartItems.filter((x,i) => 
        x.productId != action.payload.id
       )
       Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));
        return { ...state, cart: { ...state.cart, cartItems } };
      }

      case 'CART_CLEAR_ITEMS':{
        Cookies.set('cart', JSON.stringify({ ...state.cart,cartItems: []}));
        return { ...state, cart: { ...state.cart, cartItems: [] } };
      }
        



      case 'CART_INCREASE_ITEMS':{
       
        const newCart = state.cart.cartItems.find((x) => x.productId == action.payload.id && (x.quantity = (action.payload.qty +1)))
         
        Cookies.set('cart', JSON.stringify({ ...state.cart, newCart}));
         return { ...state, cart: { ...state.cart, newCart } };
      }


      case 'CART_DECREASE_ITEMS':{

const newCart = state.cart.cartItems.find((x) => x.productId == action.payload.id && (x.quantity = (action.payload.qty -1)))

        
        
        Cookies.set('cart', JSON.stringify({ ...state.cart, newCart}));
         return { ...state, cart: { ...state.cart, newCart } };
      }



      default:
        return state;
    }
  }

export function StoreProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value}>{children}</Store.Provider>;
}