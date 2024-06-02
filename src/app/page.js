'use client';

import { NavBar } from '@/components/Navbar';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';


export default function Home() {
  return (
    <div className="App"
      style = {{position:'relative', top:0}}
    >
      
      <div className="background-image">

        <NavBar/>

        <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 5}}>

          <Typography display='swap' variant='h4' sx={{mt:4, fontFamily:'Josefin Sans', fontWeight:300}} color='white'>
            Hello, my name is
          </Typography>

          <Typography display='swap' variant = 'h1' sx = {{mt:2, px:4, fontFamily:'Josefin Sans', fontWeight:200, fontSize: {xs: '4rem', md: '5rem', lg: '6rem'}}} color = 'white'>
            TANNER McNATT
          </Typography>

          <Typography display='swap' variant = 'h5' sx = {{px:4, fontFamily:'Josefin Sans', fontWeight:300}} color = 'white'>
            Welcome to my page, feel free to look around
          </Typography>
        </Box>
      </div>

    </div>
  );
}
