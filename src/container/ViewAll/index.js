import React, { Fragment, useState, useMemo } from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
// import Rating from '@material-ui/lab/Rating';
import Rating from '@material-ui/core/Rating';
import {
  Avatar,
  NotificationsIcon,
  MenuIcon,
  ChevronLeftIcon,
  ArrowRight,
  Favorite,
  MoreVert,
  Chat
} from '@material-ui/icons';
import { collapseClasses, Chip } from '@material-ui/core';
import Pagination from '@material-ui/core/Pagination';
import ReqCard from '../../components/Card/ReqCard';
import CategoryCard from '../../components/Card/CategoryCard';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import dashboardimg from '../../assets/images/dashboardimg.png';
import SearchCard from '../../components/Card/SearchCard';
import img1 from '../../assets/images/img1.png';
import LeafletMap from './components/LeafletMap';
import SearchSection from '../../components/SearchSection';
import data from './components/mock.json';
import 'leaflet/dist/leaflet.css';

const drawerWidth = 240;

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
    borderRadius: '5px 5px 5px 5px',
    padding: '10px'
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
    width: 250,
    height: 250,
    border: '1px solid #000'
  },
  endStyle: {
    display: 'flex'
  },
  homeSearch: {
    margin: '0px 10px 20px 0px',
  // border:"1px solid #000"
  },
  rootpagination: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));
const PageSize = 10;
export default function Search() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <Grid className={classes.container}>
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            <Box className={classes.homeSearch}>
              <SearchSection theme="light" />
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '20px' }}>
              <div>

                <Typography>
                  Page:
              {page}
                </Typography>
              </div>
              <div>
                <div className={classes.rootpagination}>
                  <Pagination
                count={10}
                page={page}
                variant="outlined"
                onChange={handleChange}
                shape="rounded"
              />
                </div>
              </div>
            </Box>
            <Box style={{ padding: '10px 10px 10px 10px' }}>
              <SearchCard />
              <SearchCard />
              <SearchCard />
            </Box>

          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Container className={classes.grid1Col2}>
              <LeafletMap />
            </Container>

          </Grid>
        </Grid>

      </Grid>
      {/* </Container>  */}
    </>
  );
}
