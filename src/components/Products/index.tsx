import { useProducts } from "../../Providers/Products";
import { useCart } from "../../Providers/Cart";

import { Card, Container, ContainerImg, ContainerInfos } from "./styles";
import Button from "../Button";

const Products = () => {
  const { products } = useProducts();
  const { addProduct } = useCart();
  return (
    <Container>
      {products.map((product) => {
        return (
          <Card>
            <ContainerImg>
              <img src={product.image} alt="Link da Imagem caiu..."></img>
            </ContainerImg>
            <ContainerInfos>
              <h3>{product.name}</h3>
              <p className="description">{product.category}</p>
              <p className="price">R$ {product.price.toFixed(2)}</p>
              <Button onClick={() => addProduct(product)}>Adicionar</Button>
            </ContainerInfos>
          </Card>
        );
      })}
    </Container>
  );
};

export default Products;
