import React from 'react'
import {Button, styled, useTheme, Box, Stack} from '@mui/material';
import Navbar from '../Navbar';
import Hero from './HeroPage/Hero';
import Product from './Product/Product';
import About from './About/About';



export default function HomePage({mode, setMode}) {
  return (
    <>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar mode={mode} setMode={setMode}/>
        <Hero mode={mode}/>
        <Product id='project' mode={mode}/>
        <About mode={mode}/>
      </Box>
    </>
  )
}
