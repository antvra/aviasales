import React from 'react';

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

const createNewFilterState = (oldState, filterName) => {
  const newFilterState = { ...oldState, [filterName]: !oldState[filterName] };
  if (filterName === 'allTransfers') {
    Object.keys(newFilterState).forEach((filter) => {
      newFilterState[filter] = !newFilterState.allTransfers;
    });
  }
  return { ...newFilterState, allTransfers: !Object.values(newFilterState).slice(1).includes(false) };
};

const TransferFilter = () => {
  const state = useSelector((state) => state.transfers);
  const dispatch = useDispatch();
  return (
    <div className="filter-card">
      <h3 className="filter-card__title">Количество пересадок</h3>
      <div className="filter-card__properties">
        {checkBoxProps.map((filter) => (
          <Checkbox
            name={filter.name}
            key={filter.name}
            checked={state[filter.name]}
            onChange={() => dispatch(changeFilter(createNewFilterState(state, filter.name)))}
          >
            {filter.label}
          </Checkbox>
        ))}
      </div>
    </div>
  );
};

export default TransferFilter;
