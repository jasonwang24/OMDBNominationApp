import { makeStyles } from "@material-ui/core";
import theme from "../../theme";

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
    color: theme.palette.common.black,
  },
  annotationList: {
    maxHeight: "100%",
    overflow: "auto",
  },
  secondaryText: {
    fontSize: 12,
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: theme.palette.text.primary,
  },
  image: {
    height: "15vh",
    marginRight: "5%",
  },
});

export default useStyles;
