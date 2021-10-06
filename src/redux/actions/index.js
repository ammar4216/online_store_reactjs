import {
  ADD_PRODUCTS,
  REMOVE_SELECTED_PRODUCTS,
  SELECTED_PRODUCTS,
} from "../constants";

export const addProducts = (products) => {
  return {
    type: ADD_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: SELECTED_PRODUCTS,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: REMOVE_SELECTED_PRODUCTS,
  };
};
