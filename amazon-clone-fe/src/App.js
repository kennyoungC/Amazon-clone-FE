import MyNavbar from "./components/MyNavbar"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import New from "./pages/New"
import ProductDetails from "./components/ProductDetails"
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <MyNavbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<New />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
