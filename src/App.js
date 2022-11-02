/* eslint-disable no-unused-vars */
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Routes>
          {/* <Route path="/about" element={<About />} />
          <Route path="/topics" element={<Topics />} /> */}
          <Route path="/" element={<Calculator />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
