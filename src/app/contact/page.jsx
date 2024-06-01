'use client';

import { Box, Card, CardContent, CardMedia, Divider, Grid, Link, Tab, Tabs, Typography, } from '@mui/material';
import { MyAccordion } from '@/components/Accordion';
import { useState } from 'react';
import { Drawer, NavBar } from '@/components/Navbar';
import { AlternateEmail, Person, Phone } from '@mui/icons-material';

function ContactPage() {

  return (
    <div className="App">
      
        <NavBar/>

        <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 7}}>

            <Typography variant = 'h3' sx = {{my:5}} color = 'white'>
            Let&apos;s keep in touch!
            </Typography>

            <Divider sx={{bgcolor:"white"}}/>

            <Box sx={{ mt:4, display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Person sx={{ color: 'white', fontSize: 40 }} />
                    <Card sx={{ m:4, width: 300, height: 250 }}>
                    <CardMedia
                        image='C:\Users\tanne\Pictures\Headshots\Tanner\Edited Headshots\IMG_5061.jpg'
                    />
                    <CardContent>
                        <Typography>Tanner</Typography>
                    </CardContent>
                    </Card>
                </Box>

                <Box sx={{ display: {md:'block', lg:'none'}, flexDirection: 'column', alignItems: 'center', width:'100%' }}>
                    <Grid xs = {12} >
                        <Divider sx = {{borderColor:'white', height:'1px', width:'100vh'}}/>
                    </Grid>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: {xs:8, lg:0} }}>
                    <AlternateEmail sx={{ color: 'white', fontSize: 40 }} />
                    <Card sx={{ m:4, width: 300, height: 80 }}>
                        <CardContent>
                            <Typography sx={{px:1}}>
                                Email: 
                                

                            </Typography>
                            <Link href="mailto:tannermcmanner@gmail.com">
                                    tannermcmanner@gmail.com
                                </Link>
                        </CardContent>
                    </Card>
                </Box>

                <Box sx={{ display: {md:'block', lg:'none'}, flexDirection: 'column', alignItems: 'center', width:'100%' }}>
                    <Grid xs = {12} >
                        <Divider sx = {{borderColor:'white', height:'1px', width:'100vh'}}/>
                    </Grid>
                </Box>


                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: {xs:8, lg:0} }}>
                    <Phone sx={{ color: 'white', fontSize: 40 }} />
                    <Card sx={{ m:4, width: 300, height: 80 }}>
                        <CardContent display = 'flex'>
                            <Typography sx={{px:1}} gutterBottom>
                                Phone Number:
                            </Typography>
                            <Link href="tel:+12082866723" color="inherit">
                                208-286-6723
                            </Link>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Box>
      
    </div>
  );
}

export default ContactPage;
