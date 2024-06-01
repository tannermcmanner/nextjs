'use client';

import { NavBar } from '@/components/Navbar';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="App"
      style = {{position:'relative', top:0, height:"100%"}}
    >
      

      <div className="background-image"/>


        {/* Use Kanit font */}

        <NavBar/>

        <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 5}}>

          <Typography variant = 'h4' sx = {{mt:6}} color = 'white'>
            Hello, my name is
          </Typography>

          <Typography variant = 'h1' sx = {{mt:1}} color = 'white'>
            TANNER McNATT
          </Typography>

          <Typography variant = 'h5' sx = {{my:1}} color = 'white'>
            Welcome to my page, feel free to look around
          </Typography>
        </Box>
        

    </div>
  );
}
