import { Routes,Route } from "react-router-dom";
import { HomePage,ProductsList,CartPage } from "../pages";

export const AllRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/Product" element={<ProductsList/>} />
          <Route path="/cart" element={<CartPage/>} />
        </Routes>
    </>
  )
}
