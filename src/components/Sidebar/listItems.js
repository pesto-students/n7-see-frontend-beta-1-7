import React from 'react';
import { Link } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from "@material-ui/icons/Settings";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { IconDashboard, IconSettings, IconBrandStripe,IconBrandSkype,IconBold,IconBrandProducthunt,IconFilter,IconChartInfographic,IconBrandGravatar } from '@tabler/icons';
export const mainListItems = (
  <div>
          <List>
        <Link to="/">
          <ListItem button>
            <ListItemIcon>
            <IconDashboard stroke={1.5} size="1.3rem" />
              {/* <DashboardIcon /> */}
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>
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
    <Link to="/request">
    <ListItem button>
      <ListItemIcon>
      <IconBold stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Request" />
    </ListItem>
    </Link>
    <Link to="/interest">
    <ListItem button>
      <ListItemIcon>
      <IconBold stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Interest" />
    </ListItem>
    </Link>
    <Link to="/complaint">
    <ListItem button>
      <ListItemIcon>
      <IconBrandProducthunt stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Complaint" />
    </ListItem>
    </Link>
    <Link to="/reports">
    <ListItem button>
      <ListItemIcon>
      <IconChartInfographic stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    </Link>
    <Link to="/search">
    <ListItem button>
      <ListItemIcon>
      <IconFilter stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Search" />
    </ListItem>
    </Link>
    <Link to="/profile">
    <ListItem button>
      <ListItemIcon>
      <IconBrandGravatar stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Search" />
    </ListItem>
    </Link>
    <Link to="/details">
    <ListItem button>
      <ListItemIcon>
      <IconBrandGravatar stroke={1.5} size="1.3rem" />
      </ListItemIcon>
      <ListItemText primary="Details" />
    </ListItem>
    </Link>
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