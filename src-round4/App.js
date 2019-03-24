import React, { Component } from 'react';

import Login from './components/login';
import Register from './components/register';

class App extends Component {
  render() {
    return (
      <div>
        {/*父组件向子组件传递属性*/}
        <Login name="jack" age={18}/>
        <Register />
      </div>
    );
  }
}

export default App;