import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { ConatinerIcons, Container, ContainerTitle } from "./styles";
import Card from "../Card";
import { useCart } from "../../Providers/Cart";

const Header = () => {
  const { cart } = useCart();
  return (
    <Container>
      <ContainerTitle>
        <h1>Burguer</h1>
        <h3>Kenzie</h3>
      </ContainerTitle>
      <ConatinerIcons>
        <p>
          <FaSearch />
        </p>
        <div className="cart">
          <Card>
            <span>{cart.length}</span>
          </Card>
        </div>
        <p>
          <FiLogOut />
        </p>
      </ConatinerIcons>
    </Container>
  );
};

export default Header;
