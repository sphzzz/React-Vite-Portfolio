import React from 'react'
import {Typography, Box, styled} from '@mui/material'
import Grid from "@mui/material/Grid2"

export default function ProductBelt({mode}) {
    const CustomGrid= styled(Grid)(({theme})=>({
        backgroundColor: mode=='light'?'black':'#181818c7',
        color : 'white',
        display:'flex',
        alignItems:'center',
    }))

    const CustomBox = styled(Box)(({theme})=>({
        display:'flex',
        padding:'1.5rem',
        flex:'1',
        alignItems:'center',
        [theme.breakpoints.up('sm')]:{
            paddingInline: '6rem'
        },
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column'
        },
    }))
  return (
    <>
    <CustomGrid className='ProductGrid'>
        <CustomBox className='ProductBox'>
            <Box className='BoxLine'>
                <Typography className='lines' variant='h2'
                sx={{fontSize:{sm:'calc(2rem + 1rem)', xs:'calc(0.5rem + 0.5rem)'}}} >
                    Explore how I weave <span style={{color:'red', fontWeight:'500'}}>artistry and a touch of <br/> technology </span> to craft beautiful <br/> virtual experiences.
                </Typography>
            </Box>
            <Box className='icon'>
                <lord-icon id='ProductBelt' colors="primary:#ffffff" src="https://cdn.lordicon.com/nizfqlnk.json" 
                    trigger="loop" 
                    delay="2000">
                </lord-icon>
            </Box>
        </CustomBox>
      </CustomGrid>
    </>
  )
}
