import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Message from '../../components/Message';
import { successSignUpMessage } from '../../constants/messages';
import UserServiceApi from '../../api/user';

function UserActivationPage() {
  const { uid, token } = useParams();
  useEffect(() => {
    if (uid && token) {
      UserServiceApi.activateUser({ uid, token });
    }
  }, [uid, token]);
  return <Message messageInfo={successSignUpMessage} />;
}

export default UserActivationPage;
