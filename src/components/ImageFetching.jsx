import React, { useState } from 'react'
import { useEffect } from 'react'

export default function ImageFetching({iconName, height, color}) {
    const [url, setUrl] = useState()

    useEffect(()=>{
        let iconColor = color ? color.replace('#',''):''
        if (!color){
            setUrl('https://cdn.simpleicons.org/'+iconName)
        }
        else{
            setUrl('https://cdn.simpleicons.org/'+iconName+'/'+iconColor)
        }
    })

  return (
    <>
        <img title={iconName} src={url} height={height} style={{cursor:'pointer'}}/>
    </>
  )
}
