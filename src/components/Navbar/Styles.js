import { makeStyles } from "@material-ui/core/styles";

const Styles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
  },
}));

export default Styles;
