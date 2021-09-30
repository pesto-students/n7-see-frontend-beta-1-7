import { useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  CardHeader,
  Divider,
  Container,
  Button
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import {
  Reply,
  Visibility
} from '@material-ui/icons';
import AddView from './AddView';
import View from './View';
const CustomerListResults = ({ ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);  
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [rerender, setReRender] = useState(true);
  const [showComponentType, setShowComponentType] = useState('');
  const [showComponent, setShowComponent] = useState(false);
  const [showSelectedData, setShowSelectedData] = useState(false);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
    setPage(1);
    setReRender(true)
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage+1);
    setReRender(true)
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoadingIndicator(true);
      const u_id = sessionStorage.getItem('u_id');
      await axios.post('http://localhost:4000/complaint/getallmycomplaints',{page:page,limit:limit,u_id:u_id}).then((resp) => {
        console.log(resp);
        setLoadingIndicator(false);
        setNewData(resp.data.response.complaints);
        setTotalCount(resp.data.response.count)
        setReRender(false)
      }).catch((e) => {
        setLoadingIndicator(false);
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });
      // setUser(result.data);
    };

    if(rerender)
    {
      fetchData();
    }
  }, [rerender]);

  const AddFunc=()=>{
    setShowComponent(true);
    setShowComponentType('add')
  }

  const ViewFunc=(complaint)=>{
    setShowComponentType('view')
    setShowComponent(true);
    setShowSelectedData(complaint)

  }

  return (
    <>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
   { showComponent?
        showComponentType=='add'?<AddView 
        setReRender={setReRender} 
        setShowComponent={setShowComponent} 
        showComponentType={showComponentType} 
        showSelectedData={showSelectedData}/>:
        showComponentType=='view'?<View 
        setReRender={setReRender} 
        setShowComponent={setShowComponent} 
        showComponentType={showComponentType} 
        showSelectedData={showSelectedData}/>
        :"":""
   }
    
    <br/>
    <Card {...rest}>
       <CardHeader
                title={
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>Complaint List</div>
                <div><Button color="success" variant="contained" onClick={()=>AddFunc()}>Register New Complaint</Button></div>
              </div>
              }
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
                  Subject
                </TableCell>
                <TableCell>
                  Description
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
                <TableCell>
                  Reply date
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newData.slice(0, limit).map((complaint,i) => (
                <TableRow
                  hover
                  key={i}
                  selected={selectedCustomerIds.indexOf(complaint._id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer._id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer._id)}
                      value="true"
                    />
                  </TableCell> */}
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
                         {++i}
                      
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                  {complaint.subject}
                  </TableCell>
                  <TableCell>
                  {complaint.content}
                  </TableCell>
                  <TableCell>
                    {complaint.createddate}
                  </TableCell>
                  <TableCell>
                    {complaint.replydate}
                  </TableCell>
                  <TableCell>
                    <Visibility onClick={()=>ViewFunc(complaint)}/>
                   
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
    </Card>
    </Container>
    </Box>
   <ToastContainer />
   </>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
