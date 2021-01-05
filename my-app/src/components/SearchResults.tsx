import { Box, Paper } from "@material-ui/core";
import React from "react";
import useSearchResultsStyle from "../assets/styles/components/searchResultsStyle";

const SearchResults = () => {
  const classes = useSearchResultsStyle();
  return (
    <Paper className={classes.searchPaper}>
      <Box style={{ display: "flex", justifyContent: "space-around" }}></Box>
    </Paper>
  );
};

export default SearchResults;
