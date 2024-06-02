'use client';

import { Box, Card, CardContent, CardMedia, Divider, Grid, Link, Tab, Tabs, Typography, } from '@mui/material';
import { MyAccordion } from '@/components/Accordion';
import { useState } from 'react';
import { Drawer, NavBar } from '@/components/Navbar';
import { AlternateEmail, Person, Phone } from '@mui/icons-material';

function ContactPage() {

  return (
    <div className="App">

        <div className='contact-background'>
      
            <NavBar/>

            <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 7}}>

                <Typography display='swap' variant = 'h3' sx = {{mt:5, mb:4, px:4, textShadow: '1px 1px 2px black', fontFamily:'Josefin Sans', fontWeight:300}} color = 'white'>
                    Let&apos;s keep in touch!
                </Typography>

                <Divider sx={{bgcolor:"white"}}/>

                <Box sx={{ mt:3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Person sx={{ color: 'white', fontSize: 40 }} />
                        <Card sx={{ mt:3, mx:4, mb:6, width: 300, height: 250, opacity: 0.7 }}>
                            <CardContent>
                                <Typography display='swap' sx={{px:1, mt:4, fontFamily:'Josefin Sans', fontWeight:400}}>
                                    Email: 
                                </Typography>
                                    <Link display='swap' sx={{fontFamily:'Josefin Sans', fontWeight:400}} href="mailto:tannermcmanner@gmail.com">
                                        tannermcmanner@gmail.com
                                    </Link>
                                <Typography display='swap' sx={{px:1, mt:5, fontFamily:'Josefin Sans', fontWeight:400}} gutterBottom>
                                    Phone Number:
                                </Typography>
                                <Link display='swap' sx={{fontFamily:'Josefin Sans', fontWeight:400}} href="tel:+12082866723" color="inherit">
                                    208-286-6723
                                </Link>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* <Box sx={{ display: {md:'block', lg:'none'}, flexDirection: 'column', alignItems: 'center', width:'100%' }}>
                        <Grid xs = {12} >
                            <Divider sx = {{borderColor:'white', height:'1px', width:'100vh'}}/>
                        </Grid>
                    </Box> */}

                </Box>
            </Box>
        </div>
      
    </div>
  );
}

export default ContactPage;
