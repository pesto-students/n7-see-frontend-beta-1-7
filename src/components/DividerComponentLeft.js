import React from 'react';
import { Grid, IconButton,Divider as MuiDivider } from '@material-ui/core';
import {
  ArrowForwardOutlined,
  ArrowDropDownCircleOutlined
} from '@material-ui/icons';
const DividerComponentLeft = ({ children, ...props }) => (
  <Grid container alignItems="center" spacing={3} {...props}>
    <Grid item> <IconButton style={{
      color:"#000"
    }}>
              <ArrowDropDownCircleOutlined />
            </IconButton>{children}</Grid>
    <Grid item xs>
      <MuiDivider />
    </Grid>
    
    {/* <Grid item xs>
      <MuiDivider />
    </Grid> */}
    <Grid item onClick={()=>props.viewAllFunc()} style={{
      cursor:"pointer",
      fontSize:"12px"
    }}>See All
     <IconButton aria-label="add to favorites">
              <ArrowForwardOutlined />
            </IconButton>
    </Grid>
  </Grid>
);

export default DividerComponentLeft;
