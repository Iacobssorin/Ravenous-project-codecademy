import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from "./components/BusinessList/BusinessList";

import logo from './logo.svg';
import './App.css';

  class App extends React.Component {
    render() {
        return (
    <div className="App">
  <h1>ravenous</h1>
  <SearchBar />
  <BusinessList />
</div>
  );
  }

}

export default App;
