import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  title: {
    fontSize: 18,
    paddingLeft: 10,
  },
  body: {
    fontSize: 12,
  },
  icon: {
    width: 55,
    height: 55,
    color: "black",
  },
  annotationList: {
    maxHeight: "100%",
    overflow: "auto",
  },
  secondaryText: {
    fontSize: 12,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  image: {
    height: "15vh",
    marginRight: "5%",
  },
});

export default useStyles;
