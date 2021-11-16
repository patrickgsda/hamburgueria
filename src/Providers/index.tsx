import { ReactNode } from "react";
import { ProductsProvider } from "./Products";
import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <CartProvider>
      <AuthProvider>
        <ProductsProvider>{children}</ProductsProvider>
      </AuthProvider>
    </CartProvider>
  );
};

export default Providers;
