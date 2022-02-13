import logo from './logo.svg';
import './App.css';
import Questionario from './Pages/Questionario';
import { Provider } from 'react-redux';
import configureStore from './reducers';

function App() {
  return (
    <Provider store={configureStore()}>
      <Questionario />
    </Provider>
  );
}

export default App;
