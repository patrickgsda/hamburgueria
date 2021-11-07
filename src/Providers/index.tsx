import { ReactNode } from "react";
import { ProductsProvider } from "./Products";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <ProductsProvider>{children}</ProductsProvider>;
};

export default Providers;
