import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";

import Header from "../../components/Header"
import Sidebar from "../../components/Sidebar";
import { AppBar, CssBaseline, Toolbar, useMediaQuery } from '@material-ui/core';

import Home from '../Home/Home';
// import MainLayouts  from "./MainLayout/index.js"
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    backgroundColor: theme.palette.background.default
},
  content: {
    flexGrow: 1,
    marginLeft: theme.spacing(9),
    padding: theme.spacing(3),
    marginTop: theme.spacing(7),
    overflowX: "hidden"
  },
  contentShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  }
});

class MainLayout extends Component {
  state = {
    open: false
  };

  handleToggleDrawer = () => {
    this.setState(prevState => {
      return { open: prevState.open };
    });
  };

  render() {
    const { classes, children } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          {/* <MainLayouts/> */}
            <AppBar
                position="fixed"
                color="inherit"
                elevation={0}
                className={this.state.open ? classes.appBarWidth : classes.appBar}
            >
                <Toolbar>
                <Header
                    handleToggleDrawer={this.handleToggleDrawer}
                    open={this.state.open}
                  /> 
                    {/* <Header handleLeftDrawerToggle={handleLeftDrawerToggle} /> */}
                </Toolbar>
            </AppBar>
           {/* <Header
            handleToggleDrawer={this.handleToggleDrawer}
            open={this.state.open}
          />  */}
          <main
            className={classNames(classes.content, {
              [classes.contentShift]: this.state.open
            })}
          >
            {children}
          </main>
          
        </div>
        <Sidebar open={this.state.open} drawerWidth={drawerWidth} />
      </Fragment>
    );
  }
}

export default withStyles(styles)(MainLayout);
