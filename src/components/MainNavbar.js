import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar,Typography } from '@material-ui/core';
import clsx from 'clsx';
import classNames from 'classnames';
import Logo from './Logo';
import '../assets/autumn-in-november.regular.ttf' 
const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
    style={{backgroundColor:"#242A37"}}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
      <Typography component="h1" variant="h6" color="inherit" noWrap>
          <div style={{
            color:"#FF8367",
            fontSize:"24px",
            fontFamily:"AssistantRegular"
          }}
            >
          Serve End
          </div>
          </Typography>
        {/* <Logo /> */}
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
