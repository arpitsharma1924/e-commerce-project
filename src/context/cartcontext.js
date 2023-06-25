import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../reducer/cartReducer'

const CartContext = createContext();

const getLocalData = () =>{
    let localCartData = localStorage.getItem("myCart");
    // if (localCartData === []) {
    //     return [];
    // } else {
    //     return JSON.parse(localCartData);
    // }
    const parseData = JSON.parse(localCartData);
    if (!Array.isArray(parseData)) {
        return [];
    }
    return parseData;
}

const initialState = {
    // cart:[],
    cart: getLocalData(),
    total_item:"",
    total_price:"",
    shipping_fee:50000
}
const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)
    const addToCart = (id, color, amount, product) =>{
        dispatch({type:"ADD_TO_CART", payload:{ id, color, amount, product } });
    }

//amount(quantity) toggle in cart for individual item
    const setDecrease = (id) =>{
        dispatch({type:"SET_DECREMENT", payload: id });
    }
    const setIncrease = (id) =>{
        dispatch({type:"SET_INCREMENT", payload: id });
    }

//remove individual item in cart
    const removeProduct = (id) =>{
        dispatch({type:"REMOVE_PRODUCT", payload:id});
    }
//remove all items in cart
    const clearCart = () =>{
        dispatch({type:"CLEAR_CART"});
    }

    //adding data to local storage
    useEffect(()=>{
        // //to get total of all items
        // dispatch({type:"CART_TOTAL_ITEM"});
        // //to get total price
        // dispatch({type:"CART_TOTAL_PRICE"});
        //to get total of all items and total price
        dispatch({type:"CART_TOTAL_ITEM_PRICE"});

        //to store cart data in local storage
        localStorage.setItem("myCart", JSON.stringify(state.cart))
    },[state.cart])
    return <CartContext.Provider value={{ ...state, addToCart, removeProduct, clearCart, setDecrease, setIncrease }}>{children}</CartContext.Provider>;
}

const useCartContext = () =>{
    return useContext(CartContext)
}
export { CartProvider, useCartContext };