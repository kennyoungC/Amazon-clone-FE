import MyNavbar from "./components/MyNavbar"
import HomePage from "./pages/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import New from "./pages/New"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
