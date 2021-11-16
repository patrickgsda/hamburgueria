import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/api";
import { useAuth } from "../Auth";

interface CartProps {
  children: ReactNode;
}

interface Product {
  image: string;
  name: string;
  category: string;
  price: number;
  id: number;
  quantity: number;
}

interface CartProviderData {
  cart: Product[];

  addProduct: (product: Product) => void;

  deleteProduct: (product: Product) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProps) => {
  const [cart, setCart] = useState<Product[]>([]);
  const { token, user } = useAuth();

  const currentCart = () => {
    api
      .get(`/users/${user}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => console.log(error.response.data));
  };

  const addProduct = (product: Product) => {
    const productAdded = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );
    console.log(cart);
    console.log(user);

    if (!productAdded) {
      setCart([...cart, product]);
      currentCart();
    }
  };

  const deleteProduct = (productToBeDelete: Product) => {
    const newCart = cart.filter(
      (product) => product.id !== productToBeDelete.id
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
