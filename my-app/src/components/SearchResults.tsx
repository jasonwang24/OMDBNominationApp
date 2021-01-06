import { Box, FormControl, Paper, Typography } from "@material-ui/core";
import React from "react";
import useSearchResultsStyle from "../assets/styles/components/searchResultsStyle";
import theme from "../assets/theme";
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
          <Typography
            style={{
              margin: "3%",
              fontSize: theme.typography.h1.fontSize,
              display: "inline-block",
              marginRight: 5,
              marginBottom: "1%",
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
          {searchedMoviesInfo && !noResult ? (
            <SearchResultsCarousel
              searchedMoviesInfo={searchedMoviesInfo}
              nominationList={nominationList}
              setNominationList={setNominationList}
            />
          ) : (
            <Typography
              style={{
                margin: "2%",
                fontSize: theme.typography.h2.fontSize,
                fontStyle: "italic",
              }}
            >
              Your search did not match any movies in the database...
            </Typography>
          )}
        </FormControl>
      </Box>
    </Paper>
  );
};

export default SearchResults;
