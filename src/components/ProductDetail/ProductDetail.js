import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/index";

import Loader from "../Loader/Loader";

function ProductDetail() {
  const product = useSelector((state) => state.product);

  const { image, title, price, category, description } = product;

  const { productId } = useParams();

  const dispatch = useDispatch();

  console.log(product);

  const getProductDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProduct(res.data));
  };

  useEffect(() => {
    if (productId && productId !== "") getProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <Loader />
      ) : (
        <>
          <Link to="/">
            <button
              className="ui vertical animated button"
              tabIndex="0"
              style={{ backgroundColor: "#333", color: "#fff" }}
            >
              <div className="hidden content">
                <i class="arrow alternate circle left icon"></i>
              </div>
              <div className="visible content">Back to Home</div>
            </button>
          </Link>
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">&</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} alt={title} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a href="#" className="ui teal tag label">
                      ${price}
                    </a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <button className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
