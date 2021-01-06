import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { MovieCreation } from "@material-ui/icons";
import React from "react";
import { Movie } from "../services/types";
import useNominationListItemStyle from "../assets/styles/components/nominationListItemStyle";

const NominationListItem = ({ nominatedMovie }: { nominatedMovie: Movie }) => {
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
    </ListItem>
  );
};

export default React.memo(NominationListItem);
