import Navigation from '../../components/Navigation';
import { useThemeContext } from '../../context/theme';
import Switch from '../../components/Switch';
import Input from '../../components/Input';

function SettingsPage() {
  const { toggleTheme } = useThemeContext();

  return (
    <div className="wrapper">
      <div className="container container__all-films">
        <Navigation />
        <div className="setting__wrapper">
          <div className="settings__block">
            <h3 className="settings__title">Profile</h3>
            <div className="settings">
              <label className="settings__label">
                Name
                <input value="settings__input" />
              </label>
              <label className="settings__label">
                Name
                <input value="settings__input" />
              </label>
            </div>
          </div>
          <div className="settings__block">
            <h3 className="settings__title">Profile</h3>
            <div className="settings">
              {/* <Input label="Name">jkn</Input> */}
            </div>
            <button type="button" onClick={toggleTheme}>
              toggle theme
            </button>
            <Switch onClick={toggleTheme} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
