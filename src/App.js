import React, { Component } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import './style/app.css';

class App extends Component {
  render() {
    console.log("this", this.props)
    return (
      <div className="app">
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default App;
