import { createStyles, makeStyles } from "@material-ui/core";

const NominationSubmissionStyle = makeStyles((theme: any) =>
  createStyles({
    dialogBox: {
      overflowX: "hidden",
      overflowY: "auto",
      background: theme.palette.background.paper,
    },
    textField: {
      marginTop: "5%",
      marginLeft: "15%",
      marginRight: "15%",
      marginBottom: "5%",
      width: "70%",
    },
    button: {
      margin: 10,
    },
    buttonBox: {
      marginLeft: 85,
    },
    submitText: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2%",
    },
  })
);

export default NominationSubmissionStyle;
