import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
  media: {
    height: 250,
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));

export default Styles;
