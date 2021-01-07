import { createStyles, makeStyles } from "@material-ui/core";

const NominationSubmissionStyle = makeStyles((theme: any) =>
  createStyles({
    dialogBox: {
      overflowX: "hidden",
      overflowY: "auto",
    },
    textField: {
      marginTop: "5%",
      marginLeft: "15%",
      marginRight: "15%",
      marginBottom: "5%",
    },
    button: {
      margin: 10,
    },
    buttonBox: {
      marginLeft: 35,
    },
    submitText: {
      display: "flex",
      justifyContent: "center",
      marginTop: "2%",
    },
  })
);

export default NominationSubmissionStyle;
