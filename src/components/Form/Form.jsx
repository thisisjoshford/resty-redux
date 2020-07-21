import React from 'react';
import style from './FormStyle.css';
import { useSubmitForm } from '../../hooks/submitFormHooks';

const Form = () => {
  const {     
    url,
    method,
    textBody,
    onChange,
    onSubmit } = useSubmitForm();
    
  return (
    <div className={style.Form}>
      <form className={style.Form} onSubmit={onSubmit}>
      
        <label>
          <input 
            type="text"
            name="url"
            className={style.Url}
            placeholder='enter target URL... '
            value={url}
            onChange={onChange}
          >
          </input>
        </label>
      
        <div>
          <label className={style.Radio}>
            <input 
              className={style.RadioButton}
              type="radio" 
              name="method" 
              value="GET"
              checked={method === 'GET'} 
              onChange={onChange}
            /> GET 
          </label>
          <label className={style.Radio}>
            <input 
              className={style.RadioButton}
              type="radio" 
              name="method" 
              value="POST"
              checked={method === 'POST'}
              onChange={onChange}
            /> POST 
          </label>
          <label className={style.Radio}>
            <input 
              className={style.RadioButton}
              type="radio" 
              name="method" 
              value="PUT"
              checked={method === 'PUT'}
              onChange={onChange} 
            /> PUT 
          </label>
          <label className={style.Radio}>
            <input 
              className={style.RadioButton}
              type="radio" 
              name="method" 
              value="PATCH" 
              checked={method === 'PATCH'}
              onChange={onChange}
            /> PATCH 
          </label>
          <label className={style.Radio}>
            <input 
              className={style.RadioButton}
              type="radio" 
              name="method" 
              value="DELETE"
              checked={method === 'DELETE'}
              onChange={onChange}
            /> DELETE 
          </label>
        </div>

        <textarea 
          placeholder="JSON Body"
          name="textBody"
          value={textBody}
          onChange={onChange}
        >
        </textarea>

        <button type="submit">GO!</button>

      </form>
    </div>
  );
};

export default Form;
