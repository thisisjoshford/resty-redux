import React, { createContext, useState, useContext } from 'react';
import { fetchRequest } from '../services/fetchRequest';

const RestyContext = createContext();

export const RestyProvider = ({ children }) => {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState('GET');
  const [textBody, setTextBody] = useState('');
  const [response, setResponse] = useState([]);
  const [history, setHistory] = useState([]);

  const onChange = ({ target }) => {
    if(target.name === 'url') setUrl(target.value);
    if(target.name === 'method') setMethod(target.value);
    if(target.name === 'textBody') setTextBody(target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    fetchRequest(url, method, textBody)
      .then(res => {
        setResponse(res);
        setHistory(prevHistory => 
          [{ url, method }, ...prevHistory]);
      });
  };

  return (
    <RestyContext.Provider 
      value ={{ 
        url, 
        method, 
        textBody, 
        response,
        history, 
        onChange, 
        onSubmit 
      }}>
      {children}
    </RestyContext.Provider>
  );
};

export const useProvider = () => {
  const context = useContext(RestyContext);
  return context;
};
