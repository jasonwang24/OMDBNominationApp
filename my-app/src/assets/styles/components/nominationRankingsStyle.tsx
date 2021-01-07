import { createStyles, makeStyles } from "@material-ui/core";
import theme from "../../theme";

const NominationSubmissionStyle = makeStyles(() =>
  createStyles({
    dialogBox: {
      overflowX: "hidden",
      overflowY: "auto",
      display: "flex",
      justifyContent: "center",
    },
    title: {
      color: theme.palette.primary.main,
      marginTop: "2%",
      fontSize: theme.typography.h1.fontSize,
    },
    media: {
      objectFit: "contain",
      width: "100%",
      height: "20vh",
    },
    rank: {
      width: "28px",
      lineHeight: "24px",
      borderRadius: "50%",
      textAlign: "center",
      fontSize: "12px",
      border: "2px solid #666",
      zIndex: 2,
      backgroundColor: "red",
      color: "white",
      position: "absolute",
    },
    boxStyle: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "2%",
    },
  })
);

export default NominationSubmissionStyle;
