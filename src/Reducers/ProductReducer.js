
const ProductReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'API_ERROR':
            return {
                ...state,
                isLoading: true,
                isError: true
            }
        case 'MY_API_DATA':
            const featureddata = action.payload.filter((curElem) => {
                return curElem.featured === true
            })
            return {
                ...state,
                isLoading: false,
                product: action.payload,
                featureProduct: featureddata
            }
        case 'SET_SINGLE_LOADING':
            return {
                ...state,
                isSingleLoading: true
            }
        case 'SINGLE_PRODUCT_DATA':
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload
            }
        case 'SINGLE_PRODUCT_ERROR':
            return {
                ...state,
                isSingleLoading: true,
                isSingleError: true
            }

        default:
            return {
                ...state
            };
    }
}

export default ProductReducer