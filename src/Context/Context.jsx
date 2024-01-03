import axios from "axios";
import ProductReducer from "../Reducers/ProductReducer";
import React, { createContext, useEffect, useReducer, useContext } from "react";
import CartReducer from "../Reducers/CartReducer";

const AppContext = createContext();


const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featureProduct: [],
    isSingleLoading: false,
    singleProduct: [],
    isSingleError: false,
};

const initialCartState = {
    cartItems: []
}

const AppProvider = ({ children }) => {

    const ApiUrl = 'https://api.pujakaitem.com/api/products';


    const [state, dispatch] = useReducer(ProductReducer, initialState);
    const [cartState, cartDispatch] = useReducer(CartReducer, initialCartState);


    const fetchData = async () => {
        dispatch({ type: 'SET_LOADING' });
        try {
            const res = await axios.get(ApiUrl);
            const products = res.data;
            dispatch({ type: 'MY_API_DATA', payload: products });
        } catch (error) {
            dispatch({ type: 'API_ERROR' });
        }
    };

    useEffect(() => {
        fetchData();
    }, []);



    const getSingleProduct = async (url) => {
        dispatch({ type: 'SET_SINGLE_LOADING' });
        try {
            const res = await axios.get(url);
            const singleProduct = res.data;
            dispatch({ type: 'SINGLE_PRODUCT_DATA', payload: singleProduct });
        } catch (error) {
            dispatch({ type: 'SINGLE_PRODUCT_ERROR' });
        }
    };
    useEffect(() => {
        getSingleProduct(ApiUrl);
    }, []);


    const handleCart = (product) => {

        alert('Added to cart successfully')
        console.log(product)
        cartDispatch({ type: 'ADD_TO_CART', payload: product });
        cartDispatch({ type: 'REMOVE_FROM_CART', payload: product.id });


    };
    return (
        <AppContext.Provider value={{ ...state, getSingleProduct, handleCart, ...cartState }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
