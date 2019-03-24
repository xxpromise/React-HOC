import React, {Component} from 'react';

import withHoc from './with-hoc';

class Login extends Component {
  
  render () {
    const { handleSubmit, composeChange, username, password, name, age } = this.props;
  
    return (
      <div>
        <p>你的名字: {name}</p>
        <p>你的年龄: {age}</p>
        <form onSubmit={handleSubmit}>
          用户名: <input type="text" name="username" value={username} onChange={composeChange('username')}/> <br/>
          密码: <input type="password" name="password" value={password} onChange={composeChange('password')}/> <br/>
          <input type="submit" value="登陆"/>
        </form>
      </div>
    )
  }
}

export default withHoc('登陆')(Login);