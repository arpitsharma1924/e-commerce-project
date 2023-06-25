const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArray = action.payload.map((curPrice)=> curPrice.price );
      // let maxPrice = 0;
      //   for (var i = 0 ; i <= priceArray.length; ++i) {
      //     if (priceArray[i] > maxPrice) {
      //       maxPrice = priceArray[i];
      //     }
      //   }
      // let maxPrice = Math.max.apply(null, priceArray);
      // let maxPrice = Math.max(...priceArray)
      let maxPrice = priceArray.reduce((initialVal, curVal) => {
        return Math.max(initialVal, curVal)
      },0);
      
      console.log("max price===>>>", maxPrice);
      
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters:{
          ...state.filters,
          max_price: maxPrice,
          price: maxPrice,
        }
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      // let usersortingvalue = document.getElementById("sort")
      // let sort_value = usersortingvalue.options[usersortingvalue.selectedIndex].value
      return {
        ...state,
        sorting_value:action.payload
      }
    case "SORTING_PRODUCTS":
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];
      const sortingProduct = (a,b) =>{
        switch (sorting_value) {
          case "lowest_price":
            {
              return a.price - b.price;
            }
          case "highest_price":
            {
              return b.price - a.price;
            }
          case "a-z":
            {
              return a.name.localeCompare(b.name)
            }
          case "z-a":
            {
              return b.name.localeCompare(a.name)
            }
          default:
        }

        // if (sorting_value==="lowest_price") {
        //   return a.price - b.price;
        // }
        // if (sorting_value==="highest_price") {
        //   return b.price - a.price;
        // }
        // if (sorting_value==="a-z") {
        //   return a.name.localeCompare(b.name)
        // }
        // if (sorting_value==="z-a") {
        //   return b.name.localeCompare(a.name)
        // }
      }

      tempSortProduct = tempSortProduct.sort(sortingProduct) 
      return {
        ...state,
        filter_products: tempSortProduct
      };

    case "UPDATE_FILTERS_VALUE" :
      const { name, value } = action.payload;
      return {
        ...state,
        filters : {
          ...state.filters,
          [name]: value
        }
      }
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProduct = [...all_products];
      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((curEle)=>{
          return curEle.name.toLowerCase().includes(text)
        })
      };
      if (category !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curEle)=>{
          return curEle.category === category
        })
      };
      if (company !== "all") {
        tempFilterProduct = tempFilterProduct.filter((curEle)=>{
          return curEle.company.toLowerCase() === company.toLowerCase()
        })
      };
      if (color !=="all") {
        tempFilterProduct = tempFilterProduct.filter((curEle)=>{
          return curEle.colors.includes(color);
        })
      };
      if (price=== 0) {
        tempFilterProduct = tempFilterProduct.filter((curEle)=>{
          return curEle.price === price;
        })
      } else {
        tempFilterProduct = tempFilterProduct.filter((curEle)=>{
          return curEle.price <= price;
        })
      };
      return {
        ...state,
        filter_products: tempFilterProduct
      };

      case "CLEAR_FILTERS":
        return {
          ...state,
          filters: {
            ...state.filters,
            text: "",
            category: "all",
            company: "all",
            color: "all",
            max_price: state.filters.max_price,
            price: state.filters.max_price,
            min_price: 0,
          },
        };
    default:
      return state;
  }
};
export default FilterReducer;
