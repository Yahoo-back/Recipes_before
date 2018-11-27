import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Row, Form, Input, Checkbox, Icon } from 'antd';

const FormItem = Form.Item;
const styles = {
  icon: {
    color: 'rgba(0,0,0,.25)'
  }
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  //登录
  handleOk = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.dispatch({ type: 'login/login', payload: values });
      }
      console.log(values.email);
      console.log(localStorage);
    });
  };

  handleClick = () => {
    const { setNowform } = this.props;
    setNowform('forget');
  };

  onRemember = e => {
    if (e.target.checked == true) {
      window.localStorage.setItem('checked', true);
    } else {
      window.localStorage.removeItem('email');
      window.localStorage.removeItem('password');
      window.localStorage.setItem('checked', false);
    }
  };

  render() {
    const {
      loading,
      form: { getFieldDecorator }
    } = this.props;

    return (
      <form>
        <FormItem hasFeedback>
          {getFieldDecorator('email', {
            initialValue: window.localStorage.getItem('email') ? window.localStorage.getItem('email') : null,
            rules: [{ required: true, message: '请输入邮箱账号', whitespace: true }]
          })(
            <Input
              onPressEnter={this.handleOk}
              placeholder="请输入邮箱账号"
              prefix={<Icon type="mail" style={styles.icon} />}
            />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('password', {
            initialValue: window.localStorage.getItem('password') ? window.localStorage.getItem('password') : null,
            rules: [
              { required: true, message: '请输入密码', whitespace: true }
              // { pattern: pwdExp.exp, message: pwdExp.des }
            ]
          })(
            <Input
              type="password"
              onPressEnter={this.handleOk}
              placeholder="请输入密码"
              prefix={<Icon type="lock" style={styles.icon} />}
            />
          )}
        </FormItem>
        <p>
          <Checkbox
            onChange={this.onRemember}
            defaultChecked={window.localStorage.getItem('checked') == 'true' ? true : false}
          >
            自动登录
          </Checkbox>
          <a onClick={this.handleClick}>修改密码</a>
        </p>
        <Row>
          <Button type="primary" onClick={this.handleOk} loading={loading.effects.login}>
            登录
          </Button>
        </Row>
      </form>
    );
  }
}

LoginForm.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object
};

export default connect(({ loading }) => ({ loading }))(Form.create()(LoginForm));
