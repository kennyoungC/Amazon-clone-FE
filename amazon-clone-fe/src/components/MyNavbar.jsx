import { Link } from "react-router-dom"

const MyNavbar = (props) => {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6 text-white uppercase">
        <Link to={"/"}>
          <h1>KENZON STORE</h1>
        </Link>
        <div className="flex gap-3">
          <Link to={"/new"}>
            {" "}
            <p>Add New Product</p>
          </Link>
          <p>
            Favouries{" "}
            <span className="inline-block py-1 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-blue-500 text-white rounded">
              2
            </span>
          </p>
        </div>
      </nav>
    </header>
  )
}

export default MyNavbar
