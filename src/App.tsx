
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './state/store';
import Router from './router';

function App() {
  return (
    <Provider store={store}>
    <div className="App text-center">
      <Router />
    </div>
    </Provider>
  );
}

export default App;
