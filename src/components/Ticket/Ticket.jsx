import { Card } from 'antd';
import lightFormat from 'date-fns/lightFormat';
import PropTypes from 'prop-types';

import './Ticket.scss';

const Ticket = ({ carrier, price, segments }) => {
  const [from, to] = segments;

  const getTime = (date, duration) => {
    const formatDate = new Date(date);
    const timeTakeoff = lightFormat(formatDate, 'HH:mm');
    const timeLanding = lightFormat(formatDate.setMinutes(formatDate.getMinutes() + duration), 'HH:mm');
    return `${timeTakeoff} - ${timeLanding}`;
  };

  const getTransfers = (stopsLength) => {
    let stopsCount = `${stopsLength} пересадок`;
    if (stopsLength > 1) {
      stopsCount = `${stopsLength} пересадки`;
    }
    if (stopsLength === 1) {
      stopsCount = `${stopsLength} пересадка`;
    }
    return stopsCount;
  };

  return (
    <Card bordered={false}>
      <div className="ticket">
        <div className="ticket__header">
          <h1 className="ticket__price">{`${price}Р`}</h1>
          <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt="company" className="ticket__company" />
        </div>
        <div className="ticket__body">
          <div className="ticket__destinate-from">
            <div className="ticket__destinate">
              <span className="ticket__destinate-origin ticket__span-gray">{`${from.origin} - ${from.destination}`}</span>
              <span className="ticket__destinate-time ticket__span-black">{getTime(from.date, from.duration)}</span>
            </div>
            <div className="ticket__waytime">
              <span className="ticket__waytime-header ticket__span-gray">В пути</span>
              <span className="ticket__waytime-time ticket__span-black">
                {`${Math.floor(from.duration / 60)}ч ${from.duration % 60}м`}
              </span>
            </div>
            <div className="ticket__transfer">
              <div className="ticket__transfer-count ticket__span-gray">{getTransfers(from.stops.length)}</div>
              <div className="ticket__transfer-origin ticket__span-black">{from.stops.join(', ')}</div>
            </div>
          </div>
          <div className="ticket__destinate-out">
            <div className="ticket__destinate">
              <span className="ticket__destinate-origin ticket__span-gray">{`${to.origin} - ${to.destination}`}</span>
              <span className="ticket__destinate-time ticket__span-black">{getTime(to.date, to.duration)}</span>
            </div>
            <div className="ticket__waytime">
              <span className="ticket__waytime-header ticket__span-gray">В пути</span>
              <span className="ticket__waytime-time ticket__span-black">{`${Math.floor(to.duration / 60)}ч ${
                to.duration % 60
              }м`}</span>
            </div>
            <div className="ticket__transfer">
              <div className="ticket__transfer-count ticket__span-gray">{getTransfers(to.stops.length)}</div>
              <div className="ticket__transfer-origin ticket__span-black">{to.stops.join(', ')}</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

Ticket.propTypes = {
  carrier: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Ticket;
