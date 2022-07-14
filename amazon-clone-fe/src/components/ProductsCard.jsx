import RatingStar from "./RatingStar"

const ProductsCard = () => {
  return (
    <div className="py-6">
      <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="w-1/3 bg-cover"
          style={{
            "background-image":
              "url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')",
          }}
        ></div>
        <div className="w-2/3 p-4">
          <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
          <p className="mt-2 text-gray-600 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit In odit
            exercitationem fuga id nam quia
          </p>
          <div className="flex item-center mt-2">
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
          </div>
          <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">$220</h1>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsCard
