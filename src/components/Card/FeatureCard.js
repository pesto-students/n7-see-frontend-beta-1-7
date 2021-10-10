import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
// import Rating from '@material-ui/lab/Rating';
import Rating from '@material-ui/core/Rating';
import {
  Favorite,
  MoreVert,
  Chat,
  Visibility
} from '@material-ui/icons';

// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
// import dashboardimg from '../../assets/images/dashboardimg.png';
// import { collapseClasses,Chip } from "@material-ui/core";
// import SearchCard from "./SearchCard";
import { Redirect, useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/img1.png';
// const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginLeft: '40px',
    // border:"1px solid #000"
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
    // border:"1px solid #000"
  },
  headerAvatar: {
    height: '10vh'
  },
  grid1Col1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // border:"1px solid #000",
    padding: '40px'
  },
  grid1Col1Img: {
    height: '100%',
    width: '600px'
  },
  grid1Col2: {
    backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '40px'
  },
  grid1Col2Buyer: {
    backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '40px'
  },
  padding: {
    width: '500px',
    height: '200px',
    // marginTop: 10,
    // marginBottom: 20
    // border:"1px solid #000",
  },
  searchBox: {
    margin: '10px',
  },
  image: {
    width: 150,
    height: 150,
    //   border:"1px solid #000"
  },
  endStyle: {
    display: 'flex'
  }
}));

export default function FeatureCard(props) {
  const classes = useStyles();
  const history = useNavigate();
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const getDetails = (items) => {
    history('/user/details',{
      state: items
    })
    // history.push({
    //   pathname: '/details',
    //   state: items
    // });
  };
  return (

    <Grid
      container
      spacing={2}
      direction="row"
      alignItems="center"
        //   justifyContent="center"
      style={{ margin: '3px', borderRadius: '4px', boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }}
      item
      md={12}
    >
      <Grid item md={4} lg={4}>
        <div className={classes.image}>
          <img src={img1} className={classes.image} alt="cardimage" />
        </div>

      </Grid>
      <Grid item md={8} lg={8} style={{ paddingLeft: '20px' }}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>

              <Typography variant="body2" gutterBottom>
                {props.item.category}
              </Typography>

              <Typography variant="body2" color="textSecondary">
                {props.item.productname}
              </Typography>
              <br />
            </Grid>
            <Grid item>

              <Rating
                name="simple-controlled"
                value={2}
              />
              <Typography variant="subtitle1">
                Rs.
                {props.item.cost}
              </Typography>

            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h4">
              <IconButton aria-label="settings">
                <Visibility onClick={() => getDetails(props.item)} />
              </IconButton>
            </Typography>
            <Typography variant="h4">
              <IconButton aria-label="add to favorites">
                <Favorite />
              </IconButton>
            </Typography>
            <Typography variant="h4">
              <IconButton aria-label="chat">
                <Chat />
              </IconButton>
            </Typography>
          </Grid>

        </Grid>

      </Grid>
    </Grid>

  );
}
