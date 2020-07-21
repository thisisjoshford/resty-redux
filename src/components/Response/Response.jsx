import React from 'react';
import style from './Response.css';
import { useSubmitForm } from '../../hooks/submitFormHooks';

const Response = () => {
  const { response } = useSubmitForm();

  return (
    <section className={style.Box}>
      <pre>
        {JSON.stringify(response, null, 2)}
      </pre>
    </section>
  );
};

export default Response;
