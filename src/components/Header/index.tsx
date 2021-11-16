import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { ConatinerIcons, Container, ContainerTitle } from "./styles";

const Header = () => {
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
        <p>
          <FaShoppingCart />
        </p>
        <p>
          <FiLogOut />
        </p>
      </ConatinerIcons>
    </Container>
  );
};

export default Header;
