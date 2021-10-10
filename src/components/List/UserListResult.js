import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  ButtonGroup,
  CircularProgress,
  Button,
  Chip
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import {
  Delete,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { myApi } from 'src/Api';
const UserListResults = ({ ...rest }) => {
  const navigate = useNavigate();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);  
  const [totalCount, setTotalCount] = useState(0);  
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [newData, setNewData] = useState([]);
  const [rerender,setRerender]=useState(true);
  


  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(1);
    setRerender(true)
  };

  const handlePageChange = (event, newPage) => {
    //console.log(newPage)
    setPage(newPage+1);
    setRerender(true)
  };


  useEffect(() => {
    const fetchData = async () => {
      setLoadingIndicator(true);
      await axios.post(`${myApi}/admin/getallusers`,{page:page,limit:limit}).then((resp) => {
        //console.log(resp);
        setLoadingIndicator(false);
        setNewData(resp.data.response.users);
        setTotalCount(resp.data.response.count)
        setRerender(false)
      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
        setRerender(false)
      });
      // setUser(result.data);
    };
    if(rerender)
    {
      fetchData();
    }

  }, [rerender]);


  const manageUserFunc = (status,user_id) => {
    setLoadingIndicator(true);
    axios.post(`${myApi}/admin/manageUser`, {status:status,user_id:user_id}).then((resp) => {
      //console.log('resp');
      if (resp.status == 200) {
        //console.log('resp', resp);
        toast.success(resp.data.message, { autoClose: 3000, });
        setRerender(true)
        // history.push('/');
        // navigate('/app/users', { replace: true });
      } else {
        toast.error(resp.data.message, { autoClose: 3000, });
        //console.log(resp);
      }
      setLoadingIndicator(false);
    }).catch((e) => {
      toast.error('Failed to login', { autoClose: 3000, });
      setLoadingIndicator(false);
    });
  };
  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoadingIndicator(true);
  //     await axios.post('${myApi}/admin/getallusers',{page:page,limit:limit}).then((resp) => {
  //       //console.log(resp);
  //       setLoadingIndicator(false);
  //       setNewData(resp.data.response.users);
  //       setTotalCount(resp.data.response.count)
  //     }).catch((e) => {
  //       setLoadingIndicator(false);
  //       toast.error('Something Went Wrong', { autoClose: 3000, });
  //     });
  //     // setUser(result.data);
  //   };

  //   fetchData();
  // }, []);


  return (
    <Card {...rest}>
     <CardHeader
                title="User List"
              />
              <Divider/>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
        {!loadingIndicator?
          <Table>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                {data.length?
                               <Checkbox
                               checked={selectedCustomerIds.length === data.length}
                               color="primary"
                               indeterminate={
                                 selectedCustomerIds.length > 0
                                 && selectedCustomerIds.length < data.length
                               }
                               onChange={handleSelectAll}
                             />:""
                
                }
 
                </TableCell> */}
                <TableCell>
                  Sl No
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Created on
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
                <TableCell style={{textAlign:"center"}}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
           
            <TableBody>
              {newData.slice(0, limit).map((user,i) => (
                <TableRow
                  hover
                  key={i}
                  selected={selectedCustomerIds.indexOf(user._id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(user._id) !== -1}
                      onChange={(event) => handleSelectOne(event, user._id)}
                      value="true"
                    />
                  </TableCell> */}
                  <TableCell>
                    {++i}
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      {/* customer.avatarUrl */}
                      {/* <Avatar
                        src={}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(customer.firstName)}
                      </Avatar> */}
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {user.firstName+" "+user.lastName}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {user.email}
                  </TableCell>
                  <TableCell>
                    {/* {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`} */}
                  </TableCell>
                  <TableCell>
                    {/* {customer.phone} */}
                  </TableCell>
                  <TableCell>
                    {/* {moment(customer.createdAt).format('DD/MM/YYYY')} */}
                  </TableCell>
                  <TableCell>
                    <Chip
                      style={{backgroundColor:"#FFC107",color:"white"}}
                      // label={order.status}
                      label={user.status}
                      size="small"
                    />
                  
                  </TableCell>
                  <TableCell style={{textAlign:"center"}}>
                  {user.status=="Blocked"?
                  <Button style={{backgroundColor:"#007BFF",color:"#fff"}} onClick={()=>manageUserFunc('Active',user._id)}>Activate</Button>:
                  <Button style={{backgroundColor:"#DC3545",color:"#fff"}} onClick={()=>manageUserFunc('Blocked',user._id)}>Block</Button>
                   }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
         
         </Table>
         :<div style={{display:"flex",justifyContent:"center",alignItems:"center"}}><CircularProgress /></div>
        }
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
       <ToastContainer />
    </Card>
  );
};

UserListResults.propTypes = {
  users: PropTypes.array
};

export default UserListResults;
