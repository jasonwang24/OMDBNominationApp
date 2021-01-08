import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  common: { black, white },
  primary: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[800],
    light: colors.red[600],
  },
  secondary:{
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[800],
    light: colors.green[600],
  },
  text: {
    primary:"#015249",
    secondary: colors.grey[700]
  },
  background: {
    default: white,
    paper: "#f2f9f7",
  },
};
