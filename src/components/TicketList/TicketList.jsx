import React, { useState } from 'react';

import { Radio, List, Button, Spin, Alert } from 'antd';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';

import { Ticket } from '../Ticket';
import './TicketList.scss';

const TicketList = () => {
  const { tickets } = useSelector((state) => state.tickets);
  const { transfers } = useSelector((state) => state);
  const [sort, changeSort] = useState('CHEAPEST');

  const [ticketsToView, changeTicketsToView] = useState(5);

  const filteredList = tickets.slice(0, ticketsToView).filter((ticket) => {
    const stopsThere = ticket.segments[0].stops.length;
    const stopsBack = ticket.segments[1].stops.length;
    const valuesForTransfers = {
      allTransfers: 'all',
      zeroTransfers: 0,
      oneTransfer: 1,
      twoTransfers: 2,
      threeTransfers: 3,
    };

    if (transfers.allTransfers) return true;

    return Object.keys(transfers).some((transferName) => {
      if (!transfers[transferName]) {
        return false;
      }
      return (
        valuesForTransfers[transferName] &&
        (stopsThere === valuesForTransfers[transferName] || stopsBack === valuesForTransfers[transferName])
      );
    });
  });

  const sortValue = {
    CHEAPEST: (prev, next) => prev.price - next.price,
    FASTER: (prev, next) =>
      prev.segments.reduce((acc, el) => el.duration + acc, 0) - next.segments.reduce((acc, el) => el.duration + acc, 0),
    OPTIMAL: (prev, next) =>
      prev.segments.reduce((acc, el) => el.stops.length + acc, 0) -
      next.segments.reduce((acc, el) => el.stops.length + acc, 0),
  };

  filteredList.sort(sortValue[sort]);

  if (!tickets.length) {
    return <Spin size="large" />;
  }

  if (!filteredList.length) {
    return <Alert message="К сожалению, по данным фильтрам ничего не найдено." type="info" />;
  }

  return (
    <List grid={{ gutter: 16, column: 1 }}>
      <List.Item>
        <Radio.Group
          defaultValue={sort}
          onChange={(event) => changeSort(event.target.value)}
          buttonStyle="solid"
          size="large"
        >
          <Radio.Button value="CHEAPEST">Самый дешевый</Radio.Button>
          <Radio.Button value="FASTER">Самый быстрый</Radio.Button>
          <Radio.Button value="OPTIMAL">Оптимальный</Radio.Button>
        </Radio.Group>
      </List.Item>
      {filteredList.map((ticket) => (
        <List.Item key={v4()}>
          <Ticket carrier={ticket.carrier} price={ticket.price} segments={ticket.segments} />
        </List.Item>
      ))}
      <List.Item>
        <Button type="primary" onClick={() => changeTicketsToView(ticketsToView + 5)}>
          Показать еще 5 билетов!
        </Button>
      </List.Item>
    </List>
  );
};

export default TicketList;
