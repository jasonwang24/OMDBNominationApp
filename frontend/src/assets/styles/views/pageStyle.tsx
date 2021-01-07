import { createStyles, makeStyles } from "@material-ui/core/styles";

export const PageStyle = (theme: any) => {
  return createStyles({
    mainPanel: {
      
    },
  });
};

const usePageStyles = makeStyles((theme) => PageStyle(theme), { index: 1 });

export default usePageStyles;
