import React, {Component} from 'react';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  
  onUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }
  
  onPasswordChange = (e) => {
    this.setState({password: e.target.value});
  }
  
  login = (e) => {
    // 禁止默认事件
    e.preventDefault();
    // 收集表单数据
    const { username, password } = this.state;
    alert(`用户名: ${username}, 密码: ${password}`);
  }
  
  render () {
    const { username, password } = this.state;
    return (
      <div>
        <h2>登陆</h2>
        <form onSubmit={this.login}>
          用户名: <input type="text" name="username" value={username} onChange={this.onUsernameChange}/> <br/>
          密码: <input type="password" name="password" value={password} onChange={this.onPasswordChange}/> <br/>
          <input type="submit" value="登陆"/>
        </form>
      </div>
    )
  }
}