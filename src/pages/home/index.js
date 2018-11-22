import React from 'react';
import { Page } from 'components';
import { Link } from 'react-router-dom';
import styles from './index.less';
import { Card, Input, Col, Row, Icon, Avatar, Divider, List } from 'antd';

const { Meta } = Card;
const home = {
  title: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.85)',
    marginBottom: 16,
    fontWeight: 500
  }
};
const listData = [];
for (let i = 0; i < 3; i++) {
  listData.push({
    href: 'http://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
  });
}

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const tabList = [
  {
    key: '周一',
    tab: '周一'
  },
  {
    key: '周二',
    tab: '周二'
  },
  {
    key: '周三',
    tab: '周三'
  },
  {
    key: '周四',
    tab: '周四'
  },
  {
    key: '周五',
    tab: '周五'
  },
  {
    key: '周六',
    tab: '周六'
  },
  {
    key: '周日',
    tab: '周日'
  }
];

const contentList = {
  周一: (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={item => (
        <List.Item
          key={item.title}
          actions={[
            <IconText type="star-o" text="156" />,
            <IconText type="like-o" text="156" />,
            <IconText type="message" text="2" />
          ]}
          extra={
            <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
          }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.content}
        </List.Item>
      )}
    />
  ),
  周二: <p>content2</p>
};

class Home extends React.Component {
  state = {
    key: '周一'
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };
  render() {
    return (
      <Page inner>
        <Card
          title="周食谱推荐"
          tabList={tabList}
          activeTabKey={this.state.key}
          onTabChange={key => {
            this.onTabChange(key, 'key');
          }}
        >
          {contentList[this.state.key]}
        </Card>
      </Page>
    );
  }
}

export default Home;
