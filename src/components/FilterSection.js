import React from 'react'
import styled from 'styled-components';
import { useFilterContext } from '../context/filtercontext';
import { FaCheck} from 'react-icons/fa'
import FormatPrice from '../helper/FormatPrice'
import {Button} from '../styles/Button'

const FilterSection = () => {
  const { filters:{text, category, color, price, min_price, max_price}, 
  updateFilterValue,
  all_products,
  clearFilters
} = useFilterContext();

//to get the unique data of each filter ( category, company, colors )
  const getUniqueData = (data, property) =>{
    let newVal = data.map((curEle)=>{
      return curEle[property];
    });
    if (property==="colors") {
      // return newVal = ["All", ...new Set([].concat(...newVal))]
     newVal = newVal.flat();
    }
    return( 
      newVal = ["all", ...new Set(newVal)] //removing duplicate values
      )
  }
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <Wrapper>
      {/* Search functionality.. start*/}
      <div className='filter-search'>
        <form onSubmit={(e)=>e.preventDefault()}>
          <input 
          type='text' 
          name='text' 
          value={text} 
          placeholder='Search..'
          onChange={updateFilterValue}/>
        </form>
      </div>
      {/* Search functionality.. end*/}
      {/* Category wise functionality.. start*/}
      <div className='filter-category'>
        <h3>Category</h3>
        <div>
        {
          categoryData.map((curEle, index)=>{
            return <button key={index} 
            type='button' 
            name='category' 
            value={curEle}
            onClick={updateFilterValue}
            className={curEle === category ? "active" : ""}
            >
              {curEle}
            </button>
          })
        }
        </div>
      </div>
      {/* Category wise functionality.. end*/}
      {/* Company wise functionality.. start*/}
        <div className='filter-company'>
          <h3>Company</h3>
          <form action='#'>
            <select 
            name="company" 
            id='company' 
            className='filter-company--select' 
            onClick={updateFilterValue}
            >
              {
                companyData.map((curEle, i)=>{
                  return <option key={i} value={curEle} name="company">{curEle}</option>
                })
              }
            </select>
          </form>
        </div>
      {/* Company wise functionality.. end*/}
      {/* Color wise functionality.. start*/}
      <div className='filter-color'>
        <h3>Colors</h3>
              <div className='filter-color-style'>
                {
                  colorsData.map((curColor,i)=>{
                    if (curColor==='all') {
                      return (
                      <button
                      key={i}
                      type='button'
                      name='color'
                      value={curColor}
                      className={color === curColor ? 'color-all--style active-all' : 'color-all--style'}
                      onClick={updateFilterValue}
                      >
                        All
                      </button>
                    )
                    }
                    return (
                      
                      <button
                      key={i}
                      type='button'
                      name='color'
                      value={curColor}
                      style={{backgroundColor:curColor}}
                      className={color === curColor ? 'btnStyle active' : 'btnStyle'}
                      onClick={updateFilterValue}
                      >
                        {color === curColor? <FaCheck className='checkStyle'/> : null}
                      </button>
                    )
                  })
                }
              </div>
      </div>
      {/* Company wise functionality.. end*/}
      {/* Range wise functionality.. start*/}
      <div className='filter_price'>
        <h3>Price</h3>
        <p> <FormatPrice price={price} /></p>
        <input type='range' 
        name='price' 
        min={min_price} 
        max={max_price} 
        value={price} 
        onChange={updateFilterValue}
        />
        </div>
      {/* Range wise functionality.. end*/}
      {/* clear all filters.. start*/}
      <div className='filter-clear'> 
          <Button className='btn' onClick={clearFilters}>Clear Filters</Button>
      </div>
      {/* clear all filters.. end*/}
      
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: bold;
  }
  .filter-search {
    input {
      padding: 0.8rem 1rem;
      width: 100%;
      box-shadow: none;
      border-color: #e40046;
      border-radius: 20px;
    }
    input:focus{
      outline: none;
      box-shadow: #e40046 0px 2px 0px;
    }
  }
  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: #e40046;
        }
      }
      .active {
        /* border-bottom: 1px solid #e40046; */
        box-shadow: #e40046 0px 2px 0px;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select {
    padding: 0.6rem 1.2rem;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
    cursor: pointer;
    border: 1px solid gray;
    outline-color: #e40046;
  }
  .filter-color-style {
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }
  .color-all--style {
    display: flex;
    /* justify-content: center; */
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    align-items: center;
    font-size: 2rem;
    &:hover {
      /* color: #e40046; */
      opacity: 1;
    }
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .active-all{
    box-shadow: #e40046 0px 2px 0px;
    opacity: 1;
  }
  .checkStyle {
    font-size: 1.3rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    color: #000;
  }
`;
export default FilterSection