import { Box, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { Movie } from "../services/types";

const SearchPage = () => {
  const [searchResultDisplay, setSearchResultDisplay] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
  const [nominationList, setNominationList] = useState<Set<Movie>>(new Set());

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
            setSearchResults={setSearchResults}
          />
        </Grid>
        <Grid item xs={6}>
          <SearchResults
            searchResultDisplay={searchResultDisplay}
            searchResults={searchResults}
            nominationList={nominationList}
            setNominationList={setNominationList}
          />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
};

export default SearchPage;
