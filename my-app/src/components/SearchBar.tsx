import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
} from "@material-ui/core";
import { MovieCreation, Search } from "@material-ui/icons";
import React, { useCallback, useEffect, useState } from "react";
import useSearchBarStyle from "../assets/styles/components/searchBarStyle";
import { searchServer } from "../services";
import { deserializeMovieIds } from "../services/serializers";
import { Movie } from "../services/types";

const SearchBar = ({
  setSearchResultDisplay,
  searchedMoviesInfo,
  setSearchedMoviesInfo,
  setNoResults,
}: {
  setSearchResultDisplay: (
    searchResultDisplay: string | ((prevState: string) => string)
  ) => void;
  searchedMoviesInfo: Movie[];
  setSearchedMoviesInfo: (
    searchResults: Movie[] | ((prevState: Movie[]) => Movie[])
  ) => void;
  setNoResults: (
    noResults: boolean | ((prevState: boolean) => boolean)
  ) => void;
}) => {
  const [searchString, setSearchString] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const classes = useSearchBarStyle();

  const handleSearch = useCallback(async () => {
    try {
      setSearchedMoviesInfo([]);
      let listOfWords = searchString.split(" ");
      for (let i = 0; i < listOfWords.length; i++) {
        if (listOfWords[i] === `(${searchYear})`) {
          listOfWords.splice(i, 1);
        } else {
          listOfWords[i] = listOfWords[i]
            .replace(`(${searchYear})`, "")
            .replace(/(\r\n|\n|\r)/gm, "");
        }
      }
      if (listOfWords[listOfWords.length - 1] === "") {
        listOfWords.pop();
      }

      let newSearchResults = await searchServer.movieSearchService.searchMovies(
        searchYear !== ""
          ? {
              s: listOfWords.join(" "),
              y: searchYear,
            }
          : { s: searchString }
      );
      if (newSearchResults.Response === "False") {
        setNoResults(true);
      } else {
        newSearchResults = deserializeMovieIds(newSearchResults);
        setNoResults(false);
      }
      await Promise.all(
        newSearchResults.map(async (id: string) => {
          const movieInfo = await searchServer.movieSearchService.getMovieInfo({
            i: id,
          });
          setSearchedMoviesInfo((prevState) => [...prevState, movieInfo]);
        })
      );
    } catch (error) {
    } finally {
      setSearchResultDisplay(searchString);
      setSearchString("");
      setSearchYear("");
    }
  }, [
    searchString,
    searchYear,
    setSearchResultDisplay,
    setSearchedMoviesInfo,
    setNoResults,
  ]);

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };
    window.addEventListener("keyup", handleEnter);
    return () => window.removeEventListener("keyup", handleEnter);
  }, [handleSearch]);

  useEffect(() => {
    const regExp = /\(([^)]+)\)/;
    const matches = searchString.match(regExp);
    setSearchYear(matches ? matches[1] : "");
  }, [searchString, searchYear]);

  return (
    <Paper className={classes.searchPaper}>
      <Box style={{ display: "flex", justifyContent: "space-around" }}>
        <TextField
          autoFocus
          autoComplete="off"
          className={classes.textField}
          id="search-bar"
          label="Search Movie Title (e.g. The Matrix (1999))"
          value={searchString}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MovieCreation />
              </InputAdornment>
            ),
          }}
          onChange={(e) => {
            setSearchString(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            handleSearch();
          }}
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "middle",
          }}
        >
          <Search />
        </Button>
      </Box>
    </Paper>
  );
};

export default SearchBar;
