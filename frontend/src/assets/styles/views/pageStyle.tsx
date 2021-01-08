import { createStyles, makeStyles } from "@material-ui/core/styles";

export const PageStyle = (theme: any) => {
  return createStyles({
    button: {
      marginTop: "10%",
      right: "-15vh",
      whiteSpace: "nowrap",
      left: 100,
      top: 5,
      color: theme.palette.text.primary,
      background: theme.palette.background.paper,
      "&:hover": {
        background: "#a9a9a9",
      },
    },
  });
};

const usePageStyles = makeStyles((theme) => PageStyle(theme), { index: 1 });

export default usePageStyles;
