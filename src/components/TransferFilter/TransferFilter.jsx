/* eslint-disable react-hooks/rules-of-hooks */
import { Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../store/actions';
import './TransferFilter.scss';

const checkBoxProps = [
  {
    name: 'allTransfers',
    label: 'Все',
  },
  {
    name: 'zeroTransfers',
    label: 'Без пересадок',
  },
  {
    name: 'oneTransfer',
    label: '1 пересадка',
  },
  {
    name: 'twoTransfers',
    label: '2 пересадки',
  },
  {
    name: 'threeTransfers',
    label: '3 пересадки',
  },
];

const TransferFilter = () => {
  const dispatch = useDispatch();
  const useChecked = (element) => useSelector((state) => state.transferReducer[element]);
  return (
    <div className="filter-card">
      <h3 className="filter-card__title">Количество пересадок</h3>
      <div className="filter-card__properties">
        {checkBoxProps.map((element) => (
          <Checkbox
            name={element.name}
            key={element.name}
            checked={useChecked(element.name)}
            onChange={() => dispatch(changeFilter(element.name))}
          >
            {element.label}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

export default TransferFilter;
