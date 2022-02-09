/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-no-undef */
import { Layout } from 'antd';
import Logo from '../Logo';
import TransferFilter from '../TransferFilter';
import TicketList from '../TicketList';
import './app.scss';

const { Header, Sider, Content } = Layout;

const App = () => {
  return (
    <Layout className="wrapper">
      <Header>
        <Logo />
      </Header>
      <Layout style={{ padding: '0 50px' }}>
        <Sider theme="light" width="232">
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
