import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  navbar: {
    background: "#203040",
    "& a": {
      color: "#fff",
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.3rem",
  },
  grow: {
    flexGrow: "1",
  },
  main: {
    minHeight: "80vh",
  },
  footer: {
    textAlign: "center",
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form:{
    maxWidth:800,
    margin: '0 auto'
  },
  navbarButton:{
    color:'#ffffff',
    textTransform: 'initial'
  },
  transparentBackgroud:{
    background: 'transparent'
  },
  error:{
    color:'f04040'
  }
});
export default useStyles;