import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./screens/AddProduct";
import EditProduct from "./screens/EditProduct";
import ProductDetails from "./screens/ProductDetails";
import ShowProducts from "./screens/ShowProducts";
import Welcome from "./Welcome";
import Menu from "./screens/Menu";

const PageRouter = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/allProducts" element={<ShowProducts />} />
        <Route exact path="/addProduct" element={<AddProduct />} />
        <Route exact path="/updateProduct/:id/" element={<EditProduct />} />
        <Route exact path="/single/:id/" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
