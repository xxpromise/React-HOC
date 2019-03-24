import React, {Component} from 'react';
import withHoc from './with-hoc';

@withHoc('注册')
class Register extends Component {
  render () {
    const { handleSubmit, composeChange, username, password, rePassword } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        用户名: <input type="text" name="username" value={username} onChange={composeChange('username')}/> <br/>
        密码: <input type="password" name="password" value={password} onChange={composeChange('password')}/> <br/>
        确认密码: <input type="password" name="rePassword" value={rePassword} onChange={composeChange('rePassword')}/> <br/>
        <input type="submit" value="注册"/>
      </form>
    )
  }
}

export default Register;