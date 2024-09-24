import React, { useContext } from "react";
import { CartCounterContext } from "../Context/CountContext";

const Slider = ({ isOpen, setIsOpen }) => {
  const { cartItems, incrementCount, decrementCount } = useContext(CartCounterContext);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[300px] bg-white shadow-lg transition-transform duration-300 z-50 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <p className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>X</p>
        <h2 className="text-lg font-semibold">Your Cart</h2>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 py-2 flex items-center justify-between"
            >
              <img
                src={item.img}
                alt={item.brand}
                className="h-[60px] w-[60px] p-2"
              />
              <div>
                <p className="font-bold">{item.brand}</p>
                <p>{item.desc.slice(0, 50)}</p>
                <div className="flex items-center justify-between">
                  <p>Quantity: {item.count}</p>
                  {/* <div>
                  <button
                  onClick={() => incrementCount(item.id)}
                  className="px-2 py-1 bg-[#58A0E2] text-white rounded"
                >
                  +
                </button>
                <span className="mx-2">{item.count}</span>
                <button
                  onClick={() => decrementCount(item.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  disabled={item.count === 0}
                >
                  -
                </button>
                  </div> */}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart</p>
        )}
      </div>
    </div>
  );
};

export default Slider;
