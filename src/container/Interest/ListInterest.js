import React, { Fragment, useEffect, useState } from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {
  NotificationsIcon,
  MenuIcon,
  ChevronLeftIcon,
  ArrowRight,
  Favorite,
  FileCopy,
  Delete,
  MenuBook,
  Visibility
} from '@material-ui/icons';
import {
  Avatar, ListItem, ListItemAvatar, ListItemText,
  CardHeader, collapseClasses,
  Container,
  Box,
  Typography,
  Link,
  Grid,
  Button,
  CssBaseline,
  TextField,
  Input,
  LinearProgress,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import HistoryCard from '../../components/Card/HistoryCard';
import CategoryCard from '../../components/Card/CategoryCard';
// import { increment, decrement, getCounter } from "./counterReducer";
// import { useSelector, useDispatch } from "react-redux";
import dashboardimg from '../../assets/images/dashboardimg.png';
import {
  Formik, Field, Form, ErrorMessage
} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import InterestInDetail from './InterestInDetail';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { Redirect, useNavigate } from 'react-router-dom';
// import { Skeleton } from '@material-ui/lab';
import Skeleton from '@material-ui/core/Skeleton';
import RSelect from '../../components/Select/RSelect';
import PerfectScrollbar from 'react-perfect-scrollbar';
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
  tabHeader: {
    backgroundColor: '#252F3E',
    color: '#fff'
  }
}));

export default function ListInterest(props) {
  const classes = useStyles();
  const navigate = useNavigate();
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);  
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [rerender, setReRender] = useState(true);
  const [myRequestData, setMyRequestData] = useState([]);


  const [myInterestData, setMyInterestData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [viewInDetail, setViewInDetail] = useState(false);



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
    await axios.post(`${myApi}/request/getmyinterest`,{page:page,limit:limit,u_id:u_id}).then((resp) => {
      // console.log(resp);
      setLoadingIndicator(false);
      setNewData(resp.data.response.interest);
      setTotalCount(resp.data.response.count)
      setReRender(false)
    }).catch((e) => {
      setLoadingIndicator(false);
      toast.error('Something Went Wrong', { autoClose: 3000, });
    });
    // setUser(result.data);
  };



  const getAllMyInterest = async () => {
    setLoadingIndicator(true);
    // https://run.mocky.io/v3/e79f1d99-c66f-4713-9586-d495562b1b43
    const u_id = sessionStorage.getItem('u_id');
    await axios.get(`${myApi}/request/getmyinterest/${u_id}`).then((resp) => {
      // console.log(resp.data.response);
      setMyInterestData(resp.data.response);
      setLoadingIndicator(false);
    }).catch((e) => {
      setLoadingIndicator(false);
      toast.error('Something Went Wrong', { autoClose: 3000, });
    });

    // setUser(result.data);
  };

  useEffect(() => {
    getAllMyInterest();
  }, []);

  useEffect(() => {
    if(rerender)
    {
      fetchData();
    }
  }, [rerender]);
  // const counter = useSelector(getCounter);

  // const dispatch = useDispatch();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const viewInDetailFunc = (value,myinterestdata) => {
    setViewInDetail(value);
    setSelectedData(myinterestdata);
  };

  const manageViewInDetailFunc=(value)=>{
    getAllMyInterest();
    setViewInDetail(value);
  }

  return (
    <>
      <Grid container style={{ marginTop: '30px',  padding: '0px 30px 60px 30px' }}>
        {/* <Grid item md={12} style={{ display: 'flex', justifyContent: 'space-between', minHeight: '70px' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px' }}>
            <IconButton aria-label="add to favorites">
              <MenuBook />
            </IconButton>
            {' '}
            My Interest
          </div>
        </Grid> */}
        {/* {
      !viewInDetail ? (
        <Grid item md={12} style={{ minHeight: '80px' }}>
          <Card>
            <CardHeader
              className={classes.tabHeader}
              avatar={(
                <Avatar sx={{ bgcolor: '#000' }} aria-label="recipe">
                  L
                </Avatar>
       )}
              title={(
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div>Latest Interest</div>
                </div>
      )}
      //         subheader={
      //           <span style={{ color: '#fff' }}>September 14, 2016</span>
      //  }
            />
            <CardContent>

                {
                  myInterestData.length>0?myInterestData.map((myinterestdata)=>(
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <IconButton aria-label="add to favorites">
                        <FileCopy />
                      </IconButton>
    
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={myinterestdata.productname}
                        secondary={myinterestdata.description}
                      />
                      <IconButton
                        edge="end"
                        size="small"
                        onClick={() => viewInDetailFunc(true,myinterestdata)}
                      >
                        <Visibility />
                      </IconButton>
    
                    </ListItem>
                    <Divider />
                  </List>
              

                  )):<div style={{display:"flex",justifyContent:"center"}}>No Request Found</div>

                }

            </CardContent>
          </Card>
        </Grid>
      ) : <InterestInDetail manageViewInDetailFunc={manageViewInDetailFunc} selectedData={selectedData} />

    } */}


{!viewInDetail ? <Container maxWidth={false}>
<Card>
       <CardHeader
       className={classes.tabHeader}
                title={
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>Latest Interest</div>
              </div>
              }
              />
              <Divider/>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableBody>
              {newData.length>0?newData.slice(0, limit).map((myinterestdata,i) => (
                <TableRow
                  hover
                  key={i}
                >
                <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <IconButton aria-label="add to favorites">
                        <FileCopy />
                      </IconButton>
    
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={myinterestdata.productname}
                        secondary={myinterestdata.description}
                      />
                      <IconButton
                        edge="end"
                        size="small"
                        onClick={() => viewInDetailFunc(true,myinterestdata)}
                      >
                        <Visibility />
                      </IconButton>
    
                    </ListItem>
                    <Divider />
                  {/* <TableCell>
                  {request.category}
                  </TableCell> */}

                  <Divider />
                </TableRow>
              )):
              <TableCell>
              <div style={{textAlign:"center"}}>
    No Interest Found
              </div>
              </TableCell>
              
            
           
            }
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
     
      <TablePagination
        component="div"
        count={totalCount}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page-1}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
    </Container>
             :<InterestInDetail manageViewInDetailFunc={manageViewInDetailFunc} selectedData={selectedData} />
         }

      </Grid>
      <ToastContainer />
    </>
  );
}
