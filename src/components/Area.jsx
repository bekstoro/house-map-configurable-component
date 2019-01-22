import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const AreaComponent = ({ area }) => (
  <CardContent>
    <Typography>
      {area} sq.fr.
    </Typography>
  </CardContent>
)

export default AreaComponent
