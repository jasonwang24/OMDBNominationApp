import { Box, Grid } from "@material-ui/core";
import React, { useState } from "react";
import NominationList from "../components/NominationList";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { Movie } from "../services/types";

const SearchPage = () => {
  const [searchResultDisplay, setSearchResultDisplay] = useState("");
  const [searchedMoviesInfo, setSearchedMoviesInfo] = useState<Movie[]>([]);
  const [nominationList, setNominationList] = useState<Set<Movie>>(new Set());
  const [noResult, setNoResults] = useState(false);

  return (
    <Box
      style={{
        backgroundColor: "#f4e3c6ff",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div style={{ paddingLeft: "3%", paddingTop: "1%" }}>
            <img
              src={"/images/ShoppiesLogo.png"}
              alt=""
              width="20%"
              height="20%"
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <SearchBar
            setSearchResultDisplay={setSearchResultDisplay}
            searchedMoviesInfo={searchedMoviesInfo}
            setSearchedMoviesInfo={setSearchedMoviesInfo}
            setNoResults={setNoResults}
          />
        </Grid>
        <Grid item xs={6}>
          <SearchResults
            searchResultDisplay={searchResultDisplay}
            searchedMoviesInfo={searchedMoviesInfo}
            nominationList={nominationList}
            setNominationList={setNominationList}
            noResult={noResult}
          />
        </Grid>
        <Grid item xs={6}>
          <NominationList nominationList={nominationList} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchPage;
