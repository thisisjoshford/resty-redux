import React from 'react';
import HistoryItem from './HistoryItem';
import { useProvider } from '../../hooks/Provider';

const HistoryList = () => {
  const { history } = useProvider();
  const historyNodes = history
    .map((item, i) => (
      <li key={i}>
        <HistoryItem {...item} />
      </li>
    ));
  
  return (
    <ul>
      {historyNodes}
    </ul>
  );
};

export default HistoryList;
