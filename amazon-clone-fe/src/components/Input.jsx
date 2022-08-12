const Input = (props) => {
  const { type, name, label, onSetNewProduct, value } = props
  return (
    <div className="relative z-0 mb-6 w-full text-black group">
      <input
        onChange={(e) => onSetNewProduct(e)}
        value={value}
        type={type}
        name={name}
        id={name}
        min={1}
        className="block py-2.5 px-0 w-full text-sm text-red bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </div>
  )
}

export default Input
