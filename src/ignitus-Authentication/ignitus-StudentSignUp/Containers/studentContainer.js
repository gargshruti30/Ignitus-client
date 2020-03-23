

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createStructuredSelector } from 'reselect';
import { Signup } from '../Components';
import { signUpRequest } from '../actions';

import { makeSelectStudentData } from '../selectors';

const mapStateToProps = createStructuredSelector({
  studentSignUpData: makeSelectStudentData(),
});

const mapDispatchToProps = dispatch => bindActionCreators({ signUpRequest }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
