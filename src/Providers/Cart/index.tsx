import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/api";
import { useAuth } from "../Auth";
import { toast } from "react-toastify";

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
  userId?: any;
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

  useEffect(() => {
    api
      .get(`/users/${user}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }, [token, user]);

  useEffect(() => {
    api
      .get(`/users/${user}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setCart(response.data);
      })
      .catch((error) => console.log(error.response.data));
  }, [cart]);

  const addProduct = (product: Product) => {
    const productAdded = cart.find(
      (cartProduct) => cartProduct.id === product.id
    );

    const newProduct: Product = {
      image: product.image,
      name: product.name,
      category: product.category,
      price: product.price,
      id: product.id,
      quantity: product.quantity + 1,
      userId: user,
    };

    if (!productAdded) {
      api
        .post(`/cart`, newProduct, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          toast.success('Produto adicionado!')
        })
        .catch();
    } else{
      toast.error('Produto já está adicionado.')
    }
  };

  const deleteProduct = (productToBeDelete: Product) => {
    const productDeleted = cart.find(
      (product) => product.id === productToBeDelete.id
    );
    api
      .delete(`/cart/${productDeleted!.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {})
      .catch((error) => console.log("ei"));
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
