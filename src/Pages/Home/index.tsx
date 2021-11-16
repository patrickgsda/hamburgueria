import React from "react";
import Header from "../../components/Header";
import Products from "../../components/Products";
import { ContainerHome } from "./styles";

const Home = () => {
  return (
    <>
      <Header />
      <ContainerHome>
        <Products />
      </ContainerHome>
    </>
  );
};

export default Home;
