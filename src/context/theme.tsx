import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';

export enum EThemes {
  LIGHT = 'light',
  DARK = 'dark',
}

type ThemeContextType = {
  theme: EThemes;
  changeTheme: (newTheme: EThemes) => void;
  toggleTheme: () => void;
};
const defaultThemeValue: ThemeContextType = {
  theme: EThemes.DARK,
  changeTheme: () => undefined,
  toggleTheme: () => undefined,
};
const ThemeContext = createContext<ThemeContextType>(defaultThemeValue);

function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(defaultThemeValue.theme);
  const changeTheme = useMemo(() => (newTheme: EThemes) => {
    setTheme(newTheme);
  }, []);

  const toggleTheme = useMemo(() => () => {
    setTheme((currentTheme) => {
      if (currentTheme === EThemes.LIGHT) {
        return EThemes.DARK;
      }
      return EThemes.LIGHT;
    });
  }, []);
  const themeValue = useMemo(
    () => ({ theme, changeTheme, toggleTheme }),
    [theme, changeTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={`theme theme--${theme}`}>{children}</div>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);
export default ThemeProvider;
