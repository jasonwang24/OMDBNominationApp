import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
} from "@material-ui/core";
import { Movie, Search } from "@material-ui/icons";
import React, { useCallback, useEffect, useState } from "react";
import useSearchBarStyle from "../assets/styles/components/searchBarStyle";
import { searchServer } from "../services";

const SearchBar = () => {
  const [searchString, setSearchString] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const classes = useSearchBarStyle();

  const handleSearch = useCallback(async () => {
    try {
      let listOfWords = searchString.split(" ");
      for (let i = 0; i < listOfWords.length; i++) {
        if (listOfWords[i] === `(${searchYear})`) {
          listOfWords.splice(i, 1);
        } else {
          listOfWords[i] = listOfWords[i]
            .replace(`(${searchYear})`, "")
            .replace(/\n/g, "");
        }
      }
      await searchServer.movieSearchService.getMovies(
        searchYear !== ""
          ? {
              s: listOfWords.join(" "),
              y: searchYear,
            }
          : { s: searchString }
      );
    } catch (error) {
    } finally {
      setSearchString("");
      setSearchYear("");
    }
  }, [searchString, searchYear]);

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        setSearchString((prevState) => prevState.slice(0, -1));
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
          className={classes.textField}
          multiline
          id="search-bar"
          label="Search Movie Title (e.g. The Matrix (1999))"
          value={searchString}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Movie />
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
