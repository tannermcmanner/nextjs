'use client';

import { Box, Card, CardContent, CardMedia, Divider, Fade, Grid, Link, Slide, Tab, Tabs, Typography, } from '@mui/material';
import { MyAccordion } from '@/components/Accordion';
import React, { useEffect, useState } from 'react';
import { Drawer, NavBar } from '@/components/Navbar';
import { AlternateEmail, Phone } from '@mui/icons-material';

function ContactPage() {

    const [checked, setChecked] = useState(false);
    const containerRef = React.useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setChecked(true);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">

            <div className='contact-background'>
        
                <NavBar/>

                <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt:7, overflow:'hidden'}}>

                    <Typography display='swap' variant = 'h3' sx = {{mt:5, mb:4, px:4, textShadow: '1px 1px 2px black', fontFamily:'Josefin Sans', fontWeight:300}} color = 'white'>
                        Let&apos;s keep in touch!
                    </Typography>

                    <Divider sx={{bgcolor:"white"}}/>

                    <Box sx={{ mt:3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex'}} ref={containerRef}>
                                <Fade in={checked} timeout={700} style={{transitionDelay:200}}>
                                    <div>
                                        <Slide direction='up' in={checked} container={containerRef.current} timeout={500}>
                                            <div>
                                                <AlternateEmail sx={{ mx:2, color: 'white', fontSize: 40 }} />
                                                <Phone sx={{ mx:2, color: 'white', fontSize: 40 }} />
                                            </div>
                                        </Slide>
                                    </div>
                                </Fade>
                            </Box>
                            <Box ref={containerRef}>
                                <Fade in={checked} timeout={700} style={{transitionDelay:400}}>
                                    <div>
                                        <Slide direction='up' in={checked} container={containerRef.current} timeout={500} style={{transitionDelay:200}}>
                                            <Card sx={{ mt:3, mx:4, mb:6, width: 300, height: 250, opacity: 0.8 }}>
                                                <CardContent>
                                                    <Typography display='swap' sx={{px:1, mt:4, fontSize:20, fontFamily:'Josefin Sans', fontWeight:400}}>
                                                        Email:
                                                    </Typography>
                                                        <Link display='swap' sx={{fontSize:20, fontFamily:'Josefin Sans', fontWeight:400}} href="mailto:tannermcmanner@gmail.com">
                                                            tannermcmanner@gmail.com
                                                        </Link>
                                                    <Typography display='swap' sx={{fontSize:20, px:1, mt:5, fontFamily:'Josefin Sans', fontWeight:400}} gutterBottom>
                                                        Phone Number:
                                                    </Typography>
                                                    <Link display='swap' sx={{fontSize:20, fontFamily:'Josefin Sans', fontWeight:400}} href="tel:+12082866723" color="inherit">
                                                        208-286-6723
                                                    </Link>
                                                </CardContent>
                                            </Card>
                                        </Slide>
                                    </div>
                                </Fade>
                            </Box>
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
