import {
  createBrowserRouter, createRoutesFromElements, Route, RouteObject,
} from 'react-router-dom';
import Form from '../components/Form';
import {
  newPassPageData,
  ResetPassPageData,
  signInPageData,
  signUpPageData,
} from '../constants/forms';
import UnauthorizedPageTemplate from '../templates/UnauthorizedPageTemplate';
import Message from '../components/Message';
import { registrationConfirmationMessage, successSignUpMessage } from '../constants/messages.ts';

const AUTHORIZED_ROUTES: RouteObject[] = [
  {
    path: '/',
    element: <UnauthorizedPageTemplate />,
    children: [
      {
        path: 'signin',
        element: <Form formInfo={signInPageData} />,
      },
      {
        path: 'signup',
        element: <Form formInfo={signUpPageData} />,
      },
      {
        path: 'reset-password',
        element: <Form formInfo={ResetPassPageData} />,
      },
      {
        path: 'new-password',
        element: <Form formInfo={newPassPageData} />,
      },
      {
        path: 'confirmation',
        element: <Message messageInfo={registrationConfirmationMessage} />,
      },
      {
        path: 'success/:uid/:token',
        element: <Message messageInfo={successSignUpMessage} />,
      },
    ],
  },
];
const router = createBrowserRouter(AUTHORIZED_ROUTES);
//     createRoutesFromElements(
//   <Route
//     element={<UnauthorizedPageTemplate />}
//     path="/"
//   >
//     <Route element={<Form formInfo={signInPageData} />} path="signin" />
//     <Route element={<Form formInfo={signUpPageData} />} path="signup" />
//     <Route element={<Form formInfo={ResetPassPageData} />} path="reset-password" />
//     <Route element={<Form formInfo={newPassPageData} />} path="new-password" />
//     <Route element={<Message messageInfo={registrationConfirmationMessage} />} path="confirmation" />
//     <Route element={<Message messageInfo={successSignUpMessage} />} path="success/:uid/:token" />
//
//   </Route>,
// )

export default router;
