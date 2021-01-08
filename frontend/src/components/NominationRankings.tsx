import {
  Box,
  IconButton,
  List,
  Paper,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { Info } from "@material-ui/icons";
import React, { useMemo } from "react";
import useSWR from "swr";
import useNominationRankingsStyle from "../assets/styles/components/nominationRankingsStyle";
import { movieServer } from "../services";
import { SWRKeys } from "../services/constants";
import LoadingAnimation from "./LoadingAnimation";
import NominatedMovieItem from "./NominatedMovieItem";

const NominationRankings = () => {
  const classes = useNominationRankingsStyle();

  const {
    data: rankings,
    isValidating: isLoading,
    error,
  } = useSWR(SWRKeys.RANKINGS, () =>
    movieServer.nominationService.getRankings()
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
    <Paper className={classes.paper}>
      <Box className={classes.boxStyle}>
        <Typography className={classes.title}>
          Top 5 Nominated Movies
        </Typography>
      </Box>
      <Tooltip title="Top 5 most voted movies" placement="left">
        <IconButton size="small" className={classes.infoButton}>
          <Info />
        </IconButton>
      </Tooltip>

      {isLoading ? (
        <LoadingAnimation />
      ) : error ? (
        <Typography>Error loading list...</Typography>
      ) : (
        <List>{topMovies}</List>
      )}
    </Paper>
  );
};

export default NominationRankings;
