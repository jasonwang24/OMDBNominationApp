import React from "react";
import progressStyle from "../assets/styles/components/loadingBarStyle";
import { Box, CircularProgress } from "@material-ui/core";

function LoadingAnimation() {
  const classes = progressStyle();
  return (
    <Box paddingLeft="48%" paddingTop="5%">
      <CircularProgress color="primary" className={classes.loadingProgress} />
    </Box>
  );
}
export default LoadingAnimation;
