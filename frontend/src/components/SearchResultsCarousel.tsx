import {
  Box,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Movie } from "../services/types";
import useSearchResultsCarouselStyle from "../assets/styles/components/searchResultsCarouselStyle";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Fullscreen,
  Info,
  Star,
  StarBorder,
} from "@material-ui/icons";
import FullScreenView from "./FullScreenView";

const SearchResultsCarousel = ({
  searchedMoviesInfo,
  nominationList,
  setNominationList,
}: {
  searchedMoviesInfo: Movie[];
  nominationList: Set<Movie>;
  setNominationList: (
    nominationList: Set<Movie> | ((prevState: Set<Movie>) => Set<Movie>)
  ) => void;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  const classes = useSearchResultsCarouselStyle({ isFullscreen: isFullscreen });

  enum SelectDirection {
    Left,
    Right,
  }

  const handleTraverseImages = (direction: SelectDirection) => {
    switch (direction) {
      case SelectDirection.Right:
        setSelectedIndex((prev) =>
          prev < searchedMoviesInfo.length - 1 ? prev + 1 : prev
        );
        break;
      case SelectDirection.Left:
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
        break;
    }
  };

  const isNominated = (nominationList: Set<Movie>, movieId: string) => {
    let isNominated = false;

    nominationList.forEach((nominatedMovie) => {
      if (nominatedMovie.id === movieId) {
        isNominated = true;
      }
    });
    return isNominated;
  };

  const searchResultsView =
    searchedMoviesInfo.length > 0 ? (
      <>
        <IconButton
          size="small"
          disabled={selectedIndex === 0}
          className={classes.leftClick}
          onClick={() => handleTraverseImages(SelectDirection.Left)}
        >
          <ArrowBackIos className={classes.backArrow} />
        </IconButton>
        <img
          src={
            searchedMoviesInfo[selectedIndex] &&
            searchedMoviesInfo[selectedIndex].poster !== "N/A"
              ? searchedMoviesInfo[selectedIndex].poster
              : "/images/image_placeholder.jpg"
          }
          className={
            isFullscreen
              ? classes.largeImageViewFullScreen
              : classes.largeImageView
          }
          alt=""
        />

        {searchedMoviesInfo[selectedIndex] && (isFullscreen || infoOpen) && (
          <Box className={classes.filmInfo}>
            <Typography className={classes.filmText}>
              Title: {searchedMoviesInfo[selectedIndex].title}
            </Typography>
            <Typography className={classes.filmText}>
              Genre: {searchedMoviesInfo[selectedIndex].genre}
            </Typography>
            <Typography className={classes.filmText}>
              Year: {searchedMoviesInfo[selectedIndex].year}
            </Typography>
            <Typography className={classes.filmText}>
              Director: {searchedMoviesInfo[selectedIndex].director}
            </Typography>
            <Typography className={classes.filmText}>
              IMDb Rating: {searchedMoviesInfo[selectedIndex].imdbRating}
            </Typography>
          </Box>
        )}
        {searchedMoviesInfo[selectedIndex] && !isFullscreen && !infoOpen && (
          <Box className={classes.filmInfo}>
            <Typography className={classes.filmText}>
              Title: {searchedMoviesInfo[selectedIndex].title}
            </Typography>
          </Box>
        )}
        {searchedMoviesInfo[selectedIndex] && isFullscreen && (
          <Box className={classes.filmPlot}>
            <Typography className={classes.filmText}>
              Plot: {searchedMoviesInfo[selectedIndex].plot}
            </Typography>
          </Box>
        )}
        <IconButton
          size="small"
          disabled={selectedIndex === searchedMoviesInfo.length - 1}
          className={classes.rightClick}
          onClick={() => handleTraverseImages(SelectDirection.Right)}
        >
          <ArrowForwardIos />
        </IconButton>
        <div
          className={isFullscreen ? classes.imagesFullScreen : classes.images}
        >
          <GridList
            spacing={2}
            className={
              isFullscreen ? classes.gridListFullScreen : classes.gridList
            }
            cols={
              isFullscreen ? window.innerWidth / (0.15 * window.innerHeight) : 6
            }
            cellHeight={isFullscreen ? 0.15 * window.innerHeight : 180}
          >
            {searchedMoviesInfo.map((movie: Movie, index: number) => (
              <GridListTile
                key={movie.id}
                onClick={() => setSelectedIndex(index)}
                className={
                  index === selectedIndex
                    ? classes.previewSelected
                    : classes.preview
                }
              >
                <img
                  src={
                    movie.poster !== "N/A"
                      ? movie.poster
                      : "/images/image_placeholder.jpg"
                  }
                  alt=""
                />
                <GridListTileBar
                  title={movie.title}
                  key={movie.id}
                  titlePosition="top"
                  actionIcon={
                    <IconButton
                      aria-label={`star ${movie.title}`}
                      className={classes.icon}
                      onClick={() => {
                        if (
                          nominationList.size < 5 &&
                          !isNominated(nominationList, movie.id)
                        ) {
                          setNominationList((prevState) => {
                            let addedMovies = new Set<Movie>();
                            prevState.forEach((movie: Movie) => {
                              addedMovies.add(movie);
                            });
                            addedMovies.add(movie);
                            return addedMovies;
                          });
                        } else if (isNominated(nominationList, movie.id)) {
                          setNominationList((prevState) => {
                            const oldNominationList = Array.from(prevState);
                            let newNominationList = new Set<Movie>();
                            for (let i = 0; i < oldNominationList.length; i++) {
                              if (oldNominationList[i].id !== movie.id) {
                                newNominationList.add(oldNominationList[i]);
                              }
                            }
                            return newNominationList;
                          });
                        }
                      }}
                    >
                      {isNominated(nominationList, movie.id) ? (
                        <Star />
                      ) : (
                        <StarBorder />
                      )}
                    </IconButton>
                  }
                  actionPosition="left"
                  className={classes.titleBar}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </>
    ) : null;

  return searchedMoviesInfo.length > 0 ? (
    <>
      <Box className={classes.card}>
        <IconButton
          className={classes.infoButton}
          size="small"
          onMouseEnter={() => setInfoOpen(true)}
          onMouseLeave={() => setInfoOpen(false)}
        >
          <Info />
        </IconButton>

        {searchResultsView}
        <IconButton
          size="small"
          className={classes.fullScreenButton}
          onClick={() => setIsFullscreen(true)}
        >
          <Fullscreen />
        </IconButton>
      </Box>
      <FullScreenView isOpen={isFullscreen} setIsOpen={setIsFullscreen}>
        {searchResultsView}
      </FullScreenView>
    </>
  ) : null;
};

export default SearchResultsCarousel;
