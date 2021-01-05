import { Box, Grid } from "@material-ui/core";
import React from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

const SearchPage = () => {
  return (
    <Box
      style={{
        backgroundColor: "#f4e3c6ff",
        height: "100vh",
        overflow: "hidden",
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
          <SearchBar />
        </Grid>
        <Grid item xs={6}>
          <SearchResults />
        </Grid>
        <Grid item xs={6}></Grid>
      </Grid>
    </Box>
  );
};

export default SearchPage;
