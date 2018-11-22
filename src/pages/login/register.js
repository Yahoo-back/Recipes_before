import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Row, Form, Input, Checkbox, Icon } from 'antd';
// import { pwdExp } from '../../utils/regExp';

const FormItem = Form.Item;
const styles = {
  icon: {
    color: 'rgba(0,0,0,.25)'
  }
};

class LoginForm extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    if (
      (window.location.href.indexOf('?') >= 0 && window.location.href.split('?')[1] == 'isLogout') == false &&
      window.localStorage.getItem('checked') == 'true'
    ) {
      dispatch({
        type: 'login/login',
        payload: {
          username: window.localStorage.getItem('username'),
          password: window.localStorage.getItem('password')
        }
      });
    } else {
      return;
    }
  }

  handleOk = () => {
    const {
      dispatch,
      form: { validateFieldsAndScroll }
    } = this.props;
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({ type: 'login/login', payload: values });
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
      window.localStorage.removeItem('username');
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
          {getFieldDecorator('name', {
            rules: [
              { required: true, message: '请输入用户名', whitespace: true }
              // { pattern: emailExp.exp, message: emailExp.des }
            ]
          })(
            <Input
              onPressEnter={this.handleOk}
              placeholder="请输入用户名"
              prefix={<Icon type="user" style={styles.icon} />}
            />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: '请输入邮箱账号', whitespace: true }
              // { pattern: emailExp.exp, message: emailExp.des }
            ]
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
            rules: [
              { required: true, message: '请输入密码', whitespace: true }
              // { pattern: emailExp.exp, message: emailExp.des }
            ]
          })(
            <Input
              onPressEnter={this.handleOk}
              placeholder="请输入密码"
              prefix={<Icon type="lock" style={styles.icon} />}
            />
          )}
        </FormItem>
        <Row>
          <Button type="primary" onClick={this.handleOk} loading={loading.effects.login}>
            注册
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
