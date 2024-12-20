import React, { useEffect, useState } from 'react'
import {Box, Step, Stepper, Typography, IconButton} from '@mui/material'
import './About.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ImageFetching from '../../ImageFetching';

export default function About({mode}) {
  const [color, setColor] = useState()
  
  return (
    <>
      <Box className='AboutMain' id='contact'>
        <Box className='Upper'>
          <Box>
            <Stepper >
              {steps.map((label) => (
                <Step id='StepLabel' key={label} sx={{color:mode=='light'?'black':'white'}}>
                  {label}
                </Step>
              ))}
            </Stepper>
          </Box>
        </Box>
        <Box className='Below'>
            <Box className='Top'>
              <Box className='CopyRight'>
                <Typography sx={{color:mode=='light'?'black':'white'}}>
                 Thank You for visit.
                </Typography>
              </Box>
              <Box className='BackToTop'>
                  <span style={{color:mode=='light'?'black':'white'}}>BACK TO TOP</span>
                  <IconButton id='topButton'>
                    <a href="#top">
                      <ArrowUpwardIcon/>
                    </a>
                  </IconButton>
              </Box>
            </Box>
            <Box className='Message'>
              <span style={{color:mode=='light'?'black':'white'}}>Have a project?</span>
              <h1>LET'S TALK</h1>
            </Box>
            <Box className='Contact'>
              <Box className='icon'>
                  <ImageFetching iconName={'Linkedin'} height={'32'} color={mode=='light'?'black':'white'}/>
                  <ImageFetching iconName={'Github'} height={'32'} color={mode=='light'?'black':'white'}/>
                  <ImageFetching iconName={'Netlify'} height={'32'} color={mode=='light'?'black':'white'}/>
              </Box>
              <Box className='disclaimer'>
                <Typography variant='p' sx={{fontSize:'0.8rem', color:'grey'}}>
                &copy; {new Date().getFullYear()} Phurpa Sherpa. <br />
                Made with ❤️ and dedication. All rights reserved. Some features, such as animations and additional content, are still in the process of being added.
                </Typography>
              </Box>
            </Box>
        </Box>
      </Box>
    </>
  )
}

const steps = [
  'Explore My Work',
  'Get in Touch',
  'Create Together',
];