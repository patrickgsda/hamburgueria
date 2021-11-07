import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

interface ProductsProps {
  children: ReactNode;
}

interface Product {
  image: string;
  name: string;
  category: string;
  price: number;
  id: number;
}

interface ProductsProviderData {
  products: Product[];
}

export const ProductsContext = createContext<ProductsProviderData>(
  {} as ProductsProviderData
);

export const ProductsProvider = ({ children }: ProductsProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((error) => toast.error("Algo de errado não está certo..."));
  });

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
