import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
const btnStyle =
  "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  dark:focus:ring-blue-800 disabled:text-gray-500 disabled:cursor-not-allowed"

const New = (props) => {
  const navigate = useNavigate()
  const [fileError, setFileError] = useState(false)

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    brand: "",
    productFile: null,
  })
  let productFormData = new FormData()
  productFormData.append("name", newProduct.name)
  productFormData.append("price", newProduct.price)
  productFormData.append("description", newProduct.description)
  productFormData.append("category", newProduct.category)
  productFormData.append("brand", newProduct.brand)
  productFormData.append("product-image", newProduct.productFile)

  const onFileChange = (e) => {
    console.log(e.target.files[0])
    if (e.target && e.target.files[0] && e.target.files[0].size < 1000000) {
      setFileError(false)
      setNewProduct({ ...newProduct, productFile: e.target.files[0] })
    } else {
      setFileError(true)
      return
    }
  }
  let formIsValid = true
  if (
    newProduct.name &&
    newProduct.price &&
    newProduct.description &&
    newProduct.category &&
    newProduct.brand &&
    newProduct.productFile !== null
  ) {
    formIsValid = false
  }

  const onSetNewProduct = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value.trim(),
    })
  }
  const submitHandler = async (e) => {
    e.preventDefault()

    const apiUrl = `${process.env.REACT_APP_BE_URL}/products`
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(newProduct),
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
    <div className="container justify-center  mx-auto py-5 w-5/6">
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

        <div className="flex justify-between items-center">
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="file_input"
            >
              Upload product image
            </label>
            <label>
              <input
                type="file"
                name="product-image"
                onChange={onFileChange}
                className="text-sm text-grey-500
                file:mr-5 file:py-2 file:px-6
                file:rounded-full file:border-0
                file:text-sm file:font-medium
                file:bg-blue-50 file:text-blue-700
                hover:file:cursor-pointer hover:file:bg-amber-50
                hover:file:text-lime-700
              "
              />
            </label>
            {fileError && <p>file must be lower 10MB</p>}
          </div>
          <button type="submit" disabled={formIsValid} className={btnStyle}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default New
