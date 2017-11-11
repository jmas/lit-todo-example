import appTemplate from './templates/app';
import {bindActionCreators} from 'redux';
import {connect} from 'lit-redux';
import actions from './actions';

export default connect(
	({ todos, editing }) => ({ todos, editing }),
	dispatch => ({ actions: bindActionCreators(actions, dispatch) })
)(appTemplate);
