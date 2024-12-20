import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material';
import {QRCodeSVG} from 'qrcode.react';


export default function ProductCard({mode}) {
    const QrRef = useRef(null)

    const [data, setData] = useState({
        title: 'All-Link Web App',
        description:'A simple web app to showcase and share all your important links in one place, designed for easy accessibility and customization.',
        url:'https://phurpasherpa-links.netlify.app/',
    })

    const handleImageClick = (key) =>{
        // console.log(itemData[key].url)
        setData({
            title:itemData[key].title,
            description:itemData[key].description,
            url:itemData[key].url
        })
      }
    
      const CustomBox = styled(Box)(({theme})=>({
        display:'flex',
        padding: '1.5rem 6rem',
        gap: '3rem',
        [theme.breakpoints.down('md')]:{
            padding: '1.5rem 6rem',
            flexDirection: 'column',
        },
        [theme.breakpoints.down('sm')]:{
            padding: '1rem',
        },
      }))

      const CustomImage = styled('img')(({theme})=>({
        height :'calc(20rem + 1vh)',
        width: '100%',
        objectFit:'cover',
        
        [theme.breakpoints.down('md')]:{
            height :'calc(15rem + 1vh)',
            width :'calc(20rem + 1vw)',
        },
        [theme.breakpoints.down('sm')]:{
            height :'calc(10rem + 1vh)',
            width :'calc(10rem + 1vw)',
        },
      }))

      const CustomA = styled('a')(({theme})=>({
        backgroundImage:
            mode === 'light'?
            'linear-gradient(90deg, rgba(0, 0, 0, 0.42) 0%, rgba(165, 215, 232, 0) 100%)':
            'linear-gradient(90deg, rgba(255, 255, 255, 0.42) 0%,rgba(0, 0, 0, 0) 100%)',
        backgroundSize: '0 100%',
        backgroundRepeat: 'no-repeat',
        transition: '0.3s',
        color: 'grey',

        '&:hover': {
            backgroundSize: '100% 100%',
            color: theme.palette.mode === 'light' ? 'grey' : 'white',
        },
      }))


    
  return (
    <>
    <CustomBox className='ProductItemBox'>
        <Box className='ProductCard'>
            {Object.entries(itemData).map(([key,{img, title, url}]) => (
                <Box className='images' key={key}>
                    <Box className='image'>
                        <ImageListItem>
                        <CustomImage 
                        id='project' 
                        src={img}
                            alt={title}
                            loading="lazy"
                        />
                        </ImageListItem>
                    </Box>
                    <Box className='hoverImageBox' onClick={()=>handleImageClick(key)}>
                        <QRCodeSVG className='QR'
                        ref={QrRef}
                        value={url?url:'https://qr-maker-generator.netlify.app/'}
                        size='333'
                        bgColor="white"/>
                    </Box>
                </Box>
            ))}
        </Box>
        <Box className='ProductDescription'>
            <Box className='item'>
                <h1>{data.title}</h1>
                <h5 style={{color:'grey'}}>{data.description}</h5>
                <CustomA id='projectUrl'  href={data.url} target='_blank'>{data.url}</CustomA>
            </Box>
        </Box>
    </CustomBox>
    </>
  )
}

const itemData = {
    allLink:{
        img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?cs=srgb&dl=pexels-luis-gomes-166706-546819.jpg&fm=jpg',
        title: 'All-Link Web App',
        description: 'A simple web app to showcase and share all your important links in one place, designed for easy accessibility and customization.',
        url:'https://phurpasherpa-links.netlify.app/'
    },
    portfolio:{
        img: 'https://mrwallpaper.com/images/hd/hd-engineering-computer-technology-9c4d0251f783p6zh.jpg',
        title: 'Portfolio',
        description: 'An interactive portfolio web app highlighting projects, skills, and creativity, offering a seamless and visually appealing user experience.',
        url: 'https://phurpasherpa-links.netlify.app/'
    },
    weather:{
        img: 'https://yalantis.com/wp-content/uploads/2022/11/choosing-web-technology-stack.webp',
        title: 'Weather App',
        description: 'A weather application providing real-time updates, forecasts, and location-based insights with an intuitive and clean interface.',
        url:'https://phurpasherpa-links.netlify.app/'
      },
    blog: {
        img: 'https://images2.alphacoders.com/519/51982.jpg',
        title: 'Blog App',
        description: 'A blog app for sharing articles, ideas, and insights, featuring easy navigation, responsive design, and customizable content management.',
        url: 'https://phurpasherpa-links.netlify.app/'
      },
}
