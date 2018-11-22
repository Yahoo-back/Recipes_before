import React from 'react';
import { Page } from 'components';
import { Card, Col, Row, Icon, Avatar } from 'antd';
const { Meta } = Card;

class Breakfast extends React.Component {
  render() {
    return (
      <Page inner>
        <Row>
          <Col xs={{ span: 24 }} lg={{ span: 6}}>
            <Card
              hoverable
              style={{ width: 300, padding: 10, marginTop: 10 }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300, padding: 10, marginTop: 10  }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6, offset: 2 }}>
            <Card
              hoverable
              style={{ width: 300, padding: 10 , marginTop: 10 }}
              cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>

      </Page>
    );
  }
}

export default Breakfast;
