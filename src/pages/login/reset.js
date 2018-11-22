import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button, Row, Form, Input, Icon } from 'antd';

const FormItem = Form.Item;
const styles = {
  icon: {
    color: 'rgba(0,0,0,.25)'
  }
};

class ResetForm extends React.Component {
  handleOk = () => {
    const {
      dispatch,
      form: { validateFieldsAndScroll }
    } = this.props;
    validateFieldsAndScroll((errors, values) => {
      if (errors) {
        return;
      }
      dispatch({ type: 'login/getEmail', payload: values.email });
    });
  };

  handleClick = () => {
    const { setNowform } = this.props;
    setNowform('login');
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <form style={styles.form}>
        <FormItem hasFeedback>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: '请输入邮箱', whitespace: true }
              // { pattern: emailExp.exp, message: emailExp.des }
            ]
          })(
            <Input
              onPressEnter={this.handleOk}
              placeholder="请输入邮箱"
              prefix={<Icon type="mail" style={styles.icon} />}
            />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('OldPass', {
            rules: [
              { required: true, message: '请输入旧密码', whitespace: true }
              // { pattern: emailExp.exp, message: emailExp.des }
            ]
          })(
            <Input
              onPressEnter={this.handleOk}
              placeholder="请输入旧密码"
              prefix={<Icon type="lock" style={styles.icon} />}
            />
          )}
        </FormItem>
        <FormItem hasFeedback>
          {getFieldDecorator('NewPass', {
            rules: [
              { required: true, message: '请输入新密码', whitespace: true }
              // { pattern: emailExp.exp, message: emailExp.des }
            ]
          })(
            <Input
              onPressEnter={this.handleOk}
              placeholder="请输入新密码"
              prefix={<Icon type="lock" style={styles.icon} />}
            />
          )}
        </FormItem>
        <Row>
          <Button type="primary" onClick={this.handleOk}>
            密码重置
          </Button>
        </Row>
        <p>
          <span />
          <a onClick={this.handleClick}>返回登录</a>
        </p>
      </form>
    );
  }
}

ResetForm.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func
};

export default connect(({ login }) => ({ login }))(Form.create()(ResetForm));
