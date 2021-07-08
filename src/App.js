import { Provider } from 'react-redux';
import '@styles/global.scss';
import Routes from '@containers/routes';
import store from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
