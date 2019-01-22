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
  actions: {
    display: 'flex',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
})

const templateStrategy = [
  {
    filter: (templateName) => templateName === 'ADDRESS',
    render: (item, field) => (<AddressComponent address={item[field]} rating={item.rating}/>)
  }, {
    filter: (templateName) => templateName === 'IMAGE',
    render: (item, field) => (<ImageComponent image={item[field][0]}/>)
  }, {
    filter: (templateName) => templateName === 'PRICE',
    render: (item, field) => (<PriceComponent price={item[field]}/>)
  }, {
    filter: (templateName) => templateName === 'AREA',
    render: (item, field) => (<AreaComponent area={item[field]}/>)
  }
]

class Item extends React.Component {
  state = { expanded: false }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }))
  }

  render() {
    const { classes, item, template } = this.props
    const { description } = item
    if (!template || template.length === 0) {
      return null
    }

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Card className={classes.card}>
              {
                template.map(({ component, field }, index) => {
                  const templateStrategyItem = templateStrategy.find(it => it.filter(component))
                  return (
                    <React.Fragment key={index}>
                      {
                        templateStrategyItem && templateStrategyItem.render(item, field)
                      }
                    </React.Fragment>
                  )
                })
              }
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
  template: PropTypes.array
}

export default withStyles(styles)(Item)
