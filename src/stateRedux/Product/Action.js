import api from "../../config/apiConfig";
import {
  FIND_PRODUCTS_BY_CATEGORY_REQUEST,
  FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
  FIND_PRODUCTS_BY_CATEGORY_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
} from "./ActionType";
import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";

const jwt = localStorage.getItem("jwt");

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;
  // console.log(
  //   "filter hai",
  //   colors,
  //   sizes,
  //   minPrice,
  //   maxPrice,
  //   minDiscount,
  //   category,
  //   stock,
  //   sort,
  //   pageNumber,
  //   pageSize
  // );
  try {
    // const { data } = await api.get(
    //   `${API_BASE_URL}/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    // );
    const { data } = await api.get(
      `${API_BASE_URL}/api/products?category=${category}&color=${colors}&sizes=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&discountPercent=${minDiscount}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
    );

   
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
   
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    dispatch({
      type: FIND_PRODUCT_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload: error.message,
    });
  }
};

// In your actions.js
export const fetchAllProducts = () => async (dispatch) => {
  dispatch({ type: FIND_PRODUCTS_BY_CATEGORY_REQUEST });
  try {
    const { data } = await api.get(`${API_BASE_URL}/api/products`);
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FIND_PRODUCTS_BY_CATEGORY_FAILURE,
      payload: error.message,
    });
  }
};
