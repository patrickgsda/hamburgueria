import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { ConatinerIcons, Container, ContainerTitle } from "./styles";
import Card from "../Card";
import { useCart } from "../../Providers/Cart";
import { useAuth } from "../../Providers/Auth";

const Header = () => {
  const { cart } = useCart();
  const { Logout } = useAuth();
  return (
    <Container>
      <ContainerTitle>
        <h1>Burguer</h1>
        <h3>Kenzie</h3>
      </ContainerTitle>
      <ConatinerIcons>
        <div className="cart">
          <Card>
            <span>{cart.length}</span>
          </Card>
        </div>
        <p>
          <FiLogOut onClick={() => Logout()} />
        </p>
      </ConatinerIcons>
    </Container>
  );
};

export default Header;
