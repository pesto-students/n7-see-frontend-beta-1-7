import { v4 as uuid } from 'uuid';
import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
const products = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: moment().subtract(2, 'hours')
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: moment().subtract(3, 'hours')
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: moment().subtract(5, 'hours')
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: moment().subtract(9, 'hours')
  }
];


const mycategory =  {
    id: uuid(),
    name: 'My Category',
    imageUrl: '/static/images/products/product_6.png',
    updatedAt: moment().subtract(2, 'hours')
  }
const LatestCategory = (props) => {
  const [data,setData]=useState(props.data)
  const navigate = useNavigate();
  const handleViewAllRequest=()=>{
    navigate('/app/category', { replace: true });
  }
  return(
  <Card {...props}>
    <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Category"
    />
    <Divider />
    <List>
      {data.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product._id}
        >
          <ListItemAvatar>
            <img
              alt={mycategory.name}
              src={mycategory.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.category}
            // secondary={`Updated ${product.updatedAt.fromNow()}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
    <Divider />
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

export default LatestCategory;
