import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.png';

const App = () => {
  return (
    <div>
      <p>React here! Hello, rails365</p>
      <img src={ logo } width={ 300 } />
      <div className="image"></div>
      {
        "ssss".map()
      }
    </div>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));
