import React, { Fragment } from "react";
import useStyles from "./Styles";
import img from "../../assets/webtronix.png";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuIcon,
  CardMedia,
  CssBaseline,
  Badge,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Navbar = (props) => {
  const styles = useStyles();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar color="inherit" className={styles.appBar} position="static">
        <Toolbar>
          {/* <CardMedia height="10" component="img" image={img} /> */}
          <Typography className={styles.title} variant="h6">
            Webtronix
          </Typography>
          <IconButton color="primary" aria-label="cart">
            <Badge badgeContent={props.totalNoOfItems} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
