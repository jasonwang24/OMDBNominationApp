import { colors } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  common: { black, white },
  primary: {
    contrastText: white,
    dark: colors.cyan[900],
    main: colors.cyan[800],
    light: colors.cyan[600],
  },
  secondary: {
    contrastText: white,
    dark: colors.orange["A700"],
    main: colors.orange["A400"],
    light: colors.orange["A200"],
  },
  text: {
    primary: colors.grey[800],
    secondary: colors.grey[700],
    link: "#000000",
  },
  background: {
    default: "#F4F6F8",
    paper: white,
  },
};
