import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardMedia from '@material-ui/core/CardMedia'

const styles = theme => ({
  media: {
    height: 0,
    paddingTop: '50%'
  }
})

class ImageComponent extends React.Component {
  render() {
    const { classes, image } = this.props
    return (
      <CardMedia className={classes.media} image={image}/>
    )
  }
}

ImageComponent.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string.isRequired
}

export default withStyles(styles)(ImageComponent)
