import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { login, register, query } from './service';

export default {
  namespace: 'login',
  state: {
    email: '',
    password: '',
    name: '',
    page: 1,
    pageSize: 10,
    userList: ''
  },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    }
  },

  effects: {
    *register({ payload }, { put, call, select }) {
      const data = yield call(register, payload);
      console.log(data);
      if (data.statusCode == 200) {
        message.success(data.message + '，请登录！');
      } else {
        message.error(data.message);
      }
    },

    *login({ payload }, { put, call, select }) {
      const data = yield call(login, payload);
      console.log(data);
      if (data.statusCode == 200) {
        yield put(routerRedux.push('/home'));
      } else {
        message.error(data.message);
      }
    },

    *query({ payload }, { put, call, select }) {
      const data = yield call(query, payload);
      console.log(data);
      if (status == 200) {
        yield put({
          type: 'updateState',
          payload: { page: 1, pageSize: 10 }
        });
        message.success(data.msg);
      } else {
      }
    }
  },

  subscriptions: {
    //获取数据的方法
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/login') {
          dispatch({
            type: 'query'
          });
        }
      });
    }
  }
};
