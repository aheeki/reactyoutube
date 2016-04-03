import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; // I need to specify the path to import components I write

const API_KEY = 'AIzaSyC4oB08Kr03e9qAYqgBy4bl23WEI8MD2lI';

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));