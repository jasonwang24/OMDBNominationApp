import { createStyles, makeStyles } from "@material-ui/core";
import theme from "../../theme";

const SearchBarStyle = makeStyles(() =>
  createStyles({
    searchPaper: {
      display: "flex",
      overflow: "hidden",
      flexDirection: "column",
      fontSize: "large",
      boxShadow: "1",
      elevation: 5,
      backgroundColor: theme.palette.background.paper,
      marginLeft: "3%",
      marginRight: "3%",
      marginTop: "1%",
    },

    textField: {
      margin: 15,
      width: "100%",
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.text.primary,
      },
      "& label": {
        color: theme.palette.text.primary,
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.text.primary,
      },
      "& label.Mui-focused": {
        color: theme.palette.text.primary,
      },
    },
    searchButton: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "middle",
    },
  })
);

export default SearchBarStyle;
