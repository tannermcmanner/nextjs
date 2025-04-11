'use client';

import { NavBar } from '@/components/Navbar';
import { Box, Fade, Slide, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';


export default function Home() {

  const [checked, setChecked] = useState(false);
  const containerRef = React.useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChecked(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App"
      style = {{position:'relative', top:0}}
    >
      
      <div className="background-image">

        <NavBar/>

        <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 5}}>

          <Box ref={containerRef}>
            <Fade in={checked} timeout={700}>
              <div>
                <Slide direction='up' in={checked} container={containerRef.current} timeout={500}>
                  <Typography display='swap' variant='h4' sx={{mt:3, textShadow: '1px 1px 2px black', fontFamily:'Josefin Sans', fontWeight:300}} color='white'>
                    Hello, my name is
                  </Typography>
                </Slide>
              </div>
            </Fade>
          </Box>

          <Box ref={containerRef}>
            <Fade in={checked} timeout={700} style={{transitionDelay:200}}>
              <div>
                <Slide direction='up' in={checked} container={containerRef.current} timeout={500} style={{transitionDelay:200}}>
                  <Typography display='swap' variant = 'h1' sx = {{mt:2, px:4, textShadow: '1px 1px 3px black', fontFamily:'Josefin Sans', fontWeight:200, fontSize:{xs: '4rem', sm: '4.5rem', md: '5rem', lg: '6rem'}}} color = 'white'>
                    TANNER McNATT
                  </Typography>
                </Slide>
              </div>
            </Fade>
          </Box>

          <Box ref={containerRef}>
            <Fade in={checked} timeout={700} style={{transitionDelay:450}}>
              <div>
                <Slide direction='up' in={checked} container={containerRef.current} timeout={500} style={{transitionDelay:450}}>
                  <Typography display='swap' variant = 'h5' sx = {{px:4, textShadow: '1px 1px 2px black', fontFamily:'Josefin Sans', fontWeight:300}} color = 'white'>
                    Web Developer Specializing in Frontend Design
                  </Typography>
                </Slide>
              </div>
            </Fade>
          </Box>
        </Box>
      </div>

    </div>
  );
}
