const cartReducer = (state, action) => {
switch (action.type) {
  case "ADD_TO_CART":
    let { id, color, amount, product } = action.payload;
    //matching existing item
    let existingProduct = state.cart.find((curItem) => {
      return curItem.id === id + color;
    });
    if (existingProduct) {
      
        let updatedItem = state.cart.map((curItem) => {
          if (curItem.id === id + color) {
            let newQuantity = curItem.amount + amount;
            if (newQuantity >= curItem.maxStock) {
              newQuantity = curItem.maxStock;
            }
            return {
              ...curItem,
              amount: newQuantity,
            };
          } else {
            return {
              curItem,
            };
          }
        });
        return {
          ...state,
          cart: updatedItem,
        };
      
    } else { //if there is no existing item in cart
      let cartProduct = {
        id: id + color,
        name: product.name,
        color: color,
        amount: amount,
        image: product.image[0].url,
        price: product.price,
        maxStock: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    };

  case "REMOVE_PRODUCT":
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
    
  case "CLEAR_CART":
    return {
      ...state,
      cart: [],
    };

  case "SET_DECREMENT":
    let updatedDecQuantity = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decQuantity = curItem.amount - 1;
        if (decQuantity <= 1) {
          decQuantity = 1;
        }
        return {
          ...curItem,
          amount: decQuantity,
        };
      } else {
        return curItem;
      }
    });
    return {
      ...state,
      cart: updatedDecQuantity,
    };

case "SET_INCREMENT":
    let updatedIncQuantity = state.cart.map((curItem)=>{
        if (curItem.id === action.payload) {
            let incQuantity = curItem.amount + 1;
            if (incQuantity >= curItem.maxStock) {
                incQuantity = curItem.maxStock;
            }
            return{
                ...curItem,
                amount: incQuantity
            }
        } else {
            return curItem
        }
    });
    return{
        ...state,
        cart:updatedIncQuantity
    };

// case "CART_TOTAL_ITEM":
//     let updatedTotalItem = state.cart.reduce((initialValue, curEle)=>{
//                 let { amount } = curEle;
//                 initialValue = initialValue + amount;
//                 return initialValue;
//             },0)
//             return{
//                 ...state,
//                 total_item:updatedTotalItem
//             };

// case "CART_TOTAL_PRICE":
//     let totalPrice = state.cart.reduce((initialValue, curEle)=>{
//                 let { amount, price } = curEle;
//                 initialValue = initialValue + price * amount;
//                 return initialValue;
//             },0)
//             return{
//                 ...state,
//                 total_price:totalPrice
//             };

case "CART_TOTAL_ITEM_PRICE":
    let { total_item, total_price } = state.cart.reduce((initialValue, curEle)=>{
        let { amount, price } = curEle;
        initialValue.total_item  += amount;
        initialValue.total_price += price * amount;
        return initialValue;
        },{
            total_item:0,
            total_price:0
        });
        return{
            ...state,
            total_item,
            total_price
        };

  default:
    return state;
}
// if (action.type==="ADD_TO_CART") {
//     let { id, color, amount, product } = action.payload;

//     //matching existing item
//     let existingProduct = state.cart.find((curItem)=>{
//         return curItem.id === id + color
//     })
//     if (existingProduct) {
//         let increaseQuantity = window.confirm(`This product is already in cart\nDo you want to add quantity?\nMaximum stock:${existingProduct.maxStock}`)
//         if (increaseQuantity) {
//             let updatedItem = state.cart.map((curItem)=>{
//                 if (curItem.id === id + color) {
//                     let newQuantity = curItem.amount + amount;
//                     if (newQuantity >= curItem.maxStock) {
//                         newQuantity = curItem.maxStock;
//                     }
//                     return {
//                         ...curItem,
//                         amount: newQuantity
//                     }
//                 } else {
//                     return {
//                         curItem
//                     }
//                 }
//             })
//             return {
//                 ...state,
//                 cart:updatedItem
//             }
//         }
//     }

//     else {
//         let cartProduct = {
//             id : id + color,
//             name: product.name,
//             color:color,
//             amount:amount,
//             image:product.image[0].url,
//             price:product.price,
//             maxStock:product.stock
//         } 
       
//         return{
//             ...state,
//             cart:[...state.cart, cartProduct]
//         }
//     }
// }

// if (action.type==="REMOVE_PRODUCT") {
//     let updatedCart = state.cart.filter((curItem)=>curItem.id !== action.payload)
//     return{
//         ...state,
//         cart:updatedCart
//     }
// }

// if (action.type==="CLEAR_CART") {
//     return{
//         ...state,
//         cart:[]
//     }
// }

//toggle amount(quantity) 
// if (action.type === "SET_DECREMENT") {
//     let updatedProduct = state.cart.map((curItem)=>{
//         if (curItem.id === action.payload) {
//             let decQuantity = curItem.amount - 1;
//             if (decQuantity <= 1) {
//                 decQuantity = 1;
//             }
//             return{
//                 ...curItem,
//                 amount: decQuantity
//             }
//         } else {
//             return curItem
//         }
//     });
//     return{
//         ...state,
//         cart:updatedProduct
//     }
// }

// if (action.type === "SET_INCREMENT") {
//     let updatedProduct = state.cart.map((curItem)=>{
//         if (curItem.id === action.payload) {
//             let incQuantity = curItem.amount + 1;
//             if (incQuantity >= curItem.maxStock) {
//                 incQuantity = curItem.maxStock;
//             }
//             return{
//                 ...curItem,
//                 amount: incQuantity
//             }
//         } else {
//             return curItem
//         }
//     });
//     return{
//         ...state,
//         cart:updatedProduct
//     }
// }

// cart total items
// if (action.type === "CART_TOTAL_ITEM") {
//     let updatedTotalItem = state.cart.reduce((initialValue, curEle)=>{
//         let { amount } = curEle;
//         initialValue = initialValue + amount;
//         return initialValue;
//     },0)
//     return{
//         ...state,
//         total_item:updatedTotalItem
//     }
// };
// cart total price
// if (action.type === "CART_TOTAL_PRICE") {
//     let totalPrice = state.cart.reduce((initialValue, curEle)=>{
//         let { amount, price } = curEle;
//         initialValue = initialValue + price * amount;
//         return initialValue;
//     },0)
//     return{
//         ...state,
//         total_price:totalPrice
//     }
// };

// if (action.type === "CART_TOTAL_ITEM_PRICE") {
//     let { total_item, total_price } = state.cart.reduce((initialValue, curEle)=>{
//     let { amount, price } = curEle;
//     initialValue.total_item  += amount;
//     initialValue.total_price += price * amount;
//     return initialValue;
//     },{
//         total_item:0,
//         total_price:0
//     });
//     return{
//         ...state,
//         total_item,
//         total_price
//     }
// }

//   return state;
}

export default cartReducer