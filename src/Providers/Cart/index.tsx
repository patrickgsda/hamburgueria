import { createContext, useContext, useState, ReactNode } from "react";

interface CartProps {
  children: ReactNode;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

interface CartProviderData {
  cart: Product[];

  addProduct: (product: Product) => void;

  deleteProduct: (product: Product) => void;
}

export const CartContext = createContext<CartProviderData>(
  {} as CartProviderData
);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addProduct = (product: Product) => {
    const productAdded = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );
    if (!productAdded) {
      setCart([...cart, product]);
    }
  };

  const deleteProduct = (productToBeDelete: Product) => {
    const newCart = cart.filter(
      (product) => product.title !== productToBeDelete.title
    );
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
