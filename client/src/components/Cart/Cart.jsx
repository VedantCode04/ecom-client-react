import React from 'react'
import "./Cart.scss"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Cart = () => {
    const data = [
      {
        id: 1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto-compress&cs=tinys rgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Sports wear",
        isNew: true,
        oldPrice: 19,
        price: 12,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, architecto.",
      },
      {
        id: 2,
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinys rgb&w=1600",
        title: "Coat",
        isNew: true,
        oldPrice: 19,
        price: 12,
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, architecto.",
      },
    ];
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          <DeleteOutlineIcon sx={{color: "red"}} className="delete" />
        </div>
      ))}

      <div className="total">
        <span>Subtotal: </span>
        <span>1000</span>
      </div>

      <button>Checkout</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
}

export default Cart