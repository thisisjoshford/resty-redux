import React from 'react';
import style from './Response.css';
import { useProvider } from '../../hooks/Provider';

const Response = () => {
  const { response } = useProvider();

  return (
    <section className={style.Box}>
      <pre>
        {JSON.stringify(response, null, 2)}
      </pre>
    </section>
  );
};

export default Response;
