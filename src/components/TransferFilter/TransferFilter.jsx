/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
import { Checkbox } from 'antd';
import './transferfilter.scss';

const checkBoxProps = [
  {
    name: 'all',
    label: 'Все',
  },
  {
    name: '0',
    label: 'Без пересадок',
  },
  {
    name: '1',
    label: '1 пересадка',
  },
  {
    name: '2',
    label: '2 пересадки',
  },
  {
    name: '3',
    label: '3 пересадки',
  },
];

const TransferFilter = () => {
  return (
    <div className="filter-card">
      <h3 className="filter-card__title">Количество пересадок</h3>
      <div className="filter-card__properties">
        {checkBoxProps.map((el) => (
          <Checkbox name={el.name} key={el.name}>
            {el.label}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

export default TransferFilter;
