import { Box, List, Typography } from "@material-ui/core";
import React, { useMemo } from "react";
import useSWR from "swr";
import useNominationRankingsStyle from "../assets/styles/components/nominationRankingsStyle";
import { movieServer } from "../services";
import { SWRKeys } from "../services/constants";
import LoadingAnimation from "./LoadingAnimation";
import NominatedMovieItem from "./NominatedMovieItem";

const NominationRankings = () => {
  const classes = useNominationRankingsStyle();

  const { data: rankings, isValidating: isLoading, error } = useSWR(
    [SWRKeys.RANKINGS],
    () => movieServer.nominationService.getRankings()
  );

  const topMovies = useMemo(
    () =>
      rankings &&
      rankings.map((nominatedMovie: any, index: number) => (
        <NominatedMovieItem nominatedMovie={nominatedMovie} index={index} />
      )),
    [rankings]
  );

  return (
    <Box m={1} width={750} height={750} className={classes.dialogBox}>
      <Box
        style={{
          position: "absolute",
        }}
      >
        <Box className={classes.boxStyle}>
          <Typography className={classes.title}>
            Top 5 Nominated Movies
          </Typography>
        </Box>
        {isLoading ? (
          <LoadingAnimation />
        ) : error ? (
          <Typography>Error loading list...</Typography>
        ) : (
          <List>{topMovies}</List>
        )}
      </Box>
    </Box>
  );
};

export default NominationRankings;
