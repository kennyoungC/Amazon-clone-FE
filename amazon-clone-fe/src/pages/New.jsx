import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
const btnStyle =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

const New = (props) => {
  const navigate = useNavigate()

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    imageUrl: "",
    category: "",
    brand: "",
  })
  const onSetNewProduct = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:3003/products", {
        method: "POST",
        body: JSON.stringify(newProduct),
        headers: {
          "Content-Type": "application/json",
        },
      })
      console.log(await response.json())
      if (response.ok) {
        console.log("Product added")
        alert("Product added")
        navigate("/")
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="container mx-auto py-5">
      <form onSubmit={submitHandler}>
        <Input
          onSetNewProduct={onSetNewProduct}
          value={newProduct.name}
          type="text"
          name="name"
          label="Product Name"
        />
        <Input
          onSetNewProduct={onSetNewProduct}
          value={newProduct.brand}
          type="text"
          name="brand"
          label="Product Brand"
        />
        <Input
          type="text"
          onSetNewProduct={onSetNewProduct}
          value={newProduct.category}
          name="category"
          label="Category"
        />
        <Input
          type="text"
          onSetNewProduct={onSetNewProduct}
          value={newProduct.description}
          name="description"
          label="Description"
        />
        <Input
          type="number"
          onSetNewProduct={onSetNewProduct}
          value={newProduct.price}
          name="price"
          label="Price"
        />
        <Input
          type="text"
          onSetNewProduct={onSetNewProduct}
          value={newProduct.imageUrl}
          name="imageUrl"
          label="Product Image Url"
        />

        <button type="submit" className={btnStyle}>
          Submit
        </button>
      </form>
    </div>
  )
}

export default New
