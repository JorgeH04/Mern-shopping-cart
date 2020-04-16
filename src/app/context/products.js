import React, { Component } from 'react'
//import axios from 'axios'
//import {getPosts} from './service'
import { getAll, paginate } from './data';

export const ProductContext = React.createContext();


export default function ProductProvider({ children }) {

   const [loading, setLoading] = React.useState(false);   
   const [products, setProducts] = React.useState([]);
   const [sorted, setSorted] = React.useState([]);
   const [page, setPage] = React.useState(0);
   const [filters, setFilters] = React.useState({
    search: "",
    category: "todos",
    shipping: false,
    price: "todos"
  });

   const initialUrl = `/api/post`;


   const changePage = index => {
    setPage(index);
  };


   const updateFilters = e => {
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    let filterValue;
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "todos" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }
    setFilters({ ...filters, [filter]: filterValue });
    console.log(filter);
  };
   

   
   React.useEffect(() => {
    setLoading(true);
    async function fetchData() {

      let response = await getAll(initialUrl);
      console.log(response);
      setSorted(paginate(products));
      //console.log(res);
      setProducts(response);
      setLoading(false);
  
    
    
  }
  fetchData();
  
  }, []);


  React.useLayoutEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    const { search, category, shipping, price } = filters;
    //
    if (category !== "todos") {
      newProducts = newProducts.filter(item => item.category === category);
    }
    if (shipping !== false) {
      newProducts = newProducts.filter(item => item.free_shipping === shipping);
    }
    if (price !== "todos") {
      newProducts = newProducts.filter(item => {
        if (price === 0) {
          return item.price < 2000;
        } else if (price === 2000) {
          return item.price > 2000 && item.price < 5000;
        } else {
          return item.price > 5000;
        }
        
      });
    }
    if (search !== "") {
      newProducts = newProducts.filter(item => {
        let title = item.title.toLowerCase().trim();
        return title.startsWith(search) ? item : null;
      });
    }

    setPage(0);

    setSorted(paginate(newProducts));
    console.log( newProducts)
  }, [filters, products]);
  



    return (
      <ProductContext.Provider
      value={{
        products,
        loading,
        filters,
        sorted,
        page,
        changePage,
        updateFilters
      }}
    >
      {children}
    </ProductContext.Provider>

    )
}
