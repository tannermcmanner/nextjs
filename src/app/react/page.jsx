'use client';

import { Box, Card, Divider, Fade, Grid, Slide, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavBar } from '@/components/Navbar';

function ReactPage() {

    const [checked, setChecked] = useState(false);
    const containerRef = React.useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setChecked(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='App'>

            <NavBar/>

            <Box sx={{zIndex:1, my:7, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', overflow:'hidden'}}>

                <Typography display='swap' variant = 'h3' sx = {{mt:5, mb:4, textShadow: '1px 1px 2px black', fontFamily:'Josefin Sans', fontWeight:300}} color = 'white'>
                    React
                </Typography>

                <Divider sx={{bgcolor:"white"}}/>
                
                <Box sx={{pb:4}} ref={containerRef}>
                    <Fade in={checked} timeout={700}>
                        <div>
                            <Slide direction='up' in={checked} container={containerRef.current} timeout={500}>
                                <Typography display='swap' variant='h5' sx={{mt:7, px:5, color:'white', fontFamily:'Josefin Sans', fontWeight:300}}>
                                    This whole website was constructed using React, Material UI, and custom CSS classes.
                                </Typography>
                            </Slide>
                        </div>
                    </Fade>
                </Box>

            </Box>


        </div>
    )
}

export default ReactPage;