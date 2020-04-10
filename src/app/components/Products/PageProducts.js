import React from "react";
import { ProductContext } from "../../context/products";
import ProductList from "./ProductList";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
export default function PaginatedProducts() {
  const { sorted, page, changePage } = React.useContext(ProductContext);

  if (sorted) {
    return (
      <section>
        <ProductList products={sorted}></ProductList>

       
      </section>
    );
  } else {
    return (
      <h3 className="search-errors">
        unfortunately your search query did not return any products
      </h3>
    );
  }
}
