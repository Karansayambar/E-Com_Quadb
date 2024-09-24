import React, { useContext } from "react";
import { mobiles } from "../Data/Mobile";
import { CartCounterContext } from "../Context/CountContext";

const Mobile = () => {
  const {mobiles, setMobiles, decrementCount, incrementCount } = useContext(CartCounterContext);

  return (
    <div>
      <p className="text-xl font-semibold uppercase px-10 py-4 bg-gray-200 my-4">Mobiles</p>
      <div className="flex flex-wrap mx-auto items-center justify-evenly gap-4 h-auto box-content mx-4">
        {mobiles.slice(0, 4).map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-[300px] p-2 rounded-md box-content"
          >
            <img src={item.img} className="h-[200px] w-[200px]" />
            <div>
              <p>{item.brand}</p>
              <p>{item.desc.slice(0, 70)}...</p>
              <div className="flex items-center justify-between p-4">
                <p>{item.price}</p>
                <div className="counter flex items-center">
                  {item.count > 0 ? (
                    <>
                      <button
                        onClick={() => incrementCount(item.id, setMobiles)}
                        className="px-2 py-1 bg-[#58A0E2] text-white rounded"
                      >
                        +
                      </button>
                      <span className="mx-2">{item.count}</span>
                      <button
                        onClick={() => decrementCount(item.id, setMobiles)}
                        className="px-2 py-1 bg-red-500 text-white rounded"
                        disabled={item.count === 0}
                      >
                        -
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => incrementCount(item.id, setMobiles)}
                      className="px-4 py-1 bg-[#58A0E2] text-white rounded"
                    >
                      ADD
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
