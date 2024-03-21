import { useThemeContext } from '../../context/theme';
import Switch from '../../components/Switch';
import './SettingsPage.styles.css';

function SettingsPage() {
  const { toggleTheme } = useThemeContext();

  return (
    <div className="wrapper">
      <div className="container container__all-films">
        <div className="setting__wrapper">
          <div className="settings__block">
            <h3 className="settings__title">Profile</h3>
            <div className="settings">
              <label className="settings__label">
                Name
                <input className="settings__input" />
              </label>
              <label className="settings__label">
                Email
                <input className="settings__input" />
              </label>
            </div>
          </div>
          <div className="settings__block">
            <h3 className="settings__title">ColorMode</h3>
            <div className="settings">
              <Switch onClick={toggleTheme} label="Use dark theme" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
