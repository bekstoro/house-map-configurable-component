import { connect } from 'react-redux'
import App from "../components/App";
import { bindActionCreators } from 'redux';
import { getProperties } from '../actions/properties';
import { getTemplates } from '../actions/templates';

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  getProperties: bindActionCreators(getProperties, dispatch),
  getTemplates: bindActionCreators(getTemplates, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
