import { Box, Button, TextField, Typography } from "@material-ui/core";
import { Close, Save } from "@material-ui/icons";
import React, { useCallback, useState } from "react";
import useNominationSubmissionStyle from "../assets/styles/components/nominationSubmissionStyle";
import { movieServer } from "../services";
import { Email, Movie } from "../services/types";

const NominationSubmission = ({
  nominationList,
  setSubmissionDialogOpen,
  setSnackbarMessage,
}: {
  nominationList: Set<Movie>;
  setSubmissionDialogOpen: (
    submissionDialogOpen: boolean | ((prevState: boolean) => boolean)
  ) => void;
  setSnackbarMessage: (
    snackbarMessage: string | ((prevState: string) => string)
  ) => void;
}) => {
  const classes = useNominationSubmissionStyle();
  const [email, setEmail] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const emailBody = (nominationList: Set<Movie>) => {
    let body = "";
    Array.from(nominationList).forEach((movie) => {
      body += `${movie.title}, ${movie.year}, ${movie.genre}, ${movie.director}, ${movie.imdbRating}<br />`;
    });
    return body;
  };

  const submitNomination = useCallback(async () => {
    try {
      const userExists = await movieServer.nominationService.checkUserExists(
        email
      );
      if (userExists.data === true) {
        setSnackbarMessage(
          "You have already submitted nominations with this email!"
        );
      } else {
        await movieServer.nominationService.storeUser(email);
        await Promise.all(
          Array.from(nominationList).map(async (movie: Movie) => {
            await movieServer.nominationService.submitNomination(movie);
          })
        );
        setSnackbarMessage("Nominations successfully submitted!");
        setSubmissionDialogOpen(false);
        try {
          await movieServer.emailService.sendEmail({
            body: emailBody(nominationList),
            recipient: email,
          } as Email);
        } catch (e) {
          console.log(e);
        }
      }
    } catch {
      setSnackbarMessage("There was an error submitting your nominations.");
    }
  }, [email, nominationList, setSnackbarMessage, setSubmissionDialogOpen]);

  return (
    <Box m={1} width={400} height={180} className={classes.dialogBox}>
      <Typography className={classes.submitText}>Submit Nominations</Typography>
      <TextField
        autoFocus
        className={classes.textField}
        required
        multiline
        id="add-site"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Box className={classes.buttonBox}>
        <Button
          className={classes.button}
          size={"small"}
          variant="contained"
          color="primary"
          startIcon={<Close />}
          onClick={(e) => {
            setSubmissionDialogOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button
          className={classes.button}
          size={"small"}
          variant="contained"
          color="secondary"
          startIcon={<Save />}
          onClick={() => {
            if (validateEmail(email)) {
              submitNomination();
            } else {
              setSnackbarMessage("Please enter a valid email!");
            }
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default NominationSubmission;
