import React from 'react';
import HistoryItem from './HistoryItem';
import { useSubmitForm } from '../../hooks/submitFormHooks';

const HistoryList = () => {
  const { history } = useSubmitForm();
  
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
