import './Switch.styles.css';

function Switch({ onClick }: { onClick: () => void }) {
  console.log(onClick);
  return (
    <label className="switch">
      <input type="checkbox" onClick={onClick} />
      <span className="slider round" />
    </label>
  );
}

export default Switch;
