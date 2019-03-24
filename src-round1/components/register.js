import React, {Component} from 'react';

// 受控组件
export default class Register extends Component {
  state = {
    username: '',
    password: '',
    rePassword: ''
  }
  
  onUsernameChange = (e) => {
    this.setState({username: e.target.value});
  }
  
  onPasswordChange = (e) => {
    this.setState({password: e.target.value});
  }
  
  onRePasswordChange = (e) => {
    this.setState({rePassword: e.target.value});
  }
  
  register = (e) => {
    // 禁止默认事件
    e.preventDefault();
    // 收集表单数据
    const { username, password, rePassword } = this.state;
    alert(`用户名: ${username}, 密码: ${password}, 确认密码: ${rePassword}`);
  }
  
  render () {
    const { username, password, rePassword } = this.state;
    return (
      <div>
        <h2>注册</h2>
        <form onSubmit={this.register}>
          用户名: <input type="text" name="username" value={username} onChange={this.onUsernameChange}/> <br/>
          密码: <input type="password" name="password" value={password} onChange={this.onPasswordChange}/> <br/>
          确认密码: <input type="password" name="rePassword" value={rePassword} onChange={this.onRePasswordChange}/> <br/>
          <input type="submit" value="注册"/>
        </form>
      </div>
    )
  }
}