import React from "react"


const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Items",
      link: "/items",
    },
    {
      title: "Cart",
      link: "/cart",
    },
    {
      title: "Profile",
      link: "/profile",
    },
    {
        title: "About Us",
        link: "/about",
      }
  ]
  return (
    <div className="flex bg-sky-700 text-white px-4 py-2 items-center justify-between">
      <div className="flex items-center ">
        <img className="h-10 me-4" src="./logo.png" alt="logo" />
        <h1 className="text-2xl font-bold">HETAUDA BOOK HOUSE</h1>
      </div>
      <div className="nav-links-hbh flex items-center gap-4">
        <div className="flex gap-4">
          {links.map((items, i) => (
            <div
              className="hover:text-blue-950 cursor-pointer transition-all duration-300"
              key={i}
            >
              {items.title}{" "}
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-1 border border-gray-700 rounded hover:bg-white hover:text-black transtion-all duraton-300">
            Login
          </button>
          <button className="px-4 py-1  bg-gray-700  rounded hover:bg-white hover:text-black transtion-all duration-300">
            Signup
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
