import React, { Fragment,useEffect,useState } from 'react';
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
import PerfectScrollbar from 'react-perfect-scrollbar';
// import Rating from '@material-ui/lab/Rating';
import Rating from '@material-ui/core/Rating';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
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
import TotalGrowthBarChart from './components/TotalGrowthBarChart';
import Sales from './components/Sales';
import ReqCard from '../../components/Card/ReqCard';
import CategoryCard from '../../components/Card/CategoryCard';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import dashboardimg from '../../assets/images/dashboardimg.png';
import SearchCard from '../../components/Card/SearchCard';
import img1 from '../../assets/images/img1.png';
import LeafletMap from './components/LeafletMap';
import 'leaflet/dist/leaflet.css';
import SearchSection from '../../components/SearchSection';
import Pagination from '@material-ui/core/Pagination';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { myApi } from 'src/Api';
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
    borderRadius: '0px 5px 5px 0px',
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

export default function ViewAll() {
  const classes = useStyles();
  const [totalCount, setTotalCount] = useState(0);  
  const [newData, setNewData] = useState([]);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = useState(1);
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [rerender, setReRender] = useState(true);
  const [searchData, setSearchData] = useState('');

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(1);
    setReRender(true)
  };


  const handlePageChange = (event, newPage) => {
    setPage(newPage+1);
    setReRender(true)
  };

  const fetchData = async () => {
    setLoadingIndicator(true);
    const u_id = sessionStorage.getItem('u_id');
    await axios.post(`${myApi}/request/search`,{page:page,limit:limit,search:searchData}).then((resp) => {
      console.log(resp);
      setLoadingIndicator(false);
      setNewData(resp.data.response.result);
      setTotalCount(resp.data.response.count)
      setReRender(false)
    }).catch((e) => {
      setLoadingIndicator(false);
      toast.error('Something Went Wrong', { autoClose: 3000, });
    });
    // setUser(result.data);
  };


  useEffect(()=>{
    if(rerender)
    {
      fetchData();
    }
  },[rerender])

  const reqSearch=(value)=>{
    setSearchData(value);
    setReRender(true);
  }
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <>
      <Grid className={classes.container}>
        <Grid container>
          <Grid item xs={12} md={6} lg={6} style={{ padding: '20px' }}>
             <Box className={classes.homeSearch}>
              <SearchSection theme="light" reqSearch={reqSearch} />
            </Box>
            {/* <Box style={{ padding: '10px 10px 10px 10px' }}>
              {
                newData.length>0?newData.map((newdata)=>(
                  <SearchCard />
                  )):""
              }
             
            </Box> */}

            
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

{/*      
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
                    count={totalCount}
                    page={page-1}
                    variant="outlined"
                    onChange={handlePageChange}
                    shape="rounded"
                  />


                </div>
              </div>
            </Box>
            */}
           
         
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Container className={classes.grid1Col2}>
              <LeafletMap data={newData}/>
            </Container>

          </Grid>
        </Grid>

      </Grid>
      {/* </Container>  */}
    </>
  );
}
