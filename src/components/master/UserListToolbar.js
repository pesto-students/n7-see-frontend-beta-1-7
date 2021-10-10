import {
  Box,
  Button,
  Card,
  CardHeader,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Divider
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';

const UserListToolbar = (props) => (
  <Box {...props}>
    <Box sx={{ mt: 3 }}>
      <Card>
              <CardHeader
                title="User List"
              />
              <Divider />
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search customer"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
);

export default UserListToolbar;
