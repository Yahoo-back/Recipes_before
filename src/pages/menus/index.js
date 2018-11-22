import React from 'react';
import { Page } from 'components';
import { Tabs, Menu, Dropdown, Icon } from 'antd';
import Breakfast from './components/Breakfast'

const menus = {
  dropItems: {
    width: 150
  }
}

const TabPane = Tabs.TabPane;
const breakfast = (
  <Menu style={menus.dropItems}>
    <Menu.Item >分类:</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="0">面包</Menu.Item>
    <Menu.Item key="1">面条</Menu.Item>   
    <Menu.Item key="2">粥</Menu.Item>
    <Menu.Item key="3">饼</Menu.Item>
    <Menu.Item key="4">饭</Menu.Item>
    <Menu.Item key="5">五谷</Menu.Item>
  </Menu>
);
const lunch = (
  <Menu style={menus.dropItems}>
    <Menu.Item >分类:</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="0">肉</Menu.Item>
    <Menu.Item key="1">蔬菜</Menu.Item>  
    <Menu.Item key="2">荤素搭配</Menu.Item>
  </Menu>
);
const dinner = (
  <Menu style={menus.dropItems}>
    <Menu.Item >分类:</Menu.Item>
    <Menu.Divider />
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">米饭</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">水饺</a>
    </Menu.Item>   
    <Menu.Item key="3">粥</Menu.Item>
  </Menu>
);


function callback(key) {
  console.log(key);
}

class Menus extends React.Component {
  render() {
    return (
      <Page inner>
        <Tabs defaultActiveKey="1" onChange={callback}>
          <TabPane tab = 
            <Dropdown overlay={breakfast} trigger={['click']}>
              <a className="ant-dropdown-link" >
                早餐食谱<Icon type="down" />
              </a>
            </Dropdown> key="1"><Breakfast />
          </TabPane>
          <TabPane tab = 
            <Dropdown overlay={lunch} trigger={['click']}>
              <a className="ant-dropdown-link" >
                午餐食谱<Icon type="down" />
              </a>
            </Dropdown> key="2"><Breakfast />
          </TabPane>
          <TabPane tab = 
            <Dropdown overlay={dinner} trigger={['click']}>
              <a className="ant-dropdown-link" >
                晚餐食谱<Icon type="down" />
              </a>
            </Dropdown> key="3"><Breakfast />
          </TabPane>
         
        </Tabs>
      </Page>
    );
  }
}

export default Menus;
