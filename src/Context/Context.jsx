import axios from "axios";
import ProductReducer from "../Reducers/ProductReducer";
import React, { createContext, useEffect, useState, useReducer, useContext } from "react";

const AppContext = createContext();

const ApiUrl = 'https://api.pujakaitem.com/api/products';

const initialState = {
    isLoading: false,
    isError: false,
    product: [],
    featureProduct: []
};

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialState);

    useEffect(() => {

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

        fetchData();
    }, []);

    return (
        <AppContext.Provider value={{ ...state }}>
            {children}
        </AppContext.Provider>
    );
};

// Custom hook
const useProductContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useProductContext };
