import React from "react";
import "./Cart.scss";
import PaymentIcon from "@mui/icons-material/Payment";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector , useDispatch} from "react-redux";
import { removeItem, reset } from "../../redux/cartReducer";
import { Link } from "react-router-dom";
const Cart = () => {
  const products = useSelector(state=>state.cart.products);

  const total = () => {
    let temp = 0;

    for (let index = 0; index < products.length; index++) {
      temp += products[index].price * products[index].quantity; 
    }
    return temp
  } 

  const finalPrice = total()

  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <div className="cart-items left">
        <h1>Cart Items</h1>
        <div className="items">
          {products?.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.img} alt={item.title} className="item-image" />
              <div className="item-details">
                <h2>{item.title}</h2>
                <div className="item">
                  <div>
                    <div className="item-price">
                      Price: &#8377; {item.price}{" "}
                    </div>
                    <div className="item-total">
                      {item.quantity} x &#8377; {item.price}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      style={{
                        backgroundColor: "none",
                      }}
                    >
                      <DeleteOutlineIcon
                        sx={{ color: "red", transform: "scale(1.2)" }}
                        fontSize="large"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="right">
        <div className="header">
          <h1>
            Total: &#8377; <span>{total(finalPrice)}</span>
          </h1>
        </div>
        <button className="payment btn" >
          <Link to="/payment">
            <PaymentIcon fontSize="large" />
            <span className="btn">Proceed to Payment</span>
          </Link>
        </button>
        <button className="payment btn" onClick={() => dispatch(reset())}>
          <ClearIcon fontSize="large" />
          <span className="btn reset">Reset Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
