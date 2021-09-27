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
  Button,
  Chip
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
const RequestListResults = ({ data, ...rest }) => {
  console.log(data);
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState(data);
  const [totalCount, setTotalCount] = useState(0);  
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [rerender,setRerender]=useState(true);
  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(1);
    setRerender(true)
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage+1);
    setRerender(true)
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoadingIndicator(true);
      await axios.post('http://localhost:4000/admin/getallrequest',{page:page,limit:limit}).then((resp) => {
        console.log(resp);
        setLoadingIndicator(false);
        setNewData(resp.data.response.request);
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


  const manageRequestFunc = (status,request_id) => {
    axios.post('http://localhost:4000/admin/manageRequest', {status:status,request_id:request_id}).then((resp) => {
      console.log('resp');
      if (resp.status == 200) {
        console.log('resp', resp);
        toast.success(resp.data.message, { autoClose: 3000, });
        setRerender(true)
        // history.push('/');
        // navigate('/app/users', { replace: true });
      } else {
        toast.error(resp.data.message, { autoClose: 3000, });
        console.log(resp);
      }
    }).catch((e) => {
      toast.error('Failed to login', { autoClose: 3000, });
    });
  };

  return (
    <Card {...rest}>
           <CardHeader
                title="Request List"
              />
              <Divider/>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Sl No
                </TableCell>
                <TableCell>
                  Category
                </TableCell>
                <TableCell>
                  Product
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Price
                </TableCell>
                <TableCell>
                  Created date
                </TableCell>
                <TableCell style={{textAlign:"center"}}>
                  Status
                </TableCell>
                <TableCell style={{textAlign:"center"}}>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newData.slice(0, limit).map((request,i) => (
                <TableRow
                  hover
                  key={i}
                  selected={selectedCustomerIds.indexOf(request._id) !== -1}
                >
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
                        {request.category}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {request.productname}
                  </TableCell>
                  <TableCell>
                  {request.description}
                    {/* {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`} */}
                  </TableCell>
                  <TableCell>
                  {request.cost}
                    {/* {customer.phone} */}
                  </TableCell>
                  <TableCell>
                    {request.createddate}
                  </TableCell>
                  <TableCell>
                  
                  <Chip
                    style={{backgroundColor:"#FFC107",color:"white"}}
                    // label={order.status}
                    label={request.status}
                    size="small"
                  />
                  </TableCell>
                  <TableCell style={{textAlign:"center"}}>
                  
                  
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  {(request.status=="Pending"||request.status=="Rejected")? <Button onClick={()=>manageRequestFunc('Approved',request._id)}>Approve</Button>:""}
                  {(request.status=="Pending"||request.status=="Approved")?<Button style={{backgroundColor:"#DC3545"}} onClick={()=>manageRequestFunc('Rejected',request._id)}>Reject</Button>:""}
                   
                  </ButtonGroup>
                   
                  </TableCell>
                </TableRow>
              ))}
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
      <ToastContainer />
    </Card>
  );
};

RequestListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default RequestListResults;
