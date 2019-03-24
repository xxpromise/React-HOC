import React, {Component} from 'react';

// 再次包裹了一层高阶函数, 这个高阶函数执行后返回值才是高阶组件
// 通过这种方式, 高阶组件内部就能获取参数了~
export default (title) => (WrappedComponent) => {
  return class extends Component {
    state = {
      username: '',
      password: '',
      rePassword: ''
    }
    
    onChange = (stateName, stateValue) => {
      this.setState({[stateName]: stateValue});
    }
    
    composeChange = (name) => {
      return (e) => this.onChange(name, e.target.value);
    }
    
    handleSubmit = (e) => {
      e.preventDefault();
      const { username, password, rePassword } = this.state;
      if (rePassword) {
        alert(`用户名: ${username}, 密码: ${password}, 确认密码: ${rePassword}`);
      } else {
        alert(`用户名: ${username}, 密码: ${password}`);
      }
    }
    
    render () {
      // 抽取方法
      const mapMethodToProps = {
        composeChange: this.composeChange,
        handleSubmit: this.handleSubmit,
      }
      // 将状态数据和操作的方法以 props 的方式传入的包装组件中
      return (
        <div>
          {/*获取到参数值就能正常显示了~*/}
          <h2>{title}</h2>
          // 将当前组件接受到的props传给包装组件
          <WrappedComponent {...this.props} {...this.state} {...mapMethodToProps}/>
        </div>
      )
    }
  }
}