import React, { Fragment } from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";
import useStyle from "./Styles";

const CartItem = (props) => {
  const style = useStyle();

  const increaseQuantity = () =>
    props.updateCartQuantity(props.item.id, props.item.quantity + 1);

  const reduceQuantity = () =>
    props.updateCartQuantity(props.item.id, props.item.quantity - 1);

  const removeItemQuantity = () => props.removeCartQuantity(props.item.id);

  return (
    <Fragment>
      <Card>
        <CardMedia
          className={style.media}
          image={props.item.media.source}
          title={props.item.name}
        />
        <CardContent className={style.cardDetails}>
          <Typography variant="h5">{props.item.name}</Typography>
          <Typography variant="h5">
            {props.item.line_total.formatted_with_symbol}
          </Typography>
        </CardContent>
        <CardActions className={style.cartActions}>
          <div className={style.buttons}>
            <Button onClick={reduceQuantity} size="small" color="primary">
              -
            </Button>
            <Typography variant="h5">{props.item.quantity}</Typography>
            <Button onClick={increaseQuantity} size="small" color="primary">
              +
            </Button>
          </div>
          <Button
            onClick={removeItemQuantity}
            variant="contained"
            color="secondary"
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default CartItem;
