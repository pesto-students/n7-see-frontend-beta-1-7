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
import getInitials from '../../utils/getInitials';
import {
  Delete,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import { ToastContainer, toast } from 'material-react-toastify';
import 'material-react-toastify/dist/ReactToastify.css';
import AddCategory from '../../components/master/AddCategory';
const CategoryListResults = ({ ...rest }) => {
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
      await axios.post('http://localhost:4000/admin/getallcategory',{page:page,limit:limit}).then((resp) => {
        console.log(resp);
        setLoadingIndicator(false);
        setNewData(resp.data.response.category);
        setTotalCount(resp.data.response.count)
        setReRender(false)
      }).catch((e) => {
        setLoadingIndicator(false);
        setReRender(false)
        toast.error('Something Went Wrong', { autoClose: 3000, });
      });
      // setUser(result.data);
    };

    if(rerender)
    {
     
      fetchData();
    }
    
    
  }, [rerender]);


  const deleteCategoryFunc = (values) => {
    
    axios.get(`http://localhost:4000/admin/deleteCategory/${values}`).then((resp) => {
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
    <AddCategory setReRender={setReRender} />
    <Box sx={{ pt: 3 }}>
    <Card {...rest}>
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
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newData.length>0?newData.slice(0, limit).map((category,i) => (
                <TableRow
                  hover
                  key={i}
                  selected={selectedCustomerIds.indexOf(category._id) !== -1}
                >
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
                    {category.category}
                  </TableCell>
                  <TableCell>
                  <IconButton
                    edge="end"
                    size="small"
                  >
                    <Delete style={{ color: "red" }} onClick={()=>deleteCategoryFunc(category._id)} />
                  </IconButton>
                  </TableCell>
                </TableRow>
              )):""}
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

CategoryListResults.propTypes = {
  category: PropTypes.array
};

export default CategoryListResults;
