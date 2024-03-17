import Form from '../../components/Form';
import {
  resetPasswordFormData,
} from '../../constants/forms';
import UserServiceApi from '../../api/user';
import { ResetPasswordFormFieldsType } from '../../types/formsData';

function ResetPasswordPage() {
  const onSubmit = async (data: ResetPasswordFormFieldsType) => {
    await UserServiceApi.resetPassword(data);
  };
  return <Form formInfo={resetPasswordFormData} onSubmit={onSubmit} />;
}

export default ResetPasswordPage;
