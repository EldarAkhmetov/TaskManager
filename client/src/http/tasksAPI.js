import { $host, $authHost } from './index';

export const fetchTasks = async (page, limit, sortByName, sortByEmail, sortByStatus) => {
  let queryString = `?page=${page}&limit=${limit}`;
  if (sortByName) queryString += '&sortByName=' + sortByName;
  if (sortByEmail) queryString += '&sortByEmail=' + sortByEmail;
  if (sortByStatus) queryString += '&sortByStatus=' + sortByStatus;

  const response = await $host.get('api/task' + queryString);
  return response;
};

export const createTask = async (name, email, description) => {
  const {data} = await $host.post('api/task/', {name, email, description});
  return data;
};

export const getTask = async (id) => {
  const response = await $authHost.get('api/task/' + id);
  return response;
};

export const editTask = async (id, description, isActive) => {
  const response = await $authHost.put('api/task/' + id, {id, description, is_active : isActive});
  return response;
};

