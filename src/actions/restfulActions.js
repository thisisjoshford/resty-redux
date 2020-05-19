import { fetchRequest } from '../services/fetchRequest';

export const setUrl = (url) => ({
  type: 'SET_URL',
  payload: url
});

export const setMethod = (method) => ({
  type: 'SET_METHOD',
  payload: method
});

export const setTextBody = (textBody) => ({
  type: 'SET_TEXT',
  payload: textBody
});

export const addHistory = (newFetch) => ({
  type: 'ADD_HISTORY',
  payload: newFetch
});

export const addResponse = (response) => ({
  type: 'ADD_RESPONSE',
  payload: response
});

export const hitApi = (url, method, textBody) => dispatch => {
  return fetchRequest(url, method, textBody)
    .then(res => {
      dispatch(addResponse(res));
      dispatch(addHistory(({ url, method }))
      );});
};
