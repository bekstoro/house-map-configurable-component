import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'

const ImageComponent = ({ className, image }) => (
  <CardMedia className={className} image={image}/>
)

export default ImageComponent
