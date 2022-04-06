import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row, Skeleton, Space, Switch } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [loading, setLoading] = useState(true);
  const onChange = () => {
    setLoading(!loading);
  };
  return (
    <div>
      <main>
        <h1>About Page</h1>
        <Space align="center">
          <Space>
            <Switch checked={!loading} onChange={onChange} />
          </Space>
          <Space align="center">
            <Row gutter={16}>
              {[...Array(10)].map((_, index) => (
                <Col key={index} className="gutter-row" span={6}>
                  <Card
                    style={{ width: 300, marginTop: 16 }}
                    actions={[
                      <SettingOutlined key="setting" />,
                      <EditOutlined key="edit" />,
                      <EllipsisOutlined key="ellipsis" />,
                    ]}
                  >
                    <Skeleton loading={loading} avatar active>
                      <Meta
                        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                        title="Card title"
                        description="This is the description"
                      />
                    </Skeleton>
                  </Card>
                </Col>
              ))}
            </Row>
          </Space>
        </Space>

        <p>
          <Link href="/">
            <a>&larr; Go Back</a>
          </Link>
        </p>
      </main>
    </div>
  );
}
