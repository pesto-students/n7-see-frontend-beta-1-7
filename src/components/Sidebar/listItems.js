import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Tooltip from '@material-ui/core/Tooltip';
import {
  IconDashboard, IconHeart, IconFileReport, IconSend, IconAlertCircle, IconSettings, IconBrandStripe, IconBrandSkype, IconBold, IconBrandProducthunt, IconFilter, IconChartInfographic, IconBrandGravatar
} from '@tabler/icons';

export const mainListItems = (
  <div>
    <List>
      <Tooltip title="Dashboard" placement="top">
        <Link to="/" style={{ textDecoration: 'none',color:"#000" }}>
          <ListItem button>
            <ListItemIcon>

              <IconDashboard stroke={1.5} size="1.3rem" />

              {/* <DashboardIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
      </Tooltip>
    </List>
    <Link to="/user/request" style={{ textDecoration: 'none', color:"#000" }}>
      <Tooltip title="My Request" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconSend stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="Request" />
        </ListItem>
      </Tooltip>
    </Link>
    <Link to="/user/interest" style={{ textDecoration: 'none', color:"#000"}}>
      <Tooltip title="My Interest" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconHeart stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="Interest" />
        </ListItem>
      </Tooltip>
    </Link>
    <Link to="/user/complaint" style={{ textDecoration: 'none', color:"#000"}}>
      <Tooltip title="Complaint" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconAlertCircle stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="Complaint" />
        </ListItem>
      </Tooltip>
    </Link>
    <Link to="/user/search" style={{ textDecoration: 'none', color:"#000" }}>
      <Tooltip title="Search" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconFilter stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
      </Tooltip>
    </Link>
    {/* <Link to="/user/viewall" style={{ textDecoration: 'none', color:"#000" }}>
      <Tooltip title="Dashboard" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconFilter stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="View All" />
        </ListItem>
      </Tooltip>
    </Link> */}
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
