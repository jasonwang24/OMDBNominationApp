import { createStyles, makeStyles } from "@material-ui/core";
import theme from "../../theme";

const NominationListStyle = makeStyles(() =>
  createStyles({
    searchPaper: {
      height: "65vh",
      display: "flex",
      overflowY: "auto",
      overflowX: "hidden",
      flexDirection: "column",
      fontSize: "large",
      boxShadow: "1",
      elevation: 5,
      backgroundColor: theme.palette.background.paper,
      marginRight: "6%",
      marginTop: "1%",
    },
    boxStyle: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "3%",
      marginBottom: "2%",
    },
    title: {
      color: theme.palette.text.primary,
      fontSize: theme.typography.h1.fontSize,
    },
    submitButton: {
      position: "absolute",
      left: 25,
      top: 5,
      color: theme.palette.text.primary,
      background: "#F0F0F0",
      "&:hover": {
        background: "#a9a9a9",
      },
    },
    nominationBox: {
      display: "inline-flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    fullText: {
      position: "relative",
      color: theme.palette.text.primary,
      right: 25,
      top: 5,
    },
    noneSelectedText: {
      margin: "2%",
      fontSize: theme.typography.h2.fontSize,
      fontStyle: "italic",
      marginLeft: "35%",
    },
  })
);

export default NominationListStyle;
