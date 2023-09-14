import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{height: '60px', backgroundColor: "white", px: '80px', boxShadow: '0px 3px 6px #0000001A'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "primary.main" }}>
            <Link href={'/'}>FundsIndia</Link>
          </Typography>
          <div className='font-poppins text-primary font-semibold'>Contact Us</div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}