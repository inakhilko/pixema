import './App.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { store } from './redux';
import router from './router';
import ThemeProvider from './context/theme';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </div>
  );
}
export default App;
