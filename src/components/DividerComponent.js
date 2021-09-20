import React from "react";
import { Grid, Divider as MuiDivider } from "@material-ui/core";

const DividerComponent = ({ children, ...props }) => (
  <Grid container alignItems="center" spacing={3} {...props}>
    <Grid item xs>
      <MuiDivider />
    </Grid>
    <Grid item>{children}</Grid>
    <Grid item xs>
      <MuiDivider />
    </Grid>
  </Grid>
);

export default DividerComponent;