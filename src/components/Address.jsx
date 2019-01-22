import React from 'react'
import CardHeader from '@material-ui/core/CardHeader'

const AddressComponent = ({ address, rating }) => (
  <CardHeader
    title={address}
    subheader={rating && `Rating: ${rating}`}
  />
)

export default AddressComponent
