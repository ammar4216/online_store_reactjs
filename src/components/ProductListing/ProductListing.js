import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { addProducts } from "../../redux/actions/index";
import ProductComponent from "../ProductComponent/ProductComponent";
// import Loader from "../Loader/Loader";

function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const getAllProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    const response = await axios.get(url).catch((err) => {
      console.log("Error: ", err);
    });
    dispatch(addProducts(response.data));
  };

  useEffect(() => {
    getAllProducts();
  });

  console.log(products);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

export default ProductListing;
