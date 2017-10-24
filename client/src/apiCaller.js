import fetch from 'isomorphic-fetch';
// import Config from '../../server/config';

export const API_URL = 'http://localhost:8085/user';

export function callApi(endpoint, method = 'get', body) {
  return fetch(`${API_URL}/${endpoint}`, {
    headers: { 'content-type': 'application/json', xhrFields: {withCredentials: true} },
    credentials: 'include',
    method,
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  });
}