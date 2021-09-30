import React, { useState } from 'react';

// material-ui
import { makeStyles } from '@material-ui/styles';
import {
  Avatar, Box, ButtonBase, Card, CardContent, Grid, InputAdornment, OutlinedInput, Popper
} from '@material-ui/core';

// third-party
import PopupState, { bindPopper, bindToggle } from 'material-ui-popup-state';

// project imports

// assets
import { IconAdjustmentsHorizontal, IconSearch, IconX } from '@tabler/icons';

// style constant
const useStyles = makeStyles((theme) => ({
  searchControl: {
    height: '45px',
    width: '100%',
    // marginLeft: '16px',
    paddingRight: '16px',
    paddingLeft: '16px',
    '& input': {
      background: 'transparent !important',
      paddingLeft: '5px !important'
    },
  },
  startAdornment: {
    fontSize: '1rem',
  },
  headerAvatar: {
    commonAvatar: {
      cursor: 'pointer',
      borderRadius: '8px'
    },
    mediumAvatar: {
      width: '30px',
      height: '30px',
      fontSize: '1.2rem'
    },
    background: '#7e4dfc',
    color: '#5e35b1',
    '&:hover': {
      background: '#000',
      color: '#fff'
    }
  },
  closeAvatar: {
    commonAvatar: {
      cursor: 'pointer',
      borderRadius: '8px'
    },
    mediumAvatar: {
      width: '34px',
      height: '34px',
      fontSize: '1.2rem'
    },
    background: '#fbe9e7',
    color: '#d84315',
    '&:hover': {
      background: '#d84315',
      color: '#fbe9e7'
    }

  },
  popperContainer: {
    zIndex: 1100,
    width: '99%',
    top: '-55px !important',
    padding: '0 12px',
  },
  cardContent: {
    padding: '12px !important'
  },
  card: {
    background: '#fff',
  },
}));

// ===========================|| SEARCH INPUT ||=========================== //

const SearchSection = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState('');

  const respSearchFunc=()=>{
    props.reqSearch(value)
  }
  
  return (
    <>

      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <OutlinedInput
          className={classes.searchControl}
          id="input-search-header"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          startAdornment={(
            <InputAdornment position="start">
              <IconSearch stroke={1.5} size="1rem" className={classes.startAdornment} />
            </InputAdornment>
                      )}
          endAdornment={(
            <InputAdornment position="end">
              <ButtonBase sx={{ borderRadius: '7px' }} onClick={()=>respSearchFunc()}>
                <Avatar
                  variant="rounded"
                  className={classes.headerAvatar}
                  style={{
                      backgroundColor: '#EDE7F6', color: '#000', fontSize: '7px', width: '30px', height: '30px'
                    }}
                >
                  <IconAdjustmentsHorizontal stroke={1.5} size="1.3rem" />
                </Avatar>
              </ButtonBase>
            </InputAdornment>
                      )}
          aria-describedby="search-helper-text"
          inputProps={{
            'aria-label': 'weight'
          }}
        />
      </Box>
    </>
  );
};

export default SearchSection;
