import './Switch.styles.css';

function Switch({ onClick, label }: { onClick: () => void, label: string }) {
  return (
    <label className="switch">
      {label}
      <input type="checkbox" onClick={onClick} />
      <span className="slider round" />
    </label>
  );
}

export default Switch;
