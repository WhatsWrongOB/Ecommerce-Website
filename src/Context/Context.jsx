import axios from "axios";

const { createContext, useEffect, useState } = require("react");

const AppContext = createContext()

const ApiUrl = 'https://api.pujakaitem.com/api/products'


const AppProvider = ({ children }) => {

    const [products, setProducts] = useState();


    const getProducts = async (url) => {
        const res = await axios.get(url)
        const { data } = res;
        setProducts(data)
    }

    useEffect(() => {
        getProducts(ApiUrl)
    }, [])

    return (
        <AppContext.Provider value={products}>
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, AppProvider }