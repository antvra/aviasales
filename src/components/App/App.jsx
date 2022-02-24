import React, { useEffect } from 'react';

import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { searchID, tickets } from '../../store/thunks';
import { Logo } from '../Logo';
import { TicketList } from '../TicketList';
import { TransferFilter } from '../TransferFilter';
import './App.scss';

const { Header, Sider, Content } = Layout;

const App = () => {
  const dispatch = useDispatch();
  const { searchId } = useSelector((state) => state.searchID);
  const { loadComplete } = useSelector((state) => state.tickets);
  if (searchId && !loadComplete) {
    dispatch(tickets(searchId));
  }
  useEffect(() => dispatch(searchID()), [dispatch]);
  return (
    <Layout className="wrapper">
      <Header>
        <Logo loadComplete={loadComplete} />
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
