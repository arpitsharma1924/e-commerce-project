import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontext";
import reducer from '../reducer/filterReducer'

const FilterContext = createContext()

const initialState = {
    filter_products:[],
    all_products:[],
    grid_view: true,
    sorting_value:"lowest_price",
    filters:{
        text:"",
        category:"all",
        company:"all",
        color:"all",
        max_price:0,
        price:0,
        min_price:0
    }
}

export const FilterContextProvider = ({children}) =>{
    const { products } = useProductContext();
    // console.log("products===>>", products)

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(()=>{
        dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
    },[products])

    const setGridView = ()=>{
        return(
            dispatch({type:"SET_GRID_VIEW"})
        )
    }
    const setListView = ()=>{
        return(
            dispatch({type:"SET_LIST_VIEW"})
        )
    }
    //sorting function
    const sorting = (event) =>{
        let userValue = event.target.value;
        dispatch({type:"GET_SORT_VALUE", payload:userValue})
    }
    //to sort the product 
    useEffect(()=>{
        dispatch({type:"FILTER_PRODUCTS"});
        dispatch({type:"SORTING_PRODUCTS"});
    },[products, state.sorting_value, state.filters])
//filter section
    const updateFilterValue = (event) =>{
        let name = event.target.name;
        let value = event.target.value;
        return dispatch({type:"UPDATE_FILTERS_VALUE", payload:{name,value}});
    }
//clear all filters
    const clearFilters = ()=>{
        console.log("filter clicked")
        dispatch({type:"CLEAR_FILTERS"});
    }

    return(
        <FilterContext.Provider value={{...state, setGridView, setListView, sorting, updateFilterValue, clearFilters}}>{children}</FilterContext.Provider>
    )
}

export const useFilterContext = ()=>{
    return useContext(FilterContext)
}