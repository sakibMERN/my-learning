import PropTypes from "prop-types";
import './Cart.css'



export default function Cart({cart, handleRemoveFromCart}) {
    // console.log(cart);
  return (
    <div>
        <h4>Cart : {cart.length}</h4>
        <div className="cart">
            {
                cart.map(bottle => <div key={bottle.id}>
                  <img src={bottle.img}></img>
                  <button onClick={()=> handleRemoveFromCart(bottle.id)}>Remove</button>
                </div>)
            }
        </div>
    </div>
  )
}

Cart.PropTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart: PropTypes.func.isRequired,
}
