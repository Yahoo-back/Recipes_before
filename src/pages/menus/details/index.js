import React from 'react';
import { Page } from 'components';
import { Card, Input, Button } from 'antd';
import styles from './index.less';

class Detail extends React.Component {
  render() {
    return (
      <Page inner>
        <Card title="菜名">
          <span className={styles.title}>做法：</span>
        </Card>
      </Page>
    );
  }
}

export default Detail;
