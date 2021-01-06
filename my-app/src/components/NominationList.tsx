import { Box, List, Paper, Typography } from "@material-ui/core";
import React, { useMemo } from "react";
import useNominationListStyle from "../assets/styles/components/nominationListStyle";
import { Movie } from "../services/types";
import NominationListItem from "./NominationListItem";

const NominationList = ({ nominationList }: { nominationList: Set<Movie> }) => {
  const classes = useNominationListStyle();
  const nominatedMovies = useMemo(
    () =>
      Array.from(nominationList).map((movie: Movie) => (
        <NominationListItem nominatedMovie={movie} />
      )),
    [nominationList]
  );
  return (
    <Paper
      className={classes.searchPaper}
      style={{
        height: "65vh",
        overflow: "auto",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <Box className={classes.boxStyle}>
          <Typography className={classes.title}>Nomination List</Typography>
        </Box>
        <List>{nominatedMovies}</List>
      </Box>
    </Paper>
  );
};

export default NominationList;
