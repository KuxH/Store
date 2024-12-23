import React from "react"
import { Link } from "react-router-dom"
// import homeimg from "../../assets/homeimg.png"

const Content = () => {
  return (
    <div className="h-auto md:h-[75vh] flex flex-col-reverse md:flex-row items-center px-4 md:px-8 lg:px-16">
      <div className="w-full md:w-3/6 flex flex-col items-start justify-center text-center md:text-left mt-8 md:mt-0">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-100 leading-tight">
          Where Learning, Play, and Passion Come Together!
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
          Your ultimate destination for top-notch stationery, sports essentials,
          and toys that inspire creativity, activity, and joy. "Find everything
          you need, all in one place."
        </p>
        <div className="mt-8 flex justify-center w-full md:justify-start">
          <Link
            to="/items"
            className="text-teal-100 text-base sm:text-lg md:text-xl font-semibold mt-4 border border-teal-100 px-4 py-3 cursor-pointer hover:bg-teal-100 hover:text-sky-950 rounded-full"
          >
            Discover Now
          </Link>
        </div>
      </div>

      {/* <div className="w-full md:w-3/6 flex justify-center">
        <img
          src={homeimg}
          alt="homeimg"
          className="w-full h-auto max-w-md sm:max-w-lg md:max-w-full object-contain"
        />
      </div> */}
    </div>
  )
}

export default Content
