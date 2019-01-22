import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ItemComponent from './Item'

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
})

class App extends React.Component {
  componentDidMount() {
    this.props.getProperties()
    this.props.getTemplates()
  }

  render() {
    const { classes, properties } = this.props

    return (
      <div className={classes.root}>
        <AppBar position='static' className={'mb3'}>
          <Toolbar>
            <Typography variant='h6' color='inherit'>
              House feed
            </Typography>
          </Toolbar>
        </AppBar>
        {
          properties.map((item, index) => <ItemComponent key={index} item={item}/>)
        }
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  getProperties: PropTypes.func.isRequired,
  getTemplates: PropTypes.func.isRequired,
  properties: PropTypes.array.isRequired,
  templates: PropTypes.array.isRequired
}

export default withStyles(styles)(App)
