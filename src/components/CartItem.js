import React from 'react'
import FormatPrice from '../helper/FormatPrice'
import CartAmountToggle from './CartAmountToggle'
import { FaTrash } from 'react-icons/fa'
import { useCartContext } from '../context/cartcontext'

const CartItem = ({id, name, image, color, price, amount}) => {

  const { removeProduct, setDecrease, setIncrease } = useCartContext();
  
//   const setDecrease = (id) =>{
//     //amount > 1 ? setAmount( amount - 1) : setAmount(1)
// }
// const setIncrease = (id) =>{
//     //amount < stock ? setAmount( amount + 1) : setAmount(stock)
// }

  return (
    <div className='cart-heading grid grid-five-column'>
      {/* image, name, color */}
      <div className='cart-image--name'>
        <div>
          <figure>
            <img src={image} alt={name} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className='color-div'>
            <p>Color: </p>
            <div className='color-style' 
            style={{backgroundColor:color}}>
            </div>
          </div>
        </div>
      </div>
      {/* price */}
      <div className='cart-hide'>
        <p><FormatPrice price={price} /></p>
      </div>
      {/* quantity/stock */}
      <CartAmountToggle amount={amount} setIncrease={()=>setIncrease(id)} setDecrease={()=>setDecrease(id)} />
      {/* sub total */}
      <div className='cart-hide'>
        <p><FormatPrice price={price * amount} /></p>
      </div>
      {/* remove item */}
      <div>
        <FaTrash className='remove_icon' onClick={()=>removeProduct(id)}/>
      </div>
    </div>
  )
}

export default CartItem