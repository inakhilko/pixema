import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form';
import {
  signUpFormData,
} from '../../constants/forms';
import UserServiceApi from '../../api/user';
import { SignUpFormFieldsType } from '../../types/formsData';

function SignUpPage() {
  const navigate = useNavigate();
  const onSubmit = useCallback((data: SignUpFormFieldsType) => {
    UserServiceApi.registerUser(data);
    navigate('../confirmation');
  }, []);
  return <Form formInfo={signUpFormData} onSubmit={onSubmit} />;
}

export default SignUpPage;
