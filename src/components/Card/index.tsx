import { IconButton, Modal } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { FaShoppingCart } from "react-icons/fa";
import React, { ReactNode } from "react";
import { useCart } from "../../Providers/Cart";
import Button from "../Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { ContainerImg } from "./styles";
// import { Container } from './styles';

interface CardProps {
  children: ReactNode;
}

const Card = ({ children }: CardProps) => {
  const { cart, deleteProduct, removeAll } = useCart();
  const totalProducts = cart.reduce(
    (total, product) => total + product.price,
    0
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div onClick={handleOpen}>
        <FaShoppingCart />
        {children}
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          {cart &&
            cart.map((product) => {
              return (
                <>
                  <ContainerImg>
                    <img src={product.image} alt="" />
                    <p>
                      {product.name}
                      <br />
                      R$ {product.price.toFixed(2)}
                    </p>
                    <IconButton
                      onClick={() => deleteProduct(product)}
                      aria-label="delete"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ContainerImg>
                </>
              );
            })}
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              color: "var(--color-primary)",
            }}
          >
            <Button onClick={() => removeAll()}>Remover Todos</Button>
            <p>R$ {totalProducts.toFixed(2)}</p>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Card;
