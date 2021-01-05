import { createMuiTheme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";

const theme = createMuiTheme({
  palette,
  typography,
  direction: "ltr",
});

export default theme;