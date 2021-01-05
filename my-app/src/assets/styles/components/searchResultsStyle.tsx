import { createStyles, makeStyles } from "@material-ui/core";

const SearchResultsStyle = makeStyles(() =>
  createStyles({
    searchPaper: {
      display: "flex",
      overflow: "hidden",
      flexDirection: "column",
      fontSize: "large",
      boxShadow: "1",
      elevation: 5,
      backgroundColor: "white",
      marginLeft: "6%",
      marginRight: "2%",
      marginTop: "1%",
    },
  })
);

export default SearchResultsStyle;
