import React from 'react';
import { useSubmitForm } from '../../hooks/submitFormHooks';

const HistoryList = () => {
  const { history } = useSubmitForm();
  const historyNodes = history
    .map((item, i) => (
      <li key={i}>
        <p>{item.method}</p>
        <p>{item.url}</p>
      </li>
    ));
  
  return (
    <ul>
      {historyNodes}
    </ul>
  );
};

export default HistoryList;
