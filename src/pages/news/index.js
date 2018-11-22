import React from 'react';
import { Page } from 'components';
import { Link } from 'react-router-dom';
import { Card, Col, Row, Icon, Avatar } from 'antd';

const { Meta } = Card;

class Breakfast extends React.Component {
  render() {
    return (
      <Page inner>
        <Card title="健康饮食资讯">
          <Row>
            <Col xs={{ span: 24 }} lg={{ span: 6 }}>
              <Link to="/menus/details">
                <Card
                  hoverable
                  style={{ width: 300, padding: 10, marginTop: 10 }}
                  cover={
                    <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                  }
                >
                  <Meta title="Card title" description="This is the description" />
                </Card>
              </Link>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
              <Card
                hoverable
                style={{ width: 300, padding: 10, marginTop: 10 }}
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              >
                <Meta title="Card title" description="This is the description" />
              </Card>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
              <Card
                hoverable
                style={{ width: 300, padding: 10, marginTop: 10 }}
                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              >
                <Meta title="Card title" description="This is the description" />
              </Card>
            </Col>
          </Row>
        </Card>
      </Page>
    );
  }
}

export default Breakfast;
