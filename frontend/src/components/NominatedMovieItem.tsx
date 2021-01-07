import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Slide,
  Typography,
} from "@material-ui/core";
import { Looks3, Looks4, Looks5, LooksOne, LooksTwo } from "@material-ui/icons";
import React from "react";
import useNominatedMovieItemStyle from "../assets/styles/components/nominatedMovieItemStyle";

const NominatedMovieItem = ({
  nominatedMovie,
  index,
}: {
  nominatedMovie: any;
  index: number;
}) => {
  const classes = useNominatedMovieItemStyle();

  const getColor = (index: number) => {
    switch (index) {
      case 0:
        return "#B9F2FF";
      case 1:
        return "#E5E4E2";
      case 2:
        return "#FFD700";
      case 3:
        return "#C0C0C0";
      case 4:
        return "#CD7F32";
    }
  };

  const Icon = ({ index }: { index: number }) => {
    switch (index) {
      case 0:
        return <LooksOne style={{ fontSize: "40px" }} />;
      case 1:
        return <LooksTwo style={{ fontSize: "40px" }} />;
      case 2:
        return <Looks3 style={{ fontSize: "40px" }} />;
      case 3:
        return <Looks4 style={{ fontSize: "40px" }} />;
      default:
        return <Looks5 style={{ fontSize: "40px" }} />;
    }
  };

  return (
    <Slide in direction="down" timeout={800}>
      <ListItem
        key={nominatedMovie.id}
        style={{
          background: getColor(index),
          marginBottom: "1%",
          width: "100vh",
        }}
      >
        <ListItemAvatar>
          <Icon index={index} />
        </ListItemAvatar>
        <img src={nominatedMovie.poster} className={classes.image} alt="" />
        <ListItemText
          primary={nominatedMovie.title}
          secondary={
            <Box
              style={{
                width: "100%",
                lineHeight: "6px",
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
                {"IMDb Rating: " + nominatedMovie.rating}
              </Typography>
              <br />
              <Typography component={"span"} className={classes.secondaryText}>
                {"Director: " + nominatedMovie.director}
              </Typography>
              <br />
              <Typography component={"span"} className={classes.secondaryText}>
                {"Number of Votes: " + nominatedMovie.count}
              </Typography>
            </Box>
          }
        />
      </ListItem>
    </Slide>
  );
};

export default React.memo(NominatedMovieItem);
