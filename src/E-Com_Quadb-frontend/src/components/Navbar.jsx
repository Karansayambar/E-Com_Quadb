import React, { useContext, useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { CartCounterContext } from "../Context/CountContext";
import Slider from "./Slider";

const Navbar = () => {
  const { cartItems, cartCount } = useContext(CartCounterContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    console.log("btn click");
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    console.log(cartCount);
    console.log(cartItems);
  }, [cartCount, cartItems]);
  return (
    <div className="px-10 p-2 flex items-center justify-between bg-gray-200 relative">
      <div className="flex items-center gap-2">
        <h2 className="text-[30px]">
          <strong className="text-[#58A0E2] text-[40px]">Elec</strong>xo
        </h2>
        <button className="border border-black p-2 rounded-md ">
          <IoHomeOutline />
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        className="w-[70%] border-2 p-1 rounded-md"
      />
      <div className="flex gap-3">
        <button className="border border-black p-2 rounded-md ">
          <IoPerson />
        </button>
        <div className="border border-black p-2 rounded-md relative cursor-pointer">
          <CiShoppingCart />
          <p
            className="absolute top-[-10px] right-[-5px] z-10 bg-blue-200 rounded-lg px-1"
            onClick={handleOpen}
          >
            {cartCount}
          </p>
          {isOpen && <Slider isOpen={isOpen} setIsOpen={setIsOpen}/>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
