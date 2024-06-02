import { Menu } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, Box, Divider, List, ListItem, ListItemButton, ListItemText, IconButton, Button, Grid, Drawer } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const navItems = [

    {
        path: '/javascript',
        label: 'Javascript'
    },
    {
        path: '/react',
        label: 'React'
    },
    {
        path: '/about',
        label: 'About'
    },
    {
        path: '/contact',
        label: 'Contact'
    },
]

const backgroundColor = '#37aeb8'

export const NavBar = (props) => {

    const [isShowDrawer, setShowDrawer] = useState(false)

    const toggleDrawer = () => setShowDrawer(previousState=>!previousState)
    const closeDrawer = () => setShowDrawer(false)

    return(

        <AppBar  sx={{ zIndex: 2 }}
            
        >

            <Toolbar sx = {{backgroundColor:'#37aeb8'}} >

              
                <TopDrawer show={isShowDrawer} closeDrawer = {closeDrawer}/>
                  
                <Grid sx = {{
                    display: {xs:'flex', md:'none'}
                    }}
                >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer}
                    >
                        <Menu />
                    </IconButton>
                </Grid>

                <Box sx = {{flexGrow:1, display:'flex'}}>
                    <Link href = '/'  style={{textDecoration:'none', color:'white'}}>
                        <Typography display='swap' variant="h6" component="div" 
                            sx={{ 
                                textAlign:'left', 
                                ml:2, 
                                mr:'auto',
                                color:'white',
                                ':hover': {
                                    color:'#e3e3e3'
                                },
                                fontFamily:'Josefin Sans',
                                fontWeight:400,
                                fontSize:25
                            }}>
                            Home
                        </Typography>
                    </Link>
                </Box>
                <Grid sx = {{
                        display: {xs:'none', md:'flex'},
                        justifyContent:'center'
                    }}
                >
                    {navItems.map((item) => (
                        <Link key={item.label} href = {item.path} style={{textDecoration:'none', color:'white'}}>
                            <Typography  
                                variant="h6" 
                                component="div" 
                                display='swap'
                                sx={{ 
                                    flexGrow:1, 
                                    mx:2, 
                                    color:'white',
                                    ':hover': {
                                        color:'#e3e3e3'
                                    },
                                    fontFamily:'Josefin Sans',
                                    fontWeight:400,
                                    fontSize:25
                                }} 
                                
                            >
                                {item.label}
                            </Typography>
                        </Link>
                    ))}
                </Grid>
                   
            </Toolbar>
        </AppBar>
    )
}

export const TopDrawer = ({show, closeDrawer}) => {
    return (
        <Drawer
            anchor='top'
            open={show}
            onClose={closeDrawer}
            PaperProps={{
                sx: {
                    backgroundColor: backgroundColor,
                    color: "white",
                }
            }}
        >  

            <Grid display ='flex' flexDirection='row' sx = {{pl:3, minHeight:'64px'}}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={closeDrawer}
                >
                    <Menu />
                </IconButton>
            <ListItem disablePadding>
                <ListItemButton sx={{ textAlign: 'center' }}>
                    <Link href = '/' style = {{textDecoration:'none', color:"white"}}>
                        <Typography
                            display='swap'
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontFamily:'Josefin Sans',
                                fontWeight:400,
                                fontSize:25
                            }}>
                            Home
                        </Typography>
                    </Link>

                </ListItemButton>
            </ListItem>
            </Grid>
           
            
            
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link key={item.label} href = {item.path} style = {{textDecoration:'none', color:"white"}}>
                                <Typography
                                    display='swap'
                                    variant="h6"
                                    component="div"
                                    sx={{
                                        flexGrow: 1,
                                        mx:2,
                                        fontFamily:'Josefin Sans',
                                        fontWeight:400,
                                        fontSize:25
                                    }}>
                                    {item.label}
                                </Typography>
                            </Link>

                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
    </Drawer>
   )
}

