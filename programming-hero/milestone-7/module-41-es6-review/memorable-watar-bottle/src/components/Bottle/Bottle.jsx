import PropTypes from "prop-types";
import "./Bottle.css"

export default function Bottle({bottle, handleAddToCart}) {
    const {name, img, price} = bottle; 
    // console.log(bottle.bottle.category);
  return (
    <div className="bottle">
        <h2>Bottle Name: {name}</h2>
        <img src={img} alt="" />
        <p>Price: {price}</p>
        <button onClick={()=> handleAddToCart(bottle)}>Purchase</button>
    </div>
  )
}

Bottle.propTypes = {
  bottle: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
}
