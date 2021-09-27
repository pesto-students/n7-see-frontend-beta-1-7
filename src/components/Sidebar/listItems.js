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
        <Link to="/">
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
    {/* <Link to="/sell">
    <ListItem button>
      <ListItemIcon>
      <IconBrandStripe stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Sell" />
    </ListItem>
    </Link>
    <Link to="/buy">
    <ListItem button>
      <ListItemIcon>
      <IconBold stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Buy" />
    </ListItem>
    </Link> */}
    <Link to="/user/request">
      <Tooltip title="My Request" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconSend stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="Request" />
        </ListItem>
      </Tooltip>
    </Link>
    <Link to="/user/interest">
      <Tooltip title="My Interest" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconHeart stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="Interest" />
        </ListItem>
      </Tooltip>
    </Link>
    <Link to="/user/complaint">
      <Tooltip title="Complaint" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconAlertCircle stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="Complaint" />
        </ListItem>
      </Tooltip>
    </Link>
    {/* <Link to="/reports">
    <ListItem button>
      <ListItemIcon>
      <IconAlertCircle stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    </Link> */}
    <Link to="/user/search">
      <Tooltip title="Search" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconFilter stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
      </Tooltip>
    </Link>
    <Link to="/user/viewall">
      <Tooltip title="Dashboard" placement="top-end">
        <ListItem button>
          <ListItemIcon>
            <IconFilter stroke={1.5} size="1.3rem" />
          </ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
      </Tooltip>
    </Link>
    {/* <Link to="/profile">
    <ListItem button>
      <ListItemIcon>
      <IconBrandGravatar stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Search" />
    </ListItem>
    </Link> */}
    {/* <Link to="/details">
    <ListItem button>
      <ListItemIcon>
      <IconBrandGravatar stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Details" />
    </ListItem>
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
