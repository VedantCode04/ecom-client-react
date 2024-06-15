import React from 'react'
import {
  createBrowserRouter,
  RouterProvider, Outlet
} from "react-router-dom"
import Home from './pages/home/Home'
import Products from './pages/products/Products'
import Product from './pages/product/Product'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Cart from './pages/Cart/Cart'
import PaymentPage from './pages/Payment/PaymentPage.jsx'
import "./app.scss"
import Search from './pages/Search/Search.jsx'
import AllProducts from './pages/AllProducts/AllProducts.jsx'
const Layout = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/allproducts",
        element: <AllProducts/>
      },
    ],
  },
]);
const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App