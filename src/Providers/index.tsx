import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <CartProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default Providers;
