import MainContainer from './MainContainer'
import store from './store/index'
import { Provider } from 'mobx-react';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
    <MainContainer></MainContainer>
      </Provider>
    </div>
  );
}

export default App;
