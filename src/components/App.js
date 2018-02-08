//Dependencies
import React, { Component } from 'react';

//Component
import Header from './Global/Header'
import Content from './Global/Content'
import Footer from './Global/Footer'

//Data
import items from '../data/menu'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="AgusteenApp" items={items}/>
        <Content />
        <Footer copyright="&copy; Agusteen 2017"/>
      </div>
    );
  }
}

export default App;
