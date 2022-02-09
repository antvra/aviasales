/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { Card } from 'antd';
import companyLogo from '../../assets/img/S7logo.png';
import './ticket.scss';

const Ticket = () => {
  return (
    <Card bordered={false}>
      <div className="ticket">
        <div className="ticket__header">
          <h1 className="ticket__price">13 400Р</h1>
          <img src={companyLogo} alt="company" className="ticket__company" />
        </div>
        <div className="ticket__body">
          <div className="ticket__destinate-from">
            <div className="ticket__destinate">
              <span className="ticket__destinate-origin ticket__span-gray">mow-hkt</span>
              <span className="ticket__destinate-time ticket__span-black">10:45-08:00</span>
            </div>
            <div className="ticket__waytime">
              <span className="ticket__waytime-header ticket__span-gray">В пути</span>
              <span className="ticket__waytime-time ticket__span-black">21ч 15м</span>
            </div>
            <div className="ticket__transfer">
              <div className="ticket__transfer-count ticket__span-gray">2 пересадки</div>
              <div className="ticket__transfer-origin ticket__span-black">hkg, jnb</div>
            </div>
          </div>
          <div className="ticket__destinate-out">
            <div className="ticket__destinate">
              <span className="ticket__destinate-origin ticket__span-gray">mow-hkt</span>
              <span className="ticket__destinate-time ticket__span-black">11:20-00:50</span>
            </div>
            <div className="ticket__waytime">
              <span className="ticket__waytime-header ticket__span-gray">В пути</span>
              <span className="ticket__waytime-time ticket__span-black">13ч 30м</span>
            </div>
            <div className="ticket__transfer">
              <div className="ticket__transfer-count ticket__span-gray">1 пересадка</div>
              <div className="ticket__transfer-origin ticket__span-black">hkg</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Ticket;
