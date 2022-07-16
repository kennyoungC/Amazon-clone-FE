import { useEffect, useState } from "react"
import ProductsCard from "../components/ProductsCard"

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_BE_URL}/products`
      const response = await fetch(apiUrl)
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      } else {
        throw new Error("Something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
        {products.map((product) => (
          <ProductsCard key={product._id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
