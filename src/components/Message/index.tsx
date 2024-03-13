import { redirect, useParams } from 'react-router-dom';
import './Message.styles.css';
import { useEffect } from 'react';
import { IMessage } from '../../constants/messages';
import UserServiceApi from '../../api/user';
import Button from '../Button';

type MessageProps = {
  messageInfo: IMessage;
};

function Message({
  messageInfo: {
    title, button, message,
  },
}: MessageProps) {
  const { uid, token } = useParams();
  const onSubmit = () => {
    console.log('njiomkpl');
    // redirect('signin');
  };

  useEffect(() => {
    if (uid && token) {
      UserServiceApi.activateUser({ uid, token });
    }
  }, [uid, token]);

  return (
    <div className="message__wrapper">
      <h2 className="message__title">{title}</h2>
      <p className="message__text">{message}</p>
      <Button onClick={() => console.log('jvkeb')} buttonText={button} />
    </div>
  );
}

export default Message;
