/* eslint-disable arrow-body-style */
import React from 'react';
import { Layout } from 'antd';

import Logo from '../Logo';
import TransferFilter from '../TransferFilter';
import TicketList from '../TicketList';
import './App.scss';

const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout className="wrapper">
      <Header>
        <Logo />
      </Header>
      <Layout style={{ padding: '0 50px' }}>
        <Sider theme="light" width="auto">
          <TransferFilter />
        </Sider>
        <Content>
          <TicketList />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
