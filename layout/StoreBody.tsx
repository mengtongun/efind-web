import { Descriptions, Layout } from 'antd';
import { IStore } from 'interfaces';
import Image from 'next/image';
import React from 'react';
import Body from './Body';

const { Header, Footer, Sider, Content } = Layout;
declare type StoreBodyPropsType = {
  data: IStore;
  stores: IStore[];
};

const StoreBody: React.FC<StoreBodyPropsType> = (props) => {
  const { data, stores } = props;
  return (
    <Layout className="text-center text-blue-500 h-full border border-gray-400 py-12 bg-white">
      <Sider theme="light" width={500} className=" border border-gray-400 text-black">
        <iframe
          src={`https://www.facebook.com/plugins/page.php?href=${data.fb}&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId`}
          width="500"
          height="500"
          style={{ border: 'none', overflow: 'none' }}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </Sider>
      <Layout>
        <Header className="text-white bg-white border border-gray-400 py-2">
          {/* Store name with logo branding */}
          <div className="flex justify-center items-center">
            <Image src={props.data.logo} alt={props.data.name} className="w-20 h-20" width={40} height={40} />
            <h1 className="text-2xl font-bold">{props.data.name}</h1>
          </div>
        </Header>
        <Content>
          <div className="p-8 bg-white">
            <Descriptions>
              <Descriptions.Item label="Description">{data.description}</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label="Phone Number">{data.phones}</Descriptions.Item>
              <Descriptions.Item label="Category">{data.category.name}</Descriptions.Item>
              <Descriptions.Item label="Email">{data.email || 'No Email'}</Descriptions.Item>
            </Descriptions>

            <Descriptions>
              <Descriptions.Item label="Address">{data.location || 'No Location Provided'}</Descriptions.Item>
            </Descriptions>
          </div>
        </Content>
        <Footer>
          <h1 className="text-2xl my-4">Other Stores</h1>
          <Body stores={stores} />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default StoreBody;
