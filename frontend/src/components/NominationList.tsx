import { Box, Button, List, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useMemo } from "react";
import useNominationListStyle from "../assets/styles/components/nominationListStyle";
import { Movie } from "../services/types";
import NominationListItem from "./NominationListItem";

const NominationList = ({
  nominationList,
  setNominationList,
  setSubmissionDialogOpen,
  setSnackbarMessage,
}: {
  nominationList: Set<Movie>;
  setNominationList: (
    nominationList: Set<Movie> | ((prevState: Set<Movie>) => Set<Movie>)
  ) => void;
  setSubmissionDialogOpen: (
    submissionDialogOpen: boolean | ((prevState: boolean) => boolean)
  ) => void;
  setSnackbarMessage: (
    snackbarMessage: string | ((prevState: string) => string)
  ) => void;
}) => {
  const classes = useNominationListStyle();

  useEffect(() => {
    if (nominationList.size === 5) {
      setSnackbarMessage("Nomination list is full");
    }
  }, [nominationList, setSnackbarMessage]);

  const nominatedMovies = useMemo(
    () =>
      Array.from(nominationList).map((movie: Movie) => (
        <NominationListItem
          nominatedMovie={movie}
          setNominationList={setNominationList}
        />
      )),
    [nominationList, setNominationList]
  );
  return (
    <Paper className={classes.searchPaper}>
      <Box className={classes.nominationBox}>
        <Box style={{ position: "relative", whiteSpace: "nowrap" }}>
          <Button
            className={classes.submitButton}
            onClick={() => setSubmissionDialogOpen((prevState) => !prevState)}
            style={{ position: "relative" }}
            disabled={nominationList.size === 0}
          >
            Submit Nominations
          </Button>
        </Box>

        <Box className={classes.boxStyle}>
          <Typography className={classes.title}>Nomination List</Typography>
        </Box>
        <Box style={{ position: "relative", whiteSpace: "nowrap" }}>
          <Typography className={classes.fullText}>
            {nominationList.size === 5
              ? "*Nomination List Full"
              : "Select up to 5 movies!"}
          </Typography>
        </Box>
      </Box>
      {nominatedMovies.length === 0 ? (
        <Typography className={classes.noneSelectedText}>
          No movies nominated...
        </Typography>
      ) : (
        <List>{nominatedMovies}</List>
      )}
    </Paper>
  );
};

export default NominationList;
