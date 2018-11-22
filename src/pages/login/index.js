import React, { Component } from 'react';
import LoginForm from './login';
import RegisterForm from './register';
import ResetForm from './reset';
import { Tabs, Button, Input, Select } from 'antd';
import styles from './index.less';

const { TabPane } = Tabs;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      nowform: 'login'
    };
  }

  setNowform = nowform => {
    this.setState({
      nowform
    });
  };

  render() {
    return (
      <div className={styles.form}>
        <div className={styles.logo}>
          <span>博世洗悦管理后台</span>
        </div>
        <div>
          <Tabs>
            <TabPane tab="登录" key="1">
              {this.state.nowform === 'login' ? (
                <LoginForm setNowform={this.setNowform} />
              ) : (
                <ResetForm setNowform={this.setNowform} />
              )}
            </TabPane>
            <TabPane tab="注册" key="2">
              <RegisterForm />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Login;
