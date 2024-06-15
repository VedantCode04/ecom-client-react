import React from "react";
import "./ProductCard.scss";
import { Link , useParams} from "react-router-dom";

const ProductCard = ({ item }) => {
  const upload = import.meta.env.VITE_API_UPLOAD_URL;

  const id = useParams().id;
  return (
    <div className="card">
      <Link to={`/product/${item.id}`}>
        <div className="image">
          <img
            src={upload + item.attributes.img.data.attributes.url}
            alt=""
            className="mainImg"
          />
          <img
            src={upload + item.attributes.img2.data.attributes.url}
            alt=""
            className="secImg"
          />
        </div>
        <h2 className="title">{item.attributes.title}</h2>
        <div className="prices">
          <h3 className="old">&#8377;{item.attributes.oldPrice}</h3>
          <h3 className="new">&#8377;{item.attributes.price}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
