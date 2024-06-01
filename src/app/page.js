'use client';

import { NavBar } from '@/components/Navbar';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
// import { Josefin_Sans } from 'next/font/google';

// const font = Josefin_Sans({ subsets: ['latin'] });

export default function Home({children}) {
  return (
    <div className="App"
      style = {{position:'relative', top:0}}
    >
      
      <div className="background-image"/>

        <NavBar/>

        <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 5}}>

          <Typography variant = 'h4' sx = {{mt:6, fontFamily:'Josefin_Sans'}} color = 'white'>
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
