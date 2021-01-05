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
  Star,
  StarBorder,
} from "@material-ui/icons";
import FullScreenView from "./FullScreenView";

const SearchResultsCarousel = ({
  searchResults,
  nominationList,
  setNominationList,
}: {
  searchResults: Movie[];
  nominationList: Set<Movie>;
  setNominationList: (
    nominationList: Set<Movie> | ((prevState: Set<Movie>) => Set<Movie>)
  ) => void;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const classes = useSearchResultsCarouselStyle({ isFullscreen: isFullscreen });

  enum SelectDirection {
    Left,
    Right,
  }

  const handleTraverseImages = (direction: SelectDirection) => {
    switch (direction) {
      case SelectDirection.Right:
        setSelectedIndex((prev) =>
          prev < searchResults.length - 1 ? prev + 1 : prev
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
    searchResults.length > 0 ? (
      <>
        <IconButton
          size="small"
          disabled={selectedIndex === 0}
          className={classes.overlayLeft}
          onClick={() => handleTraverseImages(SelectDirection.Left)}
        >
          <ArrowBackIos className={classes.backArrow} />
        </IconButton>
        <img
          src={
            searchResults[selectedIndex].poster &&
            searchResults[selectedIndex].poster !== "N/A"
              ? searchResults[selectedIndex].poster
              : "/images/image_placeholder.jpg"
          }
          className={isFullscreen ? classes.mediaFullscreen : classes.media}
          alt=""
        />
        <Box className={classes.filmInfo}>
          <Typography
            className={classes.filmText}
            style={{ marginBottom: "5%" }}
          >
            Title: {searchResults[selectedIndex].title}
          </Typography>
          <Typography className={classes.filmText}>
            Year: {searchResults[selectedIndex].year}
          </Typography>
        </Box>
        <IconButton
          size="small"
          disabled={selectedIndex === searchResults.length - 1}
          className={classes.overlayRight}
          onClick={() => handleTraverseImages(SelectDirection.Right)}
        >
          <ArrowForwardIos />
        </IconButton>
        <div
          className={
            isFullscreen ? classes.galleryRootFullscreen : classes.galleryRoot
          }
        >
          <GridList
            spacing={2}
            className={
              isFullscreen ? classes.gridListFullScreen : classes.gridList
            }
            cols={
              isFullscreen ? window.innerWidth / (0.15 * window.innerHeight) : 5
            }
            cellHeight={isFullscreen ? 0.15 * window.innerHeight : 200}
          >
            {searchResults.map((movie: Movie, index: number) => (
              <GridListTile
                key={movie.id}
                onClick={() => setSelectedIndex(index)}
                className={
                  index === selectedIndex
                    ? classes.thumbnailSelected
                    : classes.thumbnail
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
                  titlePosition="top"
                  actionIcon={
                    <IconButton
                      aria-label={`star ${movie.title}`}
                      className={classes.icon}
                      disabled={nominationList.size === 5}
                      onClick={() => {
                        if (nominationList.size <= 5) {
                          if (isNominated(nominationList, movie.id)) {
                            setNominationList((prevState) => {
                              let addedMovies = new Set<Movie>();
                              prevState.forEach((movie: Movie) => {
                                addedMovies.add(movie);
                              });
                              addedMovies.delete(movie);
                              return addedMovies;
                            });
                          } else {
                            setNominationList((prevState) => {
                              let addedMovies = new Set<Movie>();
                              prevState.forEach((movie: Movie) => {
                                addedMovies.add(movie);
                              });
                              addedMovies.add(movie);
                              return addedMovies;
                            });
                          }
                        }
                        console.log(nominationList);
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

  return searchResults.length > 0 ? (
    <>
      <Box className={classes.card}>
        {searchResultsView}
        <IconButton
          size="small"
          className={classes.overlayFullscreen}
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
