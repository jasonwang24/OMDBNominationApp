import { Box, FormControl, Paper, Typography } from "@material-ui/core";
import React from "react";
import useSearchResultsStyle from "../assets/styles/components/searchResultsStyle";
import theme from "../assets/theme";
import { Movie } from "../services/types";
import SearchResultsCarousel from "./SearchResultsCarousel";

const SearchResults = ({
  searchResults,
  searchResultDisplay,
  nominationList,
  setNominationList,
}: {
  searchResults: Movie[] | undefined;
  searchResultDisplay: string;
  nominationList: Set<Movie>;
  setNominationList: (
    nominationList: Set<Movie> | ((prevState: Set<Movie>) => Set<Movie>)
  ) => void;
}) => {
  const classes = useSearchResultsStyle();

  return (
    <Paper
      className={classes.searchPaper}
      style={{
        height: "65vh",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box
          style={{
            float: "left",
          }}
        >
          <Typography
            style={{
              margin: "4%",
              fontSize: theme.typography.h1.fontSize,
              display: "inline-block",
              marginRight: "1%",
              marginBottom: "2%",
            }}
          >
            Search results for:
          </Typography>
          <Typography
            style={{
              fontStyle: "italic",
              fontSize: theme.typography.h1.fontSize,
              display: "inline-block",
              color: theme.palette.primary.main,
              marginLeft: 0,
            }}
          >
            {searchResultDisplay}
          </Typography>
        </Box>

        <FormControl
          variant="outlined"
          required
          className={classes.formControl}
        >
          {searchResults && (
            <SearchResultsCarousel
              searchResults={searchResults}
              nominationList={nominationList}
              setNominationList={setNominationList}
            />
          )}
        </FormControl>
      </Box>
    </Paper>
  );
};

export default SearchResults;
