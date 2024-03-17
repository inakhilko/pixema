import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import Form from '../../components/Form';
import { signInFormData } from '../../constants/forms';
import { SignInFormFieldsType } from '../../types/formsData';
import { AppDispatch } from '../../redux';
import signIn from '../../redux/thunks/signIn';
import { authorize } from '../../redux/slices/User';

type SignInPageProps = {
  staticMessage?: string
};
function SignInPage({ staticMessage }: SignInPageProps) {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { state } = useLocation();
  // eslint-disable-next-line max-len
  const formStaticMessage = useMemo(() => (state ? state.staticMessage : staticMessage), [state, staticMessage]);
  const onSubmit = (data: SignInFormFieldsType) => {
    dispatch(signIn(data));
    dispatch(authorize());
    navigate('../all');
  };

  return <Form formInfo={signInFormData} onSubmit={onSubmit} staticMessage={formStaticMessage} />;
}
SignInPage.defaultProps = {
  staticMessage: '',
};
export default SignInPage;
