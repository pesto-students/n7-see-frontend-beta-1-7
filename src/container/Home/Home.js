import React, { Fragment, useEffect } from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
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
import Chip from '@material-ui/core/Chip';
import {
  Avatar,
  NotificationsIcon,
  MenuIcon,
  ChevronLeftIcon,
  ArrowRight
} from '@material-ui/icons';
import TotalGrowthBarChart from "./components/TotalGrowthBarChart";
import Sales from "./components/Sales";
import ReqCard from '../../components/Card/ReqCard';
import BuyCard from '../../components/Card/BuyCard';
import BottomCard from '../../components/Card/BottomCard';
import CategoryCard from '../../components/Card/CategoryCard';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import dashboardimg from '../../assets/images/dashboardimg.png';
import DividerComponent from '../../components/DividerComponent';

import { collapseClasses } from "@material-ui/core";
import CarouselSlider from './components/CarouselSlider';
import FeatureCard from "../../components/Card/FeatureCard";
import SearchSection from '../../components/SearchSection'
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
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    marginLeft:"40px",
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
    height:'10vh'
  },
  grid1Col1:{
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
  },
  grid1Col1Img:{
    height: "100%",
    width: "600px"
  },
  grid1Col2:{
    backgroundColor:"#F9F9FB",
    marginRight:'10px',
    // border:"1px solid #000",
    borderRadius: "0px 5px 5px 0px",
    padding:"30px 40px 10px 40px",
  },
  grid1Col2Buyer:{
    backgroundColor:"#F9F9FB",
    marginRight:'10px',
    // border:"1px solid #000",
    borderRadius: "0px 5px 5px 0px",
    padding:"40px"
  },
  grid2Col1Bottom:{
    display:"flex",
    marginTop:"20px",
    alignItems:"flex-start",
    justifyContent:"space-between",
  },
  homeSearch:{
    margin:"0px 10px 20px 0px",
    // border:"1px solid #000"
  }
}));
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Home() {
  const classes = useStyles();
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  useEffect(()=>{
    
  },[])
  return (
<Fragment>
  <Grid className={classes.container}>
    <Grid container>
            <Grid item xs={12} md={7} lg={8}>
                {/* <Box className={classes.grid1Col1}>
                <img src={dashboardimg}  className={classes.grid1Col1Img}/>
                <CarouselSlider/>
                </Box> */}
                <Box className={classes.homeSearch}>
                  <SearchSection theme="light" />
                </Box>
                <Box style={{marginRight:"10px"}}>
                <CarouselSlider/>
                </Box>
                <Box style={{paddingBottom:"20px",paddingTop:"20px"}}>
                    <DividerComponent>Highlighted Products</DividerComponent>
                </Box>  
                <Box style={{marginRight:"10px",marginTop:"20px"}}>
                <Grid container direction="row" justifyContent="space-between">
                 
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                  

                </Grid>
                
                </Box>
                <Box style={{paddingBottom:"20px",paddingTop:"40px"}}>
                    <DividerComponent>Featured Products</DividerComponent>
                    </Box>  
                <Box className={classes.grid2Col1Bottom} style={{marginTop:"20px",marginRight:"10px"}}>
                <BottomCard/>
                <BottomCard/>
                </Box>
                <Box className={classes.grid2Col1Bottom} style={{marginTop:"20px",marginRight:"10px"}}>
                <BottomCard/>
                <BottomCard/>
                </Box>
            </Grid>
            <Grid item xs={12} md={5} lg={4} >
                 
                <Container className={classes.grid1Col2}>
               
                    <Box style={{paddingBottom:"30px"}}>
                    <DividerComponent>Fresh Recommendations</DividerComponent>
                    </Box>           
                   <Box>
                  
                 
                  <Grid item>
                    <BuyCard/>
                    <BuyCard/>
                    <BuyCard/>
                    <BuyCard/>
                    <BuyCard/>
                    <BuyCard/>
                  </Grid>
                  {/* <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      p: 1
                    }}
                  >
                    <Button
                      color="primary"
                      endIcon={<ArrowRight />}
                      size="small"
                      variant="text"
                    >
                      View all
                    </Button>
                  </Box> */}
                  </Box>
                  <br/>
                  <Box>
                  {/* <Grid item>
                    Buyer
                  </Grid>
                  <Grid item>
                    <ReqCard/>
                    <ReqCard/>
                  </Grid> */}
                </Box>              
                </Container>
      
            </Grid>

            
    {/* <Grid item xs={12} md={7} lg={8}>
              <Paper className={fixedHeightPaper}>
               <Chart /> 
              </Paper>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid> */}
      </Grid>
      <Grid container>
    <Grid item xs={12} md={7} lg={8}>
                {/* <Box className={classes.grid1Col1}>
                <TotalGrowthBarChart isLoading={true} />
                <Sales/>
               
                </Box> */}
              
                {/* <Box style={{marginRight:"10px",marginTop:"30px"}}>
                <Grid container direction="row" justifyContent="space-between">
                 
                <FeatureCard/>
                <FeatureCard/>
                <FeatureCard/>
                  

                </Grid>
                </Box> */}
                {/* <Box className={classes.grid2Col1Bottom} style={{marginTop:"30px",marginRight:"10px"}}>
                <BottomCard/>
                <BottomCard/>
                </Box> */}
                
               
            </Grid>
            <Grid item xs={12} md={5} lg={4} >
                <Container className={classes.grid1Col2}>
                {/* <BuyCard/>
                <BuyCard/>
                <BuyCard/> */}
                   {/* <Box>
                  <Grid item>
                    Category
                  </Grid>
                  <Grid item>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                  </Grid>
                  </Box>
                  <br/>
                  <Box>
                </Box>               */}
                </Container>
      
            </Grid>
      </Grid>

  {/* <Container maxWidth="lg" className={classes.container}> */}
           {/* <Grid container spacing={3} > */}
  {/* //           Chart
            // <Grid item xs={12} md={8} lg={9}>
            //   <Paper className={fixedHeightPaper}>
            //     <Chart />
            //   </Paper>
            // </Grid>
  //           Recent Deposits
  //           <Grid item xs={12} md={4} lg={3}>
  //             <Paper className={fixedHeightPaper}>
  //               <Deposits />
  //             </Paper>
  //           </Grid>
  //           Recent Orders
  //           <Grid item xs={12}>
  //             <Paper className={classes.paper}>
  //               <Orders />
  //             </Paper>
  //           </Grid> */}
          </Grid>
          <Grid item style={{backgroundColor:"#F9F9FB"}}>
          <Box pt={4}>
             <Copyright />
         </Box>
          </Grid>
           
  {/* </Container>  */}
  </Fragment>
  );
};