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
  Typography
} from '@material-ui/core';
import {
  Delete,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import getInitials from '../../utils/getInitials';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import AddCity from '../../components/master/AddCity';
import { myApi } from 'src/Api';
const CityListResults = ({ ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);  
  const [loadingIndicator, setLoadingIndicator] = useState(true);
  const [rerender, setReRender] = useState(true);
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
      await axios.post(`${myApi}/admin/getallcity`,{page:page,limit:limit}).then((resp) => {
        console.log(resp);
        setLoadingIndicator(false);
        setNewData(resp.data.response.city);
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

  const deleteCityFunc = (values) => {
    
    axios.get(`${myApi}/admin/deleteCity/${values}`).then((resp) => {
      console.log('resp');
      if (resp.status == 200) {
        console.log('resp', resp);
        toast.success(resp.data.message, { autoClose: 3000, });
        setReRender(true)
        // history.push('/');
        // navigate('/app/dashboard', { replace: true });
      } else {
        toast.error(resp.data.message, { autoClose: 3000, });
        console.log(resp);
      }
    }).catch((e) => {
      toast.error('Failed..!!', { autoClose: 3000, });
    });
  };
  

  return (
    <>
    <AddCity setReRender={setReRender}/>
    <Box sx={{ pt: 3 }}>
    <Card {...rest}>
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
                  City
                </TableCell>
                <TableCell>
                  Latitude
                </TableCell>
                <TableCell>
                  Longitude
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newData.slice(0, limit).map((city,i) => (
                <TableRow
                  hover
                  key={i}
                  selected={selectedCustomerIds.indexOf(city._id) !== -1}
                >
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(city._id) !== -1}
                      onChange={(event) => handleSelectOne(event, city._id)}
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
                    {city.city}
                  </TableCell>
                  <TableCell>
                  {city.latitude}
                  </TableCell>
                  <TableCell>
                  {city.longitude}
                  </TableCell>
                  <TableCell>
                  <IconButton
                    edge="end"
                    size="small"
                  >
                    <Delete style={{ color: "red" }} onClick={()=>deleteCityFunc(city._id)}/>
                  </IconButton>
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
    </Box>
    </>
  );
};

CityListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CityListResults;
