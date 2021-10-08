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
  Divider
} from '@material-ui/core';
import getInitials from '../../utils/getInitials';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import {
  Reply,
} from '@material-ui/icons';
import AddReply from '../../components/master/AddReply';
import { myApi } from 'src/Api';
const CustomerListResults = ({ ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);  
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [rerender, setReRender] = useState(true);
  const [showReplyComponent, setShowReplyComponent] = useState(false);
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
      await axios.post(`${myApi}/admin/getallcomplaints`,{page:page,limit:limit}).then((resp) => {
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

  const ReplyFunc=(complaint)=>{
    setShowReplyComponent(true);
    setShowSelectedData(complaint)

  }

  return (
    <>
   { showReplyComponent&&
   <AddReply setReRender={setReRender} setShowReplyComponent={setShowReplyComponent} showSelectedData={showSelectedData}/>
   }
    
    <br/>
    <Card {...rest}>
       <CardHeader
                title="Complaint List"
              />
              <Divider/>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
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
                  From
                </TableCell>
                <TableCell>
                  Subject
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
                  {complaint.name}
                   
                  </TableCell>
            
                  <TableCell>
                  {complaint.subject}
                  </TableCell>
                  <TableCell>
                    {complaint.createddate}
                  </TableCell>
                  <TableCell>
                    {complaint.replydate}
                  </TableCell>
                  <TableCell>
                    <Reply onClick={()=>ReplyFunc(complaint)}/>
                   
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
   </>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
