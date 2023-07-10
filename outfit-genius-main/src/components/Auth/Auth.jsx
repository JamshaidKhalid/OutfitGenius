import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Login from './Login';
import SignUp from './Signup';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function Auth() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'3rem' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example">
        <LinkTab label="Sign Up" value={0} />
        <LinkTab label="Login" value={1}/>
      </Tabs>
    </Box>
    {value === 0 && <SignUp />}
    {value === 1 && <Login />}
    </>
  );
}