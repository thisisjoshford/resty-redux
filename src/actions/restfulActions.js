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

