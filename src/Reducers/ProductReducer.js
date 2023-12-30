
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

        default:
            return {
                ...state
            };
    }
}

export default ProductReducer