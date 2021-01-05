import { createStyles, makeStyles } from "@material-ui/core";

const SearchBarStyle = makeStyles(() =>
  createStyles({
    searchPaper: {
      display: "flex",
      overflow: "hidden",
      flexDirection: "column",
      fontSize: "large",
      boxShadow: "1",
      elevation: 5,
      backgroundColor: "white",
      marginLeft: "3%",
      marginRight: "3%",
      marginTop: "1%",
    },
    textField: {
      margin: 15,
      width: "100%",
    },
  })
);

export default SearchBarStyle;
