import { Box, Button, Dialog, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NominationList from "../components/NominationList";
import NominationSubmission from "../components/NominationSubmission";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";
import { Movie } from "../services/types";
import SnackbarMessage from "../components/Snackbar";
import NominationRankings from "../components/NominationRankings";

const SearchPage = () => {
  const [searchResultDisplay, setSearchResultDisplay] = useState("");
  const [searchedMoviesInfo, setSearchedMoviesInfo] = useState<Movie[]>([]);
  const [nominationList, setNominationList] = useState<Set<Movie>>(new Set());
  const [noResult, setNoResults] = useState(false);
  const [submissionDialogOpen, setSubmissionDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [nominationRankingsOpen, setNominationRankingsOpen] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSubmissionDialogOpen(false);
        setNominationRankingsOpen(false);
      }
    };
    window.addEventListener("keyup", handleKeyPress);
    return () => window.removeEventListener("keyup", handleKeyPress);
  }, [submissionDialogOpen, setSubmissionDialogOpen]);

  return (
    <>
      <SnackbarMessage
        message={snackbarMessage}
        onClose={() => setSnackbarMessage("")}
      />
      <Box
        style={{
          backgroundColor: "#f4e3c6ff",
          height: "100vh",
          overflowX: "hidden",
        }}
      >
        <Dialog
          open={submissionDialogOpen}
          onClose={() => setSubmissionDialogOpen(false)}
        >
          <NominationSubmission
            nominationList={nominationList}
            setSubmissionDialogOpen={setSubmissionDialogOpen}
            setSnackbarMessage={setSnackbarMessage}
          />
        </Dialog>
        <Dialog
          open={nominationRankingsOpen}
          maxWidth="xl"
          onClose={() => setNominationRankingsOpen(false)}
        >
          <NominationRankings />
        </Dialog>
        <Grid container spacing={2}>
          <Grid item xs={5} md={9}>
            <div style={{ paddingLeft: "3%", paddingTop: "1%" }}>
              <img
                src={"/images/ShoppiesLogo.png"}
                alt=""
                height="auto"
                style={{ maxWidth: "100%", width: "20%" }}
              />
            </div>
          </Grid>
          <Grid item xs={7} md={2}>
            <Button
              style={{ marginTop: "10%", right: "-15vh", whiteSpace: "nowrap" }}
              onClick={() => setNominationRankingsOpen(true)}
            >
              Nomination Rankings
            </Button>
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
            <NominationList
              nominationList={nominationList}
              setNominationList={setNominationList}
              setSubmissionDialogOpen={setSubmissionDialogOpen}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SearchPage;
