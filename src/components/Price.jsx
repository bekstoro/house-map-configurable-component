import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const PriceComponent = ({ price }) => (
  <CardContent>
    <Typography>
      ${price}
    </Typography>
  </CardContent>
)

export default PriceComponent
