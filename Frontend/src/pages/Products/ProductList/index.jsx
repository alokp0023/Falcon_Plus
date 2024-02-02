import React from "react";
import { SingleProductCard } from "./SingleProductCard";
import { PageBreadcrumb } from "../../../components";

function ProductList() {
  return (
    <div>
      <PageBreadcrumb title="Product List" subName="Products" />
      <SingleProductCard />
    </div>
  );
}

export default ProductList;
