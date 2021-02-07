import { Container, Jumbotron } from "react-bootstrap";
import KitchenAlert from './components/KitchenAlert';

import { Provider } from 'react-redux';
import store from './store';


const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>AI Kitchen Helper</h1>
        <KitchenAlert />
      </div>
    </Provider>
  );
}

export default App;
