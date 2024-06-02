'use client';

import { Box, Card, Divider, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { NavBar } from '@/components/Navbar';

function ReactPage() {

    return (
        <div className='App'>

            <NavBar/>

            <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 7}}>

                <Typography display='swap' variant = 'h3' sx = {{mt:5, mb:4, px:4, textShadow: '1px 1px 2px black', fontFamily:'Josefin Sans', fontWeight:300}} color = 'white'>
                    React
                </Typography>

                <Divider sx={{bgcolor:"white"}}/>

                <Typography display='swap' variant='h5' sx={{mt:7, px:5, fontFamily:'Josefin Sans', fontWeight:300}}>
                    This whole website was constructed using React, Material UI, and custom CSS classes.
                </Typography>

            </Box>


        </div>
    )
}

export default ReactPage;