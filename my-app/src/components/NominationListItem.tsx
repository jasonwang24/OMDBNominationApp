import {
  Box,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { MovieCreation } from "@material-ui/icons";
import React from "react";
import { Movie } from "../services/types";
import useNominationListItemStyle from "../assets/styles/components/nominationListItemStyle";

const NominationListItem = ({
  nominatedMovie,
  setNominationList,
}: {
  nominatedMovie: Movie;
  setNominationList: (
    nominationList: Set<Movie> | ((prevState: Set<Movie>) => Set<Movie>)
  ) => void;
}) => {
  const classes = useNominationListItemStyle();

  return (
    <ListItem
      key={nominatedMovie.id}
      style={{ background: "#F0F0F0", marginBottom: "1%" }}
    >
      <ListItemAvatar>
        <MovieCreation />
      </ListItemAvatar>
      <img
        src={nominatedMovie.poster}
        style={{ height: "15vh", marginRight: "5%" }}
        alt=""
      />
      <ListItemText
        primary={nominatedMovie.title}
        secondary={
          <Box
            style={{
              width: "100%",
            }}
          >
            <Typography component={"span"} className={classes.secondaryText}>
              {"Year: " + nominatedMovie.year}
            </Typography>
            <br />
            <Typography component={"span"} className={classes.secondaryText}>
              {"Genre: " + nominatedMovie.genre}
            </Typography>
            <br />
            <Typography component={"span"} className={classes.secondaryText}>
              {"IMDb Rating: " + nominatedMovie.imdbRating}
            </Typography>
            <br />
            <Typography component={"span"} className={classes.secondaryText}>
              {"Director: " + nominatedMovie.director}
            </Typography>
          </Box>
        }
      />
      <Button
        style={{ height: "100%" }}
        onClick={() => {
          setNominationList((prevState) => {
            const oldNominationList = Array.from(prevState);
            let newNominationList = new Set<Movie>();
            for (let i = 0; i < oldNominationList.length; i++) {
              if (oldNominationList[i].id !== nominatedMovie.id) {
                newNominationList.add(oldNominationList[i]);
              }
            }
            return newNominationList;
          });
        }}
      >
        Remove
      </Button>
    </ListItem>
  );
};

export default React.memo(NominationListItem);
