import './App.css';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux';
import router from './router';
import ThemeProvider from './context/theme';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
            <RouterProvider router={router} />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}
export default App;
