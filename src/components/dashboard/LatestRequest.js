import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
const orders = [
  {
    id: uuid(),
    ref: 'CDD1049',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1048',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1047',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'refunded'
  },
  {
    id: uuid(),
    ref: 'CDD1046',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'pending'
  },
  {
    id: uuid(),
    ref: 'CDD1045',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  },
  {
    id: uuid(),
    ref: 'CDD1044',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'delivered'
  }
];

const LatestRequest = (props) => {
  const navigate = useNavigate();
  const handleViewAllRequest=()=>{
    navigate('/app/request', { replace: true });
  }
  return(
  <Card {...props}>
    <CardHeader title="Latest Request" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
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
                Name
              </TableCell>
              <TableCell sortDirection="desc">
              Date
                {/* <Tooltip
                  enterDelay={300}
                  title="Sort"
                >
                  <TableSortLabel
                    active
                    direction="desc"
                  >
                    Date
                  </TableSortLabel>
                </Tooltip> */}
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
            props.data.length>0?props.data.map((request,i) => (
              <TableRow
                hover
                key={i}
              >
                <TableCell>
                  {++i}
                </TableCell>
                <TableCell>
                  {request.category}
                </TableCell>
                <TableCell>
                  {request.productname}
                </TableCell>
                <TableCell>
                  {request.createddate}
                </TableCell>
                <TableCell>
                  <Chip
                    color={request.status=="Pending"?"primary":"success"}
                    label={request.status}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            )):<TableRow
            hover
          >
            <TableCell>
            No data found     
            </TableCell>
             </TableRow>
          }
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
        onClick={()=>handleViewAllRequest()}
      >
        View all
      </Button>
    </Box>
  </Card>
  )
};

export default LatestRequest;
