import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Collapse from '@material-ui/core/Collapse'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddressComponent from './Address'
import AreaComponent from './Area'
import ImageComponent from './Image'
import PriceComponent from './Price'

const styles = theme => ({
  card: {
    maxWidth: 840,
    margin: 'auto'
  },
  media: {
    height: 0,
    paddingTop: '50%'
  },
  actions: {
    display: 'flex',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
})

class Item extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const { classes, item } = this.props
    const { area, description, full_address, images, price, rating } = item

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <AddressComponent address={full_address}
                                rating={rating}/>
              <ImageComponent className={classes.media}
                              image={images[0]}/>
              <PriceComponent price={price}/>
              <AreaComponent area={area}/>

              <IconButton
                className={classNames({
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
              >
                <ExpandMoreIcon/>
              </IconButton>
              <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
                <CardContent>
                  <Typography>
                    {description}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
}

export default withStyles(styles)(Item)
