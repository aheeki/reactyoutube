import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // I need to specify the path to import components I write
const API_KEY = 'AIzaSyC4oB08Kr03e9qAYqgBy4bl23WEI8MD2lI';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'surfboards' }, function(data) {
      console.log(data);
    });    
  }

  render() {
    return (
    <div>
      <SearchBar />
    </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));