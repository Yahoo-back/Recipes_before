import { request, config } from 'utils';

const { api } = config;
const { userLogin, userRegister, userList } = api;

export function login(data) {
  return request({
    url: userLogin,
    method: 'post',
    data
  });
}

export function register(data) {
  return request({
    url: userRegister,
    method: 'post',
    data
  });
}

export function query(data) {
  return request({
    url: userList,
    method: 'get',
    data
  });
}
