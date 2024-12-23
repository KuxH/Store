import React from "react"
import homeimg from "../../assets/homeimg.png"

function Content() {
  return (
    <div className="h-[75vh] flex">
      <div className="w-3/6 flex flex-col  items-start justify-center">
        <h1 className="text-6xl font-bold text-teal-100">
          Where Learning, Play, and Passion Come Together!
        </h1>
        <p className="mt-4 text-xl text-gray-200">
          Your ultimate destination for top-notch stationery, sports essentials,
          and toys that inspire creativity, activity, and joy. "Find everything
          you need, all in one place."
        </p>
        <div className="mt-8">
          <button className="text-teal-100 text-2xl font-semibold mt-4 border border-teal-100 px-4 py-3 cursor-pointer hover:bg-teal-100 hover:text-sky-950 rounded-full">
            Discover Now
          </button>
        </div>
      </div>
      <div className="w-3/6">
      <img src={homeimg} alt="homeimg" /></div>
    </div>
  )
}

export default Content
