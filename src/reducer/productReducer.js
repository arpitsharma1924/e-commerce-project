const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "SET_API_DATA":
      const featureData = action.payload.filter((data)=>{
            return data.featured === true;
        })
        return {
            ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
        }

    case "SET_API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true
      };

      //single product

      case "SET_SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleProductLaoding: true
      };

      case "SET_SINGLE_PRODUCT_API_DATA":
        return {
          ...state,
          isSingleProductLaoding: false,
          singleProduct:action.payload
        };

      case "SET_SINGLE_PRODUCT_API_ERROR":
      return {
        ...state,
        isSingleProductLaoding: false,
        isSingleProductError: true
      };

    default:
      return state;
  }
};

export default ProductReducer;
