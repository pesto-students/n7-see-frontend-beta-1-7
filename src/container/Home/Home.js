import React, { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { useSelector, useDispatch } from 'react-redux';
// import Skeleton from '@material-ui/lab/Skeleton';
import Skeleton from '@material-ui/core/Skeleton';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import BuyCard from '../../components/Card/BuyCard';
import FeatureCard from '../../components/Card/FeatureCard';

import HighlightCard from '../../components/Card/HighlightCard';
import HighlightCardReverse from '../../components/Card/HighlightCardReverse';
import WhiteCard from '../../components/Card/WhiteCard';
import NameCard from '../../components/Card/NameCard';
import DividerCard from '../../components/Card/DividerCard';
import DetailCard from '../../components/Card/DetailCard';
import DetailCarder from '../../components/Card/DetailCarder';
import DividerCarder from '../../components/Card/DividerCarder';
import SmallCard from '../../components/Card/SmallCard';

// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import IconButton from '@material-ui/core/IconButton';
import dashboardimg from '../../assets/images/dashboardimg.png';
import DividerComponent from '../../components/DividerComponent';
import DividerComponentLeft from '../../components/DividerComponentLeft';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  List,
  ListItem
} from '@material-ui/core';
import SearchCard from '../../components/Card/SearchCard';
// import CarouselSlider from './components/CarouselSlider';
import { useLocation, Redirect, useNavigate } from 'react-router-dom';
import SearchSection from '../../components/SearchSection';
import { fetchHomeData } from '../../redux/actions';
import RequestByCategory from './RequestByCategory';
import {
  ArrowForwardOutlined,
  ArrowDropDownOutlined,
  ArrowDropDownCircleOutlined
} from '@material-ui/icons';
import FeaturePlusCard from 'src/components/Card/FeaturePlusCard';

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
  },
  grid1Col1Img: {
    height: '100%',
    width: '600px'
  },
  grid1Col2: {
    // backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '0px 40px 10px 40px',
  },
  grid1Col2Buyer: {
    backgroundColor: '#F9F9FB',
    marginRight: '10px',
    // border:"1px solid #000",
    borderRadius: '0px 5px 5px 0px',
    padding: '40px'
  },
  grid2Col1Bottom: {
    display: 'flex',
    marginTop: '20px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  homeSearch: {
    margin: '0px 10px 20px 0px',
    // border:"1px solid #000"
  },
  flexContainer:{
    display:'flex',
    flexDirection:'row',
    padding:0
  },
  activeClass:{
    color:"#383873",
    fontSize:"20px",
  },
  inactiveClass:{
    color:"#8a9fa0"
  }
}));
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
       Serve End
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );
}


export default function Home() {
  const classes = useStyles();
  // const counter = useSelector(getCounter);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // let loading = useSelector(state=>state.fetchDataReducer.loading);
  // let data = useSelector(state=>state.fetchDataReducer.data);

  // let highlightedProduct=!loading?data.highlightedProduct:[];
  // console.log(loading);
  // console.log(!loading?data.banner:[]);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [data, setData] = useState(null);
  const [dataByCategory, setDataByCategory] = useState([]);
  const [category, setCategory] = useState([{_id:'123456',category:'Browse All'}]);
  const [selectedCategory, setSelectedCategory] = useState("Browse All");
  const [categoryLoading,setCategoryLoading]=useState(false)
  const [banner, setBanner] = useState([]);
  const [activeTab,setActiveTab]=useState(0);

  const [highlightedListing, setHighlightedListing] = useState([]);
  const [featuredListing, setFeaturedListing] = useState([]);
  const [latestListing, setLatestListing] = useState([]);
  const [rerender, setReRender] = useState(true);
  const [searchData, setSearchData] = useState('');
  const [totalCount, setTotalCount] = useState(0);  
  const [newData, setNewData] = useState([]);
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  useEffect(() => {
    // dispatch(fetchHomeData());
    const fetchData = async () => {
      setLoadingIndicator(true);
      // https://run.mocky.io/v3/e79f1d99-c66f-4713-9586-d495562b1b43
      await axios('http://localhost:4000/request/getHomeRequest').then((resp) => {
        console.log(resp);
        setData(resp.data.response);
        // setDataByCategory(resp,data.response.highlightedlisting);
        setBanner(resp.data.response.banner);
        setHighlightedListing(resp.data.response.highlightedlisting);
        setFeaturedListing(resp.data.response.featuredlisting);
        setLatestListing(resp.data.response.latestlisting);
        setLoadingIndicator(false);
        // console.log(resp.data.banner);
      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });
      // setUser(result.data);
    };



    const fetchCategory = async () => {
      setCategoryLoading(true)
      await axios.get('http://localhost:4000/admin/getcategory').then((resp) => {
        setCategory([...category,...resp.data.response]);
        setCategoryLoading(false)
        // console.log(resp.data.banner);
      }).catch((e) => {
        setCategoryLoading(false)
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });
      // setUser(result.data);
    };

    fetchData();
    fetchCategory();
    
  }, []);

  const fetchDataByCategory = async (selectedCategory) => {
    console.log(selectedCategory);
    // setLoadingIndicator(true);
    await axios.get(`http://localhost:4000/request/getRequestByCategory/${selectedCategory}`).then((resp) => {
      // console.log(resp);
      
      setDataByCategory(resp.data.response);
      // setLoadingIndicator(false);
      // console.log(resp.data.banner);
    }).catch((e) => {
      // setLoadingIndicator(false);
      toast.error('Something Went Wrong', { autoClose: 3000, });
    });
    // setUser(result.data);
  };




  const fetchHomeData = async () => {
    setLoadingIndicator(true);
    const u_id = sessionStorage.getItem('u_id');
    await axios.post('http://localhost:4000/request/search',{page:page,limit:limit,search:searchData}).then((resp) => {
      console.log(resp);
     
      setNewData(resp.data.response.result);
      setTotalCount(resp.data.response.count)
      setLoadingIndicator(false);
      setReRender(false)
    }).catch((e) => {
      setLoadingIndicator(false);
      toast.error('Something Went Wrong', { autoClose: 3000, });
    });
    // setUser(result.data);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(1);
    setReRender(true)
  };


  const handlePageChange = (event, newPage) => {
    setPage(newPage+1);
    setReRender(true)
  };

  useEffect(()=>{
    if(rerender)
    {
      fetchHomeData();
    }
  },[rerender])

  useEffect(()=>{
 
    fetchDataByCategory(selectedCategory)
    
    
  },[selectedCategory])

  const reqSearch=(value)=>{
    setSearchData(value);
    setReRender(true)
  }

  const handleCategoryData=(index,selectedCategory)=>{
    setActiveTab(index);
    setSelectedCategory(selectedCategory)
  }
  
  const viewAllFunc=()=>{
    console.log("helo");
  }
  return (
    <>
      <Grid className={classes.container}>
        <Grid container>
          <Grid item xs={12} md={7} lg={8}>
            {/* <Box className={classes.homeSearch}>
              <SearchSection theme="light" reqSearch={reqSearch}/>
            </Box> */}

          {/* <Grid item md={12} style={{
               display:'flex',
               alignContent:"center",
               justifyContent:"center",
               alignItems:"center",
               color:"#383873"
              
            }}>
              <List style={{
                 display:'flex',
                 flexDirection:'row',
               cursor:"pointer",
                 width:"60%",
                 
                  alignContent:"center",
                  justifyContent:"center",
                  alignItems:"center",
              }}>
                {
                  categoryList.map((categorylist,i)=>(
                    <b>
                    <ListItem onClick={()=>handleCategoryData(i)}>
                    <Typography>
                    {categorylist}
                  </Typography>
                    </ListItem>
                    </b>
                  ))
                }

              </List>
            

            </Grid> */}
           
{
  searchData==''?<div>
            <Grid item md={12}>
            <Box style={{ width:"100%"}}>
              {/* <CarouselSlider banner={banner} /> */}
              <img src="https://picsum.photos/800/300/?random" width="100%" height="300vh" style={{borderRadius:"15px"}}/>
            </Box>
            </Grid>
        
            <Grid item md={12} style={{
              marginTop:"10px",
               display:'flex',
               alignContent:"center",
               justifyContent:"space-between",
               alignItems:"center",
               color:"#383873"
              
            }}>
              <List style={{
                 display:'flex',
                 flexDirection:'row',
               cursor:"pointer",
                 width:"60%",
                
              }}>
                {
                  category.slice(0, 5).map((categorylist,i)=>(
                    <b>
                    <ListItem onClick={()=>handleCategoryData(i,categorylist.category)} style={{
                      display:"flex",
                      direction:"column",
                      alignItems:"center",
                      justifyContent:"center"
                    }}>
                    <Typography className={activeTab==i?`${classes.activeClass}`:`${classes.inactiveClass}`}>
                      {categorylist.category}
                    </Typography>
                   
                    </ListItem>
                    </b>
                  ))
                }

              </List>
             
              <Typography>
              See all
            <IconButton aria-label="add to favorites">
              <ArrowForwardOutlined />
            </IconButton>
            </Typography>

            </Grid>
            
            <br/>
            <Grid item md={12}>
              <Grid container spacing={2}>
              {
                  !loadingIndicator && data != null ? dataByCategory.slice(0, 3).map((shortdata, i) => (
                    <Grid item md={4}>
                       {/* <NameCard/> */}
                       <WhiteCard key={i} item={shortdata}/>
                    </Grid>
                  )) : <Skeleton animation="wave" />
                }

              </Grid>
            </Grid> 
            <br/>
            <Grid item md={12}>
            <DividerComponentLeft viewAllFunc={viewAllFunc}>In Short</DividerComponentLeft>
            </Grid>
         <br/>

            <Grid item md={12}>
              <Grid container spacing={2}>
              {
                  !loadingIndicator && data != null ? highlightedListing.slice(0, 3).map((shortdata, i) => (
                    <Grid item md={4}>
                       {/* <NameCard/> */}
                       <NameCard key={i} item={shortdata}/>
                    </Grid>
                  )) : <Skeleton animation="wave" />
                }

    
                  
              </Grid>
            </Grid>
            <Box style={{ paddingBottom: '15px', paddingTop: '20px' }}>
              <DividerComponentLeft viewAllFunc={viewAllFunc}>Highlighted Listing</DividerComponentLeft>
            </Box>
            <Box style={{marginTop: '2px' }}>
              <Grid container direction="row" justifyContent="space-between" spacing={2}>
             
                {
                  !loadingIndicator && data != null ? highlightedListing.slice(3,9 ).map((highlightedproduct, i) => (
                    <Grid item md={4}>
                       {/* <NameCard/> */}
                      <HighlightCard key={i} item={highlightedproduct} />
                    </Grid>
                  )) : <Skeleton animation="wave" />
                }

  
{/* {
                  !loadingIndicator && data != null ? highlightedListing.slice(6, 9).map((highlightedproduct, i) => (
                    <Grid item md={4}>
          
                      <HighlightCardReverse key={i} item={highlightedproduct} />
                    </Grid>
                  )) : <Skeleton animation="wave" />
                
                } */}

              </Grid>


            </Box>

            {/* <Box style={{ paddingBottom: '15px', paddingTop: '20px' }}>
              <DividerComponentLeft viewAllFunc={viewAllFunc}>Featured Listing</DividerComponentLeft>
            </Box>
            <Box style={{marginTop: '2px' }}>
              <Grid container direction="row" justifyContent="space-between" spacing={2}>
             
                {
                  !loadingIndicator && data != null ? highlightedListing.slice(0, 3).map((highlightedproduct, i) => (
                    <Grid item md={4}>

                        <FeaturePlusCard/>
                    </Grid>
                  )) : <Skeleton animation="wave" />
                }

              </Grid>


            </Box> */}
            {/* <Box style={{ paddingBottom: '20px', paddingTop: '40px',margin: '3px', }}>
              <DividerComponent>Featured Listing</DividerComponent>
            </Box>

            <Box className={classes.grid2Col1Bottom} style={{ marginTop: '20px', marginRight: '10px' }}>
              <Grid container>
                {
                  !loadingIndicator && data != null ? featuredListing.slice(0, 4).map((featuredproduct, i) => (
                    <Grid item xs={12} md={6} lg={6}>
                      <FeatureCard key={i} item={featuredproduct} />
                    </Grid>
                  )) : <Skeleton animation="wave" />
                  }
              </Grid>
            </Box> */}

  </div>:<div>
  
  <Box spacing={2}>
            <PerfectScrollbar>
              <Table>
                <TableBody>
                  {
                  newData!==null?newData.slice(0, limit).map((newdata,i) => (
                    <TableRow
                      key={i}
                    >
                    <SearchCard data={newdata}/>
                    {/* <Divider /> */}
                      {/* <TableCell>
                      {request.category}
                      </TableCell> */}
                    </TableRow>
                  )):""
                }
                </TableBody>
              </Table>
              <TablePagination
                  component="div"
                  count={totalCount}
                  onPageChange={handlePageChange}
                  onRowsPerPageChange={handleLimitChange}
                  page={page-1}
                  rowsPerPage={limit}
                  rowsPerPageOptions={[5, 10, 25]}
                />
                      </PerfectScrollbar>
            </Box>

  </div>
}
  


          </Grid>


         
          <Grid item xs={12} md={5} lg={4}>
         
          {/* <RequestByCategory/> */}
            <Container className={classes.grid1Col2}>
            {/* <Grid item md={12}>
            <DividerComponentLeft viewAllFunc={viewAllFunc}>
           
            Latest Products</DividerComponentLeft>
          </Grid> */}

            <DetailCard item={highlightedListing.length>0?highlightedListing[0]:""}/>
            <br/>
            <DividerCard item={highlightedListing.length>0?highlightedListing[0]:""}/>
            <br/>
            <DetailCarder item={highlightedListing.length>0?highlightedListing[0]:""}/>
            <br/>
            <DividerCarder item={highlightedListing.length>0?highlightedListing[0]:""}/>
            <br/>
            <SmallCard item={highlightedListing.length>0?highlightedListing[0]:""}/>
            {/* <DividerComponentLeft viewAllFunc={viewAllFunc}></DividerComponentLeft> */}
              {/* <Box style={{ paddingBottom: '30px' }}>
                <DividerComponent>Fresh Recommendations</DividerComponent>
              </Box>
              <Box>

                <Grid item>

                  {
                  !loadingIndicator && data != null ? latestListing.slice(0, 6).map((latestproduct, i) => (
                    <BuyCard key={i} item={latestproduct} />
                  )) : <Skeleton animation="wave" />
                }

                </Grid>
              </Box>
              <br />
              <Box /> */}

            </Container>

          </Grid>
     
        </Grid>
        <Grid container>
          <Grid item xs={12} md={7} lg={8} />
          <Grid item xs={12} md={5} lg={4}>
            <Container className={classes.grid1Col2} />

          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ backgroundColor: '#F9F9FB' }}>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Grid>
      <ToastContainer />
    </>
  );
}
