import { createStyles, makeStyles } from "@material-ui/core";
import theme from "../../theme";

const SearchResultsStyle = makeStyles(() =>
  createStyles({
    searchPaper: {
      display: "flex",
      overflowY: "auto",
      flexDirection: "column",
      fontSize: "large",
      boxShadow: "1",
      elevation: 5,
      backgroundColor: "white",
      marginLeft: "6%",
      marginRight: "2%",
      marginTop: "1%",
    },
    formControl: {
      minWidth: 100,
      margin: 15,
    },
    searchResultText: {
      fontStyle: "italic",
      fontSize: theme.typography.h1.fontSize,
      display: "inline-block",
      color: theme.palette.primary.main,
      marginLeft: 0,
    },
    resultText: {
      margin: "3%",
      fontSize: theme.typography.h1.fontSize,
      display: "inline-block",
      marginRight: 5,
      marginBottom: "1%",
    },
    noMatchText: {
      margin: "2%",
      fontSize: theme.typography.h2.fontSize,
      fontStyle: "italic",
    },
  })
);

export default SearchResultsStyle;
