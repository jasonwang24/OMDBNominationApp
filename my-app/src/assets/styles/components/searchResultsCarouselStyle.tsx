import { makeStyles, Theme } from "@material-ui/core/styles";

interface CarouselProps {
  isFullscreen: boolean;
}

const useStyles = makeStyles<Theme, CarouselProps>((theme) => ({
  filmText: {
    fontSize: theme.typography.h2.fontSize,
    color: "white",
  },
  filmInfo: {
    position: "absolute",
    bottom: (props) => (props.isFullscreen ? "80%" : "50%"),
    transform: "translate(0%, 50%)",
    left: "10%",
    maxWidth: "20%",
    textAlign: "center",
  },
  overlayLeft: {
    position: "absolute",
    bottom: (props) => (props.isFullscreen ? "50%" : "25%"),
    left: "5px",
    transform: "translate(0%, 50%)",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "&:disabled": {
      backgroundColor: theme.palette.grey[500],
    },
  },
  overlayRight: {
    position: "absolute",
    bottom: (props) => (props.isFullscreen ? "50%" : "25%"),
    transform: "translate(0%, 50%)",
    right: "5px",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
    "&:disabled": {
      backgroundColor: theme.palette.grey[500],
    },
  },
  backArrow: {
    position: "relative",
    bottom: "50%",
    left: "5px",
  },
  gridListFullScreen: {
    width: "100%",
    flexWrap: "nowrap",
    backgroundColor: "black",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  gridList: {
    width: "100%",
    flexWrap: "nowrap",
  },
  galleryRoot: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  galleryRootFullscreen: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    height: "20%",
  },
  media: {
    objectFit: "contain",
    width: "100%",
    height: "30vh",
    backgroundColor: "black",
  },
  mediaFullscreen: {
    objectFit: "contain",
    width: "100%",
    height: "80%",
    backgroundColor: "black",
  },
  card: {
    position: "relative",
    height: "20vh",
    backgroundColor: "black",
  },
  overlayFullscreen: {
    position: "absolute",
    top: "7px",
    left: "7px",
    color: "white",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  title: {
    color: theme.palette.secondary.main,
  },
  titleBar: () => ({
    background: "black",
    opacity: 0.8,
  }),
  icon: {
    color: "#FFDF00",
  },
  thumbnail: {
    border: 2,
    borderStyle: "solid",
    borderColor: "white",
    backgroundColor: "black",
    height: "100%",
  },
  thumbnailSelected: {
    border: 4,
    borderStyle: "solid",
    borderColor: "#0000ff",
    backgroundColor: "black",
    height: "100%",
  },
}));

export default useStyles;
