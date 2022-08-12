import { useEffect, useState } from "react"
import RatingStar from "./RatingStar"
import { Link } from "react-router-dom"
import Modal from "./Modal"
const ProductsCard = (props) => {
  const { name, brand, description, imageUrl, price, category, _id, reviews } =
    props
  const [avgRating, setAvgRating] = useState(0)
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    getAvgRating()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getAvgRating = async () => {
    try {
      const data = reviews
      if (data.length > 0) {
        const rate = data.map((review) => review.rate)
        setAvgRating(
          parseInt(rate.reduce((acc, curr) => acc + curr, 0) / rate.length)
        )
      } else {
        setAvgRating(0)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const closeModalHandler = () => {
    setShowModal(false)
  }
  return (
    <div className="py-6">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          onClick={() => setShowModal(true)}
          className="w-1/3 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
            width: "220px",
          }}
        ></div>
        {showModal && <Modal image={imageUrl} onClose={closeModalHandler} />}
        <div className="w-2/3 p-4">
          <Link to={`/products/${_id}`}>
            <h1 className="text-gray-900 font-bold text-2xl uppercase">
              {name}
            </h1>
            <p className="mt-2 text-gray-600 text-sm">
              Description: {description}
            </p>
            <p className="mt-2 text-gray-600 text-sm">Brand: {brand}</p>
          </Link>
          <div className="flex item-center mt-2">
            <p className="flex items-center justify-center pr-2">
              Average Rating:
            </p>{" "}
            {avgRating !== 0 ? (
              <span className="pt-1 flex">
                {[...Array(avgRating)].map((star, i) => {
                  return <RatingStar key={i} />
                })}
              </span>
            ) : (
              <span className="pt-1">No Ratings</span>
            )}
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">${price}</h1>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              {category}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard
