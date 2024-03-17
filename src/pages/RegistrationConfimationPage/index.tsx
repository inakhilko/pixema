import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Message from '../../components/Message';
import { registrationConfirmationMessage } from '../../constants/messages';
import UserServiceApi from '../../api/user';

function RegistrationConfirmationPage() {
  const { uid, token } = useParams();
  useEffect(() => {
    if (uid && token) {
      UserServiceApi.activateUser({ uid, token });
    }
  }, [uid, token]);
  return (
    <>
      <Message messageInfo={registrationConfirmationMessage} />
      <Navigate to="signin" replace state={{ staticMessage: 'Your password has been changed !' }} />
    </>
  );
}

export default RegistrationConfirmationPage;
