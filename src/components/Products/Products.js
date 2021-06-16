import React, { Fragment } from "react";

import Product from "./Product/Product";

import { Grid } from "@material-ui/core";

const Products = (props) => {
  const productList = props.products.map((product) => (
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
      <Product onAddToCart={props.onAddToCart} product={product} />
    </Grid>
  ));

  return (
    <Fragment>
      <Grid container spacing={4} justify="center">
        {productList}
      </Grid>
    </Fragment>
  );
};

export default Products;
