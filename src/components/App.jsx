import React from 'react'
import AddressComponent from './Address'
import AreaComponent from './Area'
import ImageComponent from './Image'
import PriceComponent from './Price'

class App extends React.Component {
  componentDidMount() {
    this.props.getProperties()
    this.props.getTemplates()
  }

  render() {
    return (
      <div>
        <AddressComponent/>
        <AreaComponent/>
        <ImageComponent/>
        <PriceComponent/>
      </div>
    )
  }
}

export default App
