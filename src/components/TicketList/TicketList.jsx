/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { Radio, List, Button } from 'antd';

import Ticket from '../Ticket';
import './TicketList.scss';

const TicketList = () => {
  return (
    <List grid={{ gutter: 16, column: 1 }}>
      <List.Item>
        <Radio.Group defaultValue="a" buttonStyle="solid" size="large">
          <Radio.Button value="a">Самый дешевый</Radio.Button>
          <Radio.Button value="b">Самый быстрый</Radio.Button>
          <Radio.Button value="c">Оптимальный</Radio.Button>
        </Radio.Group>
      </List.Item>
      <List.Item>
        <Ticket />
      </List.Item>
      <List.Item>
        <Ticket />
      </List.Item>
      <List.Item>
        <Ticket />
      </List.Item>
      <List.Item>
        <Ticket />
      </List.Item>
      <List.Item>
        <Ticket />
      </List.Item>
      <List.Item>
        <Button type="primary">Показать еще 5 билетов!</Button>
      </List.Item>
    </List>
  );
};

export default TicketList;
