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
    fontSize: 14,
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});

export default useStyles;
