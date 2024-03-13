import './UserInfo.styles.css';

function UserInfo({ name, surname } : { name: string, surname: string }) {
  return (
    <div className="user-info">
      <p className="user-info__initials">{`${name[0]}${surname[0]}`}</p>
      <p className="user-info__full-name">{`${name} ${surname}`}</p>
    </div>
  );
}

export default UserInfo;
