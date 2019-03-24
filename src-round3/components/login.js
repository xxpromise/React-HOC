import React, {Component} from 'react';

import withHoc from './with-hoc';

class Login extends Component {
  
  render () {
    const { handleSubmit, composeChange, username, password } = this.props;
  
    return (
      <form onSubmit={handleSubmit}>
        用户名: <input type="text" name="username" value={username} onChange={composeChange('username')}/> <br/>
        密码: <input type="password" name="password" value={password} onChange={composeChange('password')}/> <br/>
        <input type="submit" value="登陆"/>
      </form>
    )
  }
}

export default withHoc('登陆')(Login);