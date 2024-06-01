'use client';

import { useState } from 'react';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import { MyAccordion } from '@/components/Accordion';
import { NavBar } from '@/components/Navbar';



function JavaScriptPage() {

  const [currentTab, setCurrentTab] = useState(3)

  const changeTab = (event, newTab) => {
    setCurrentTab(newTab)
  }

  return (
    <div className="App"
        style = {{position:'relative'}}
    >
    
        <NavBar/>

        <Box sx = {{zIndex:1, position: 'relative', display:'flex', justifyContent:'center', flexDirection:'column', textAlign:'center', mt: 7}}>

            <Typography variant = 'h3' sx = {{my:5}} color = 'white'>
                JavaScript Examples
            </Typography>

            <Grid container sx = {{width:"100", mt:-1}} display='flex' flexDirection='column'>

        
                <Box sx={{ borderBottom: 1, borderColor: 'gray', width:'100%' }}>
                    <Grid item md = {8} xs = {12} sx = {{mx:'auto'}} >
                        
                        
                        <Tabs 
                        value={currentTab} 
                        onChange={changeTab} 
                        aria-label="basic tabs example" 
                        textColor=""
                        sx = {{color:'white'}}
                        variant='fullWidth'
                        TabIndicatorProps = {{
                            sx: {backgroundColor:'#37aeb8'}
                        }}
                        >
                        <Tab label="Conditionals & Functions" value={0}/>
                        <Tab label="Arrays & Loops"  value={3} />
                        <Tab label="Objects"  value={6} />
                        </Tabs>
                    </Grid>
                </Box>

                {/* Tab 0 - Conditionals  */}
                {
                currentTab === 0 && (
                <>
                    <Typography variant = 'h4' sx = {{my:5}} color = 'white'>
                    Conditionals &amp; Functions
                    </Typography>
                    <MyAccordion
                    title = 'Conditional Logic 1'
                    fiddleSrc = '//jsfiddle.net/tannermcmanner/0khzbswu/7/embedded/js,result/'
                    />
                    <MyAccordion
                    title = 'Conditional Logic 2'
                    fiddleSrc = '//jsfiddle.net/tannermcmanner/baw20j1L/7/embedded/js,result/'
                    />
                    <MyAccordion
                    title = 'Functions 1'
                    fiddleSrc = '//jsfiddle.net/tannermcmanner/8throkbj/1/embedded/js,result/'
                    />
                    <MyAccordion
                    title = 'Functions 2'
                    fiddleSrc = '//jsfiddle.net/tannermcmanner/8cru0wat/1/embedded/js,result/'
                    />
                </>)
                }

                {/* Tab 3 - Arrays  */}
                {
                currentTab === 3 && (
                <>
                    <Typography variant = 'h4' sx = {{my:5}} color = 'white'>
                    Arrays &amp; Loops
                    </Typography>
                    <MyAccordion
                    title = 'Arrays 1'
                    fiddleSrc = '//jsfiddle.net/tannermcmanner/uwjs0qt5/1/embedded/js,result/'
                    />
                    <MyAccordion
                    title = 'Arrays 2'
                    fiddleSrc = '//jsfiddle.net/tannermcmanner/deuzjvLs/2/embedded/js,result/'
                    />
                    <MyAccordion
                    title = 'Iterator Functions'
                    fiddleSrc = '//jsfiddle.net/tannermcmanner/a9m70peh/2/embedded/js,result/'
                    />
                </>)
                
                }


                {
                currentTab === 6 && (
                <>
                    <Typography variant = 'h4' sx = {{my:5}} color = 'white'>
                    Objects
                    </Typography>
                    <MyAccordion
                    title = 'Objects 1'
                    fiddleSrc = '//jsfiddle.net/tannermcmanner/n9j3bLqa/1/embedded/js,result/'
                    />
                    <MyAccordion
                    title = 'Objects 2'
                    fiddleSrc = '//jsfiddle.net/tannermcmanner/jyeLst9k/2/embedded/js,result/'
                    />
                </>)
                }

                
            </Grid>

      </Box>
  </div>
  );
}

export default JavaScriptPage