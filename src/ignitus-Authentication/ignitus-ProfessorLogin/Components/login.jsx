
import React, { useState } from 'react';
import { withErrorBoundary } from '../../../ignitus-Shared/ignitus-ErrorHandlingComponents/errorBoundary';
import { statePayload } from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-AuthenticationComponents/Login/Constants';
import SharedLogin from '../../../ignitus-Shared/ignitus-DesignSystem/ignitus-Templates/ignitus-AuthenticationComponents/Login/Login';

const Login = () => {
  // Dummy Implementation.
  const professorLogInData = {
    isFetching: false,
    message: '',
    success: false,
  };
  const [state, setState] = useState(statePayload);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SharedLogin
      loginType="Professor"
      tagline="Help providing opportunities for your students"
      handleSubmit={handleSubmit}
      logInData={professorLogInData}
      state={state}
      setState={setState}
    />
  );
};
export default withErrorBoundary(Login);
