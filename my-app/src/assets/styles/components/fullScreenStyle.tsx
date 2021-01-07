import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    appBar: {
      position: "relative",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  })
);

export default useStyles;
