import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import './Navbar.css'
import {useTheme, Box, Typography, Button, Switch, styled} from '@mui/material';
import {Menu, Close} from '@mui/icons-material';

export default function Navbar({mode, setMode}) {
    const theme = useTheme()
    const [trigger, setTrigger] = useState(false)

    const CustomButton = styled('a')(({theme})=>({
        padding:'0.5rem 1.5rem',
        color: mode=='light'?'black':'white',
        display:'none',
        fontSize:'1rem',
        borderRadius:'0.3rem',
        fontWeight:'500',
        textDecoration:'none',
        [theme.breakpoints.up('md')]:{
            display:'flex',
        },
        backgroundImage:
            mode === 'light'?
            'linear-gradient(90deg, rgba(0, 0, 0, 0.42) 0%, rgba(165, 215, 232, 0) 100%)':
            'linear-gradient(90deg, rgba(255, 255, 255, 0.42) 0%,rgba(0, 0, 0, 0) 100%)',
        backgroundSize: '0 100%',
        backgroundRepeat: 'no-repeat',
        transition: '0.3s',
        '&:hover': {
            backgroundSize: '100% 100%',
        },
    }))

    const CustomGrid = styled(Grid)(({theme})=>({
        padding: '1.5rem',
        [theme.breakpoints.up('sm')]:{
            padding: '3rem 6rem'
        }
    }))

    const SmoothSwitch = styled(Switch)(({theme})=>({
        transition:'0.3s'
    }))

    const CustomTypography = styled(Typography)(({theme})=>({
        color: mode=='light'?'black':'white',
        fontSize:'1.5rem',
        fontWeight:'600',
        [theme.breakpoints.up('sm')]:{
            fontSize:'2.5rem',
        }
    }))

    const CutomMenuItem = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',

        [theme.breakpoints.down('md')]:{
            display:'none'
        }
    }))

    const CutomHiddenBox = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        background: 'rgba(255, 255, 255 0.3)', // Semi-transparent background
        backdropFilter: 'blur(10px)',
        position:'fixed',
        width:'100vw',
        paddingBlock: '2rem',
        borderTop: '1px solid rgba(232, 232, 232, 0.3)',
        transition: '0.3s',
        zIndex:'100',
        bottom:0,
    }))

    const CutomHiddenBoxButton = styled(Button)(({theme})=>({
        padding:'0.5rem 1.5rem',
        color: mode=='light'?'black':'white',
        fontSize:'1rem',
        fontWeight:'500',
        width: '100%',
        backgroundImage:
            mode === 'light'?
            'linear-gradient(90deg, rgba(0, 0, 0, 0.42) 0%, rgba(165, 215, 232, 0) 100%)':
            'linear-gradient(90deg, rgba(255, 255, 255, 0.42) 0%,rgba(0, 0, 0, 0) 100%)',
        backgroundSize: '0 100%',
        backgroundRepeat: 'no-repeat',
        transition: '0.3s',
        '&:hover': {
            backgroundSize: '100% 100%',
        },
    }))

    const CustomMenuBurger = styled(Box)(({theme})=>({
        display:'none',
        [theme.breakpoints.down('md')]:{
            display:'flex'
        }
    }))

    const onHanldeBurgerClick = ()=>{
        setTrigger((p)=>!p)
        setBottom((p)=>!p)
    }


  return (
    <>
      <CustomGrid className='NavBarMainGrid' id='top'>
        <Box className='NavBox'>
            <Box className='IconTitle'>
                <img src="/alien.png" alt="alien"/>
                <CustomTypography variant='h3'>
                    PORTFOLIO
                </CustomTypography>
            </Box>
            <Box className='Menus'>
                <CutomMenuItem>
                    <Box className='MenuItem'>
                        <CustomButton href="#project" className='Button'>Projects</CustomButton>
                        <CustomButton href="#contact" className='Button'>Contact</CustomButton>
                    </Box>
                    <Box className='SwitchBox'>  
                        <SmoothSwitch checked={mode === 'dark'} 
                        onChange={()=>setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))}/>
                    </Box>
                </CutomMenuItem>
                <CustomMenuBurger onClick={onHanldeBurgerClick}>
                    {trigger?<Close color='warning' fontSize='large'/>:<Menu fontSize='large'/>}
                </CustomMenuBurger>
            </Box>  
        </Box>
      </CustomGrid>
      <CutomHiddenBox
       sx={{scale:trigger?'1':'0'}}
       className='CutomHiddenBox'>
            <Box className='MenuItem'>
                <CutomHiddenBoxButton  href="#project" onClick={()=>setTrigger((p)=>!p)}>Projects</CutomHiddenBoxButton>
                <CutomHiddenBoxButton  href="#contact" onClick={()=>setTrigger((p)=>!p)}>Contact</CutomHiddenBoxButton>
            </Box>
            <Box className='SwitchBox'>  
                <SmoothSwitch checked={mode === 'dark'} 
                onChange={()=>setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))}/>
            </Box>
      </CutomHiddenBox>
    </>
  )
}
