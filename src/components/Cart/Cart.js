import React, { Fragment } from "react";
import {
  Container,
  Typography,
  Button,
  Grid,
  Toolbar,
} from "@material-ui/core";
import CartItem from "./CartItem/CartItem";
import useStyle from "./Styles";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const styles = useStyle();

  const emptyCartData = () => props.emptyCart();

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in the cart,
      <Link className={styles.link} to="/">
        Start adding right away!
      </Link>
    </Typography>
  );

  const FilledCart = () => {
    return (
      <Fragment>
        <Grid container spacing={3}>
          {props.cart.line_items.map((item) => {
            return (
              <Grid item xs={12} sm={4} key={item.id}>
                <CartItem
                  updateCartQuantity={props.updateCartQuantity}
                  removeCartQuantity={props.removeCartQuantity}
                  item={item}
                />
              </Grid>
            );
          })}
        </Grid>
        <div className={styles.cardDetails}>
          <Typography variant="h4">
            Subtotal: {props.cart.subtotal.formatted_with_symbol}
          </Typography>
          <div>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button
                  className={styles.checkoutButton}
                  variant="contained"
                  color="primary"
                >
                  CheckOut
                </Button>
              </Grid>
              <Grid item>
                <Button
                  className={styles.emptyButton}
                  variant="contained"
                  color="secondary"
                  onClick={emptyCartData}
                >
                  Empty Cart
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </Fragment>
    );
  };

  if (!props.cart.line_items) {
    return "loading...";
  }

  return (
    <Fragment>
      <Container>
        <Toolbar>
          <Typography gutterBottom className={styles.title} variant="h3">
            Your Shopping Cart
          </Typography>
        </Toolbar>
        {!props.cart.line_items.length ? <EmptyCart /> : <FilledCart />}
      </Container>
    </Fragment>
  );
};

export default Cart;
