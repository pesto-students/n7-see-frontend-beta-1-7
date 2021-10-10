import PropTypes from 'prop-types';
import React from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
  Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography, IconButton,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// assets
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';

// style constant
const useStyles = makeStyles((theme) => ({
  card: {
    overflow: 'hidden',
    position: 'relative',
    '&:after': {
      content: '""',
      position: 'absolute',
      width: '210px',
      height: '210px',
      borderRadius: '50%',
      top: '-30px',
      right: '-180px'
    },
    '&:before': {
      content: '""',
      position: 'absolute',
      width: '210px',
      height: '210px',
      borderRadius: '50%',
      top: '-160px',
      right: '-130px'
    }
  },
  content: {
    padding: '12px !important'
  },
  avatar: {
    // ...theme.typography.commonAvatar,
    // ...theme.typography.largeAvatar,
    backgroundColor: '#fff',
    color: '#000'
  },
  primary: {
    fontSize: '8px',
    color: '#000'
  },
  secondary: {
    color: '#000',
    marginTop: '5px'
  },
  padding: {
    paddingTop: 0,
    paddingBottom: 0
  }
}));

// ===========================|| DASHBOARD - TOTAL INCOME DARK CARD ||=========================== //

const CategoryCard = ({ isLoading }) => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.padding}>
        <ListItem alignItems="center" disableGutters className={classes.padding}>
          <ListItemAvatar>
            <Avatar variant="rounded" className={classes.avatar} style={{ backgroundColor: '#fff', color: '#000', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
              <TableChartOutlinedIcon fontSize="inherit" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            className={classes.padding}
            sx={{
              mt: 0.45,
              mb: 0.45
            }}
            primary={(
              <Typography className={classes.primary} style={{ fontSize: '10px' }}>
                Home
              </Typography>
                                  )}
            secondary={(
              <Typography variant="subtitle2" className={classes.secondary} style={{ fontSize: '10px' }}>
                MyCategory
              </Typography>
                                  )}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      </List>

    </>
  );
};

CategoryCard.propTypes = {
  isLoading: PropTypes.bool
};

export default CategoryCard;
