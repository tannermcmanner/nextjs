'use client';

import { Box, Card, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { NavBar } from '@/components/Navbar';
import Image from 'next/image';

function AboutPage() {

  return (
    <div className="App">

        <NavBar/>

        <Box sx = {{zIndex:2, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 7}}>

          <Grid container>

            <Grid xs = {12} >

              <Typography display='swap' variant='h3' sx={{mt:5, mb:4, fontFamily:'Josefin Sans', fontWeight:300}} color='white'>
                About Me
              </Typography>

              <Divider sx={{bgcolor:"white"}}/>

            </Grid>

            <Grid container display="flex">
              <Grid item xs={12} md={4} sx={{pt: 5, pl: 5, }}>
                <Card  
                  className='box-shadow'
                  sx = {{
                    height:'100%', borderRadius:4,  overflow: 'hidden',position: 'relative', 
                    minHeight:'200px'
                  }} 
                >
                  <img
                    src="/images/tanner.jpg"
                    alt="Your Image Description"
                    style={{
                      width: '100%',         // Make the image take up 100% of the grid item's width
                      objectFit: 'contain',  // Object fit can be "cover", "contain", "none", etc.
                      position: 'absolute',  // Position absolute to fit within the parent's relative positioning
                      top: -50,
                      left: 0,
                     
                    }}
                  />
                </Card>
              </Grid>
            
              <Grid xs = {12} md = {8}>
                <Typography display='swap' variant='h5' color='white' sx={{m:5, width:550, textAlign:'left', fontFamily:'Josefin Sans', fontWeight:300}}>
                  My name is Tanner McNatt. I am a software engineer specializing in front-end web development. I am proficient in NodeJS, HTML, CSS, React, and Material UI. Due to my background in the arts, I really enjoy the design aspect of web development. I am an independent learner who can understand new concepts quickly. I am open to learning new programing languages and frameworks.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
    </div>
  );
}

export default AboutPage;