import React, { Fragment } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Badge,
} from "@material-ui/core";
import useStyles from "./Styles";

import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Product = (props) => {
  const styles = useStyles();

  const submitItemHandler = () => {
    props.onAddToCart(props.product.id, 1);
  };

  return (
    <Fragment>
      <Card>
        <CardMedia
          component="img"
          alt=""
          height="150"
          image={props.product.media.source}
          title=""
        />
        <CardContent>
          <Typography variant="h5">{props.product.name}</Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: props.product.description }}
            variant="body2"
            color="textSecondary"
            component="p"
          />
        </CardContent>
        <CardActions className={styles.cardContent}>
          <Typography variant="h5">
            {props.product.price.formatted_with_symbol}
          </Typography>
          <IconButton
            onClick={submitItemHandler}
            color="primary"
            aria-label="add to shopping cart"
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Product;
