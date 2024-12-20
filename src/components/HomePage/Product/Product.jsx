import React from 'react'
import {Box} from '@mui/material'
import Grid from "@mui/material/Grid2"
import './Product.css'
import ProductBelt from './ProductBelt'
import ProductCard from './ProductCard'

export default function Product({mode}) {

  return (
    <>
      <Grid>
        <ProductBelt mode={mode}/>
        <ProductCard mode={mode}/>  
      </Grid>
    </>
  )
}
