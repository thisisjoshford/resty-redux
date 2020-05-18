const METHODS = ['POST', 'PUT', 'PATCH'];

export const fetchRequest = (url, method, body) => {
  return fetch(url, {
    method,
    body: METHODS.includes(method) ? body : null,
    headers: {
      'Content-Type': METHODS.includes(method) 
        ? 'application/json' 
        : null
    }
  })
    .then(res => res.json());
};
