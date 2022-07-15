import { useEffect, useState } from "react"
import RatingStar from "./RatingStar"

const ProductsCard = (props) => {
  const { name, brand, description, imageUrl, price, category, _id } = props
  const [avgRating, setAvgRating] = useState(0)

  useEffect(() => {
    getAvgRating()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getAvgRating = async () => {
    try {
      const response = await fetch(`http://localhost:3003/reviews/${_id}`)
      // if (!response.ok) {
      //   throw new Error("Something went wrong")
      // }
      const data = await response.json()
      if (data.length > 0) {
        const avg = data.reduce((acc, curr) => acc + curr.rate, 0) / data.length
        setAvgRating(avg.toFixed(0))
      } else {
        setAvgRating(0)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="py-6">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/3 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        ></div>
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl uppercase">{name}</h1>
          <p className="mt-2 text-gray-600 text-sm">
            Description: {description}
          </p>
          <p className="mt-2 text-gray-600 text-sm">Brand: {brand}</p>
          <div className="flex item-center mt-2">
            <p className="flex items-center justify-center pr-2">
              Average Rating:
            </p>{" "}
            {avgRating !== 0 ? (
              <span className="pt-1">
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
