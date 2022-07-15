import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import RatingStar from "./RatingStar"
import ReviewsForm from "./ReviewsForm"

const ProductDetails = (props) => {
  const [product, setProduct] = useState({})
  const [reviews, setReviews] = useState([])
  const params = useParams()

  useEffect(() => {
    getSingleProduct()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchReviews()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const onSetNewReview = (review) => {
    setReviews([...reviews, review])
  }

  const getSingleProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/products/${params.productId}`
      )
      if (response.ok) {
        const data = await response.json()
        setProduct(data)
      } else {
        throw new Error("Something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }
  const fetchReviews = async () => {
    try {
      const response = await fetch(
        `http://localhost:3003/reviews/${params.productId}`
      )
      if (response.ok) {
        const data = await response.json()
        setReviews(data)
      } else {
        throw new Error("Something went wrong")
      }
    } catch (error) {
      console.log(error)
    }
  }
  console.log(params.productId)
  console.log(reviews)
  return (
    <div className="container mx-auto p-8 flex flex-wrap gap-5">
      <img
        className="max-w-md shadow-lg object-cover h-full"
        src={product.imageUrl}
        alt=""
      />
      <div className="capitalize">
        <p>
          <strong>Brand:</strong> {product.brand}
        </p>
        <p>
          <strong>Name:</strong> {product.name}
        </p>
        <p>
          <strong>Category:</strong> {product.category}
        </p>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <div>
          <p className=" underline">
            <strong>Review(s):</strong>
          </p>
          <ul>
            {reviews.map((review) => (
              <li key={review._id}>
                <div className="flex">
                  <p>{review.comment}</p>
                  <p className="flex">
                    {[...Array(review.rate)].map((star, i) => {
                      return <RatingStar key={i} />
                    })}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <ReviewsForm onSetNewReview={onSetNewReview} id={product._id} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
