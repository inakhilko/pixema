import { useNavigate, useParams } from 'react-router-dom';
import Form from '../../components/Form';
import { newPasswordFormData } from '../../constants/forms';
import UserServiceApi from '../../api/user';
import { NewPasswordFormFieldsType } from '../../types/formsData';

function NewPsswordPage() {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const onSubmit = (data: NewPasswordFormFieldsType) => {
    UserServiceApi.changePassword({ uid, token, newPassword: data });
    navigate('../signin', { state: { staticMessage: 'Your password has been changed !' } });
  };
  return <Form formInfo={newPasswordFormData} onSubmit={onSubmit} />;
}

export default NewPsswordPage;
