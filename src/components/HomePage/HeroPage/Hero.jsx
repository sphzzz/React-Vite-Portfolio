import React, { useRef, useState, useEffect } from 'react'
import {Box, styled, Typography, Button, TextField, Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@mui/material'
import Grid from '@mui/material/Grid2'
import './Hero.css'
import bg from './bg.svg'
import CutomIconAPI from '../../ImageFetching'
import {QRCodeSVG} from 'qrcode.react';


export default function Hero({mode}) {
  const [iconColor, setIconColor] = useState('black')
  const QrRef = useRef(null)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
    setIconColor(mode=='light'?'black':'white')
  })
  
  const CustomGrid = styled(Grid)(({theme})=>({
    padding: '1.5rem',
    display:'flex',
    alignItems:'center',
    gap:'2rem',
    [theme.breakpoints.up('sm')]:{
        paddingInline: '6rem'
    },
    [theme.breakpoints.down('md')]:{
      flexDirection: 'column-reverse'
    }
  }))

  const CustomTypographyT = styled(Typography)(({theme})=>({
    color: mode=='light'?'black':'white',
    fontSize:'1.5rem',
    [theme.breakpoints.up('sm')]:{
      fontSize:'2rem',
    }
  }))

  const CustomTypographyM = styled(Typography)(({theme})=>({
    color: mode=='light'?'black':'white',
    fontSize:'2.5rem',
    [theme.breakpoints.up('sm')]:{
      fontSize:'5rem',
    }
  }))

  const CustomTypographyB = styled(Typography)(({theme})=>({
    color: mode=='light'?'grey':'lightgrey',
    fontSize:'0.8rem',
    [theme.breakpoints.up('sm')]:{
      fontSize:'1rem',
    }
  }))

  return (
    <>
      <CustomGrid className='MainHeroBox'>
          <Box className='BoxLeft'>
            <Box>
              <CustomTypographyM variant='h1' className='middle'>
                I am a passionate <span>Web & App</span> Developer.
              </CustomTypographyM>
            </Box>
            <Box display={{xs:'none', sm:'block'}}>
              <CustomTypographyB className='bottom'>
              I specialize in building dynamic web applications with React. Additionally, I have experience with 
              </CustomTypographyB>
              <CustomTypographyB className='bottom'>Python for developing desktop applications, constantly improving</CustomTypographyB>
              <CustomTypographyB className='bottom'>my skills to create seamless user experiences.  </CustomTypographyB>
            </Box>
            <Box display={{xs:'block', sm:'none'}}>
              <CustomTypographyB className='bottom'>
              I specialize in building dynamic web applications with React. Additionally, I have experience with Python for developing desktop applications, constantly improving my skills to create seamless user experiences.
              </CustomTypographyB>
            </Box>
            <Box id='button' sx={{display:'flex', alignItems:'center', gap:'1rem' }}>
              <Button onClick={handleClickOpen} className='contactButton' sx={{backgroundColor:'#6C63FF', color:'white'}}>
                Let's Connect
              </Button>
              <CutomIconAPI iconName={'Linkedin'} height={32} color={iconColor}/>
              <CutomIconAPI iconName={'Github'} height={32} color={iconColor}/>
              <CutomIconAPI iconName={'Netlify'} height={32} color={iconColor}/>
            </Box>
          </Box>
          <Box className='BoxRight'>
            <Box component="img" sx={{height: { xs: '200px', sm: '450px' }}} 
              src={bg} alt="HeroImage" />
          </Box>
      </CustomGrid>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <Box sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}, alignItems:'center'}}>
          <Box>
            <DialogTitle>Let's conntect</DialogTitle>
            <DialogContent>
              <DialogContentText>
              Want to stay in the loop? Share your email, and we’ll keep you updated with the latest! <span style={{fontWeight:'bold'}}>*Scan of this page.</span>
              </DialogContentText>
              <TextField
                autoFocus
                required
                margin="dense"
                id="name"
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">connect</Button>
            </DialogActions>
          </Box>
          <Box>
              <Box id='qrImage'>
                  <QRCodeSVG className='QR'
                  ref={QrRef}
                  value='https://phurpasherpa-portfolio.netlify.app/'
                  size='333'
                  bgColor="white"/>
              </Box>
          </Box>
        </Box>
      </Dialog>
    </>
  )
}
