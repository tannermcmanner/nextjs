'use client';

import { Box, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { NavBar } from '@/components/Navbar';

function AboutPage() {

  return (
    <div className="App">

        <NavBar/>

        <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 7}}>

        <Typography variant='h3' sx={{mt:5, mb:4}} color='white'>
          About Me
        </Typography>

        <Divider sx={{bgcolor:"white"}}/>

        <Box sx={{display:'flex', flexWrap: 'wrap'}}>
          <Box sx={{height:350, width:450}}>
            {/* image="C:\Users\tanne\Pictures\Tanner.jpg" */}
          </Box>
          <Typography variant='h5' color='white' sx={{ m:5, width:550, textAlign:'left'}}>
            My name is Tanner McNatt. I&apos;m a software engineer specializing in front end web development. I&apos;m proficient in JaveScript, HTML, CSS, React, and Material UI. I&apos;m naturally very creative, and that creativity sparks my interest and excitment for coding. My curiosity helps me explore and understand new concepts quickly!
          </Typography>
        </Box>

        </Box>
    </div>
  );
}

export default AboutPage;
