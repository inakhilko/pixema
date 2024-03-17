import { useNavigate } from 'react-router-dom';
import './Message.styles.css';
import { IMessage } from '../../constants/messages';
import Button from '../Button';

type MessageProps = {
  messageInfo: IMessage;
};

function Message({
  messageInfo: {
    title, button, message,
  },
}: MessageProps) {
  const navigate = useNavigate();
  const onSubmit = () => {
    console.log('njiomkpl');
    navigate('../signin');
  };

  return (
    <div className="message__wrapper">
      <h2 className="message__title">{title}</h2>
      <p className="message__text">{message}</p>
      <Button onClick={onSubmit} buttonText={button} />
    </div>
  );
}

export default Message;
