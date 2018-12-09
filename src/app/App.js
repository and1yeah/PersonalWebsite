import React, {Component} from 'react';
import { Route } from 'react-router-dom';
// Boiler
import Header from '../boilerplate/Header';
import Footer from '../boilerplate/Footer';
// Components
import Home from '../components/Home';
// Style
import './assets/application.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Header/>
        </header>
        <body>
          <Route path="/" exact component={Home}/>
        </body>
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
