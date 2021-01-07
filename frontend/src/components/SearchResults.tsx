import { Box, FormControl, Paper, Typography } from "@material-ui/core";
import React from "react";
import useSearchResultsStyle from "../assets/styles/components/searchResultsStyle";
import { Movie } from "../services/types";
import SearchResultsCarousel from "./SearchResultsCarousel";

const SearchResults = ({
  searchedMoviesInfo,
  searchResultDisplay,
  nominationList,
  setNominationList,
  noResult,
}: {
  searchedMoviesInfo: Movie[] | undefined;
  searchResultDisplay: string;
  nominationList: Set<Movie>;
  setNominationList: (
    nominationList: Set<Movie> | ((prevState: Set<Movie>) => Set<Movie>)
  ) => void;
  noResult: boolean;
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
          <Typography className={classes.resultText}>
            Search results for:
          </Typography>
          <Typography className={classes.searchResultText}>
            {searchResultDisplay}
          </Typography>
        </Box>

        <FormControl
          variant="outlined"
          required
          className={classes.formControl}
        >
          {searchedMoviesInfo && !noResult ? (
            <SearchResultsCarousel
              searchedMoviesInfo={searchedMoviesInfo}
              nominationList={nominationList}
              setNominationList={setNominationList}
            />
          ) : (
            <Typography className={classes.noMatchText}>
              Your search did not match any movies in the database...
            </Typography>
          )}
        </FormControl>
      </Box>
    </Paper>
  );
};

export default SearchResults;
