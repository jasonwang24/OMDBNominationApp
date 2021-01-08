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
      marginTop: "5%",
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
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      position: "absolute",
    },
    boxStyle: {
      display: "flex",
      justifyContent: "center",
      marginLeft: "auto",
      marginRight: "auto",
      marginBottom: "2%",
    },
    paper: {
      width: "100%",
      display: "flex",
      overflowY: "auto",
      overflowX: "hidden",
      flexDirection: "column",
      fontSize: "large",
      boxShadow: "1",
      backgroundColor: theme.palette.background.paper,
      marginRight: "6%",
      marginTop: "1%",
    },
  })
);

export default NominationSubmissionStyle;
