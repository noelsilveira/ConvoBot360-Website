'use client';

import { useEffect, useState } from 'react';

type CartProduct = {
  product_id: string;
  quantity: number;
  option_id?: string;
};

export const useCartItems = () => {
  // Load cart from localStorage on hook initialization
  const [cart, setCart] = useState<CartProduct[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    const checkCart = localStorage.getItem('cart');
    checkCart && setCart(JSON.parse(checkCart));
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartCount));
  }, [cart, cartCount]);

  // Function to add an item to the cart
  const addToCart = (item: CartProduct) => {
    setCart([...cart, item]);
  };

  const updateCartCount = (count: number) => {
    setCartCount(count);
  };

  // Function to clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Function to remove a specific item from the cart
  const removeFromCart = (item: CartProduct) => {
    const updatedCart = cart.filter((i) => i.product_id !== item.product_id);
    setCart(updatedCart);
  };

  // Calculate cart count
  //   const cartCount = cart.length;

  return {
    cart,
    cartCount,
    addToCart,
    clearCart,
    updateCartCount,
    removeFromCart,
  };
};
