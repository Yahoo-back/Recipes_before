import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Icon, Input, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import pathToRegexp from 'path-to-regexp';
import { queryArray } from 'utils';
import styles from './Layout.less';

const { Search } = Input;
const Bread = ({ menu, location }) => {
  // 匹配当前路由
  let pathArray = [];
  let current;
  for (let index in menu) {
    if (menu[index].route && pathToRegexp(menu[index].route).exec(location.pathname)) {
      current = menu[index];
      break;
    }
  }

  const getPathArray = item => {
    pathArray.unshift(item);
    if (item.bpid) {
      getPathArray(queryArray(menu, item.bpid, 'id'));
    }
  };

  let paramMap = {};
  if (!current) {
    pathArray.push(
      menu[0] || {
        id: 1,
        icon: 'laptop',
        name: 'Dashboard'
      }
    );
    pathArray.push({
      id: 404,
      name: 'Not Found'
    });
  } else {
    getPathArray(current);

    let keys = [];
    let values = pathToRegexp(current.route, keys).exec(location.pathname.replace('#', ''));
    if (keys.length) {
      keys.forEach((currentValue, index) => {
        if (typeof currentValue.name !== 'string') {
          return;
        }
        paramMap[currentValue.name] = values[index + 1];
      });
    }
  }

  // 递归查找父级
  const breads = pathArray.map((item, key) => {
    const content = (
      <span>
        {item.icon ? <Icon type={item.icon} style={{ marginRight: 4 }} /> : ''}
        {item.name}
      </span>
    );
    return (
      <Breadcrumb.Item key={key}>
        {pathArray.length - 1 !== key ? (
          <Link to={pathToRegexp.compile(item.route || '')(paramMap) || '#'}>{content}</Link>
        ) : (
          content
        )}
      </Breadcrumb.Item>
    );
  });

  return (
    <Row>
      <Col span={8} className={styles.bread}>
        <Breadcrumb>{breads}</Breadcrumb>
      </Col>
      <Col style={{ float: 'right' }}>
        <Search placeholder="请输入菜谱\食材" onSearch={value => console.log(value)} style={{ width: 200 }} />
      </Col>
    </Row>
  );
};

Bread.propTypes = {
  menu: PropTypes.array,
  location: PropTypes.object
};

export default Bread;
