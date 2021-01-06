import { createStyles, makeStyles } from "@material-ui/core";
import theme from "../../theme";

const NominationListStyle = makeStyles(() =>
  createStyles({
    searchPaper: {
      display: "flex",
      overflowY: "auto",
      flexDirection: "column",
      fontSize: "large",
      boxShadow: "1",
      elevation: 5,
      backgroundColor: "white",
      marginRight: "6%",
      marginTop: "1%",
    },
    boxStyle: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "3%",
    },
    title: {
      color: theme.palette.primary.dark,
      fontSize: theme.typography.h1.fontSize,
    },
  })
);

export default NominationListStyle;
