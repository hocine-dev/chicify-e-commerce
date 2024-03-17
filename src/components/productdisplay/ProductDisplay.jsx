import React, { useContext } from "react";
import "./ProductDisplay.css";
import startIcon from "../assets/star_icon.png";
import startDullIcon from "../assets/star_dull_icon.png";
import { shopContext } from "../../context/Shopcontext";

const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} = useContext(shopContext)
  return (
    <div className="ProductDisplay">
      <div className="left">
        <div className="imgs">
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
          <img src={product.image} alt={product.name} />
        </div>
        <div className="main-img">
          <img className="main-img" src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="right">
        <h1>{product.name}</h1>
        <div className="right-start">
          <img src={startIcon} alt="start" />
          <img src={startIcon} alt="start" />
          <img src={startIcon} alt="start" />
          <img src={startIcon} alt="start" />
          <img src={startDullIcon} alt="start" />
          <p>(122)</p>
        </div>
        <div className="price">
          <div className="old">${product.old_price}</div>
          <div className="new">${product.new_price}</div>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
          placeat unde praesentium, delectus vero asperiores tenetur eos facilis
          dicta tempora?
        </div>
        <div className="size">
            <h1>Select Size</h1>
            <div className="sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <p className="category"> <span>Category&nbsp;:</span>mens , womens , kids</p>
        <p className="tags"><span>Tags&nbsp;:</span>New,Latest,best sellers</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
