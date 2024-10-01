import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NoPage from "./pages/noPage/NoPage"; 
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import CartPage from "./pages/cart/CartPage";
import AllProduct from "./pages/allProduct/AllProduct";
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProductPage from "./pages/admin/AddProductPage";
import UpdateProductPage from "./pages/admin/UpdateProductPage";
import MyState from "./context/myState";
import { MyProvider } from "./context/myContext"; 
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";
import CategoryPage from "./pages/category/CategoryPage";
import Returns from "./pages/Returns";
import AboutUs from "./pages/AboutUs";
import Privacy from "./pages/Privacy";

const App = () => {
  return (
    <MyProvider>
      <MyState>
      <Router>
        {/* <Navbar /> */}
        <ScrollTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoPage />} /> 
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/allproduct" element={<AllProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/category/:categoryname" element={<CategoryPage />} /> 

          <Route path="/user-dashboard" element={
            <ProtectedRouteForUser>
              <UserDashboard />
            </ProtectedRouteForUser>}
             />
          <Route path="/admin-dashboard" element={
            <ProtectedRouteForAdmin>
              <AdminDashboard />
              </ProtectedRouteForAdmin>}
               />
          <Route path="/addproduct" element={
            <ProtectedRouteForAdmin>
            <AddProductPage />
            </ProtectedRouteForAdmin>
          } />
          <Route path="/updateproduct/:id" element={
             <ProtectedRouteForAdmin>
            <UpdateProductPage />
             </ProtectedRouteForAdmin>
            } />
        </Routes>
        <Toaster />
      </Router>
      </MyState>
    </MyProvider> 
  );
};

export default App;