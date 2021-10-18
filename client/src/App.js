import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux';
import store from './store.js';

import { Container } from 'reactstrap'

import AppNavbar from "./components/AppNavBar.js";
import ShoppingList from "./components/ShoppingList.js";
import ItemModal from './components/ItemModal.js';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppNavbar />
        <Container>
          <ItemModal />
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
