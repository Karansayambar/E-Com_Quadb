import React, { createContext, useEffect, useState } from "react";
import { mobiles as mobileData } from "../Data/Mobile";
import { televisions as televisionData } from "../Data/televisionData";
import { cameras as cameraData } from "../Data/camera";
import { laptops as laptopData } from "../Data/Laptops";

export const CartCounterContext = createContext();

export const CartCounterProvider = ({ children }) => {
  const [mobiles, setMobiles] = useState([]);
  const [televisions, setTelevisions] = useState([]);
  const [cameras, setCameras] = useState([]);
  const [laptops, setLaptops] = useState([]);

  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  // Increment count for a specific item
  const incrementCount = (id, categorySetter) => {
    categorySetter((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const updatedItem = { ...item, count: (item.count || 0) + 1 };

          setCartItems((prevCartItems) => {
            const isItemInCart = prevCartItems.find(
              (cartItem) => cartItem.id === id
            );
            if (!isItemInCart) {
              // Add item to cart if not already in it
              return [...prevCartItems, updatedItem];
            } else {
              // Update the item count if already in the cart
              return prevCartItems.map((cartItem) =>
                cartItem.id === id
                  ? { ...cartItem, count: cartItem.count + 1 }
                  : cartItem
              );
            }
          });

          // Update cart count
          setCartCount((prev) => prev + 1);

          return updatedItem;
        }
        return item;
      })
    );
  };

  // Decrement count for a specific item
  const decrementCount = (id, categorySetter) => {
    categorySetter((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id && item.count > 0) {
          const updatedItem = { ...item, count: item.count - 1 };

          setCartItems(
            (prevCartItems) =>
              prevCartItems
                .map((cartItem) =>
                  cartItem.id === id
                    ? { ...cartItem, count: cartItem.count - 1 }
                    : cartItem
                )
                .filter((cartItem) => cartItem.count > 0) // Remove if count is 0
          );

          // Update cart count
          setCartCount((prev) => prev - 1);

          return updatedItem;
        }
        return item;
      })
    );
  };

  // UseEffect to initialize the product counts to zero
  useEffect(() => {
    setMobiles(mobileData.map((item) => ({ ...item, count: 0 })));
    setTelevisions(televisionData.map((item) => ({ ...item, count: 0 })));
    setCameras(cameraData.map((item) => ({ ...item, count: 0 })));
    setLaptops(laptopData.map((item) => ({ ...item, count: 0 })));
  }, []);

  return (
    <CartCounterContext.Provider
      value={{
        cartCount,
        cartItems,
        mobiles,
        televisions,
        cameras,
        laptops,
        setCameras,
        setLaptops,
        setMobiles,
        setTelevisions,
        incrementCount,
        decrementCount,
      }}
    >
      {children}
    </CartCounterContext.Provider>
  );
};
