'use client';

import { Box, Card, CardContent, Divider, Grid, Link, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import { NavBar } from '@/components/Navbar';
import Image from 'next/image';
import zIndex from '@mui/material/styles/zIndex';
import { ArticleOutlined } from '@mui/icons-material';

function AboutPage() {

  return (
    <div className="App">

        <NavBar/>

        <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 7}}>

          <Typography display='swap' variant='h3' sx={{mt:5, mb:4, textShadow: '1px 1px 2px black', fontFamily:'Josefin Sans', fontWeight:300}} color='white'>
            About Me
          </Typography>

          <Divider sx={{bgcolor:"white"}}/>

          <Box sx={{display:'flex', justifyContent:'space-evenly', flexWrap:'wrap'}}>
            <Box sx={{mt:5, pl:4}}>
              <Card  
                className='box-shadow'
                sx = {{
                  height:'300px', width:'250px', borderRadius:4,  overflow: 'hidden', position: 'relative'
                }} 
              >
                <img
                  src="/images/tanner.jpg"
                  alt="Your Image Description"
                  style={{
                    width: '100%',
                    objectFit: 'contain',
                    position: 'absolute',
                    top: -20,
                    left: 0,
                    
                  }}
                />
              </Card>
            </Box>
          
            <Box sx={{mx:20}}>
              <Typography display='swap' variant='h5' color='white' sx={{mt:5, textAlign:'center', fontFamily:'Josefin Sans', fontWeight:300}}>
                My name is Tanner McNatt. I am a software engineer specializing in front-end web development. I am proficient in NodeJS, HTML, CSS, React, and Material UI. Due to my background in the arts, I really enjoy the design aspect of web development. I am an independent learner who can understand new concepts quickly. I am open to learning new programing languages and frameworks.
              </Typography>
            </Box>

            <Box sx={{ m:6, height:180, width:200, color:'white', border:1, borderRadius:2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Box sx={{mt:2}}>
                <Typography display='swap' sx={{px:1, color:'white', fontSize:35, fontFamily:'Josefin Sans', fontWeight:400}}>
                  Resume
                </Typography>
                <Link display='swap' sx={{fontSize:20, fontFamily:'Josefin Sans', fontWeight:400}} href="mailto:tannermcmanner@gmail.com">
                  <ArticleOutlined sx={{ m:2, color:'#26e6ff', fontSize:70 }} />
                </Link>
              </Box>
            </Box>
          </Box>

        </Box>
    </div>
  );
}

export default AboutPage;
