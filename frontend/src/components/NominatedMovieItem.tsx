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
import theme from "../assets/theme";

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
        return "#c1f5f0";
      case 1:
        return "#cdf7f3";
      case 2:
        return "#d7f9f5";
      case 3:
        return "#dffaf7";
      case 4:
        return "#e5fbf9";
    }
  };

  const Icon = ({ index }: { index: number }) => {
    switch (index) {
      case 0:
        return (
          <LooksOne
            style={{
              fontSize: "40px",
              color: "#B9F2FF",
              backgroundColor: theme.palette.text.primary,
            }}
          />
        );
      case 1:
        return (
          <LooksTwo
            style={{
              fontSize: "40px",
              color: "#E5E4E2",
              backgroundColor: theme.palette.text.primary,
            }}
          />
        );
      case 2:
        return (
          <Looks3
            style={{
              fontSize: "40px",
              color: "#FFD700",
              backgroundColor: theme.palette.text.primary,
            }}
          />
        );
      case 3:
        return (
          <Looks4
            style={{
              fontSize: "40px",
              color: "#C0C0C0",
              backgroundColor: theme.palette.text.primary,
            }}
          />
        );
      default:
        return (
          <Looks5
            style={{
              fontSize: "40px",
              color: "#CD7F32",
              backgroundColor: theme.palette.text.primary,
            }}
          />
        );
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
