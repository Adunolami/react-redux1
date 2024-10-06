import React from 'react'
import { Provider }from 'react-redux'
import store from './redux/store';
import './App.css';
import CakeContainer from './components/cakeContainer';
import HooksCakeContainer from './components/hooksCakeContainer';
import IceCreamContainer from './components/iceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import NewIceCreamContainer from './components/NewIceCreamContainer';
import ItemContainer from './components/itemContainer';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ItemContainer cake />
      <ItemContainer  />
      <HooksCakeContainer />
      <CakeContainer />
      <IceCreamContainer />
      <NewCakeContainer />
      <NewIceCreamContainer />
      
    </div>
    </Provider>
  );
}

export default App;
