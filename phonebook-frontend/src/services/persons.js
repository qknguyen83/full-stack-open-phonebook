import axios from 'axios';

const baseUrl = process.env.REACT_APP_BACKEND_URL || undefined;

const getAll = () => {
  const request = axios.get(`${baseUrl}/persons`);
  return request.then((response) => response.data);
};

const create = (newPerson) => {
  const request = axios.post(`${baseUrl}/persons`, newPerson);
  return request.then((response) => response.data);
};

const update = (duplicate, newNumber) => {
  const request = axios.put(`${baseUrl}/persons/${duplicate.id}`, {
    name: duplicate.name,
    number: newNumber,
  });
  return request.then((response) => response.data);
};

const del = (id) => {
  const request = axios.delete(`${baseUrl}/persons/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, create, update, del };
