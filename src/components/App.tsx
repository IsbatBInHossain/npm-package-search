import { Provider } from 'react-redux';
import { store } from '../store';
import RepositoriesList from './RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <h1>Search for a Package</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
