import { useState } from "react";
import { FaStarHalf } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`flex flex-col  lg:py-4 h-full lg:h-auto w-full  z-20 top-0`}
    >
      <div className="flex justify-between relative items-center  w-full px-4 lg:px-20 pt-8 ">
        <Link
          to={"/"}
          className="flex gap-1 items-center text-2xl lg:text-2xl lg:fixed z-10"
        >
          <FaStarHalf /> chronicle
        </Link>
        <div className="hidden lg:flex items-center justify-center w-full gap-8">
          <ul className="flex gap-8 text-gray-300  text-lg">
            <Link to={"/"} className="cursor-pointer">
              <li className="">Product</li>
            </Link>
            <Link to={"/"}>
              <li>Our story</li>
            </Link>
            <Link to={"/"}>
              <li>Careers</li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:block lg:fixed right-96  z-10">
          {/* <button className="bg-white font-bold px-6 py-2.5 rounded-lg hover:bg-purple-400 text-black">
            Join Beta
          </button> */}
        </div>
        {/* burger icon */}
        <div className="lg:hidden lg:fixed">
          <button
            onClick={openBurgerMenu}
            className="py-3 border px-4 rounded-lg border-gray-400"
            title="menu"
          >
            {isOpen ? (
              <FaXmark className="text-xl" />
            ) : (
              <FaBarsStaggered className="text-xl" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col justify-between  h-screen w-full gap-2  px-4">
          <div className="border-t  mt-4 border-gray-500">
            <p className="text-left pt-8 text-2xl">
              Experience the future
              <span className="block">of storytelling.</span>{" "}
            </p>
            <ul className="flex flex-col gap-3  pt-8 items-start  text-gray-300  text-2xl">
              <Link to={"/"}>
                <li className="">Product</li>
              </Link>
              <Link to={"/"}>
                <li>Our story</li>
              </Link>
              <Link to={"/"}>
                <li>Careers</li>
              </Link>
            </ul>
          </div>
          <div className="md:hidden pb-8">
            <button className="bg-white w-full font-bold px-6 py-2.5 rounded-lg hover:bg-purple-400 text-black">
              Join Beta
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
