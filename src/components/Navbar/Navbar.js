import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
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
  const location = useLocation();

  return (
    <Fragment>
      <CssBaseline />
      <AppBar color="inherit" className={styles.appBar} position="static">
        <Toolbar>
          <Typography
            component={Link}
            to="/"
            className={styles.title}
            variant="h6"
          >
            Webtronix
          </Typography>
          {location.pathname === "/home" && (
            <IconButton color="primary" aria-label="cart">
              <Badge badgeContent={props.totalNoOfItems} color="secondary">
                <Link to="/cart">
                  <ShoppingCartIcon />
                </Link>
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Navbar;
