import React from 'react';
import { useSubmitForm } from '../../hooks/submitFormHooks';

const HistoryItem = () => {
  const { url, method } = useSubmitForm();

  return (
    <section>
      <p>{url}</p>
      <p>{method}</p>
    </section>
  );
};

export default HistoryItem;
