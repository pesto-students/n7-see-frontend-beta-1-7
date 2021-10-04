import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from './Logo';

const MainNavbar = (props) => (
  <AppBar
    elevation={0}
    {...props}
    style={{backgroundColor:"#242A37"}}
  >
    <Toolbar sx={{ height: 64 }}>
      <RouterLink to="/">
        {/* <Logo /> */}
      </RouterLink>
    </Toolbar>
  </AppBar>
);

export default MainNavbar;
