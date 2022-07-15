import RatingStar from "./RatingStar"

const ProductsCard = (props) => {
  const { name, brand, description, imageUrl, price, category } = props
  return (
    <div className="py-6">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/3 bg-contain bg-center bg-no-repeat"
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
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
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
