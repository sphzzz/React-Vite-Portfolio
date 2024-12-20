import {Box, styled} from "@mui/material"
import Grid from "@mui/material/Grid2"


export const CustomGrid= styled(Grid)(({theme, mode})=>({
    color : mode=='light'?'black':'white',
    display:'flex',
    alignItems:'center',
    gap:'2rem',
}))

export const CustomBox = styled(Box)(({theme, mode})=>({
    padding:'1.5rem',
    [theme.breakpoints.up('sm')]:{
        paddingInline: '6rem'
    },
    [theme.breakpoints.down('sm')]:{
        flexDirection:'column'

    },
}))