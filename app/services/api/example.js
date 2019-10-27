import {APIClient} from './bootstrap';

export const getUsers = async () => {
  const response = await APIClient.get('/users');
  console.log(response.data);
};

export const createUser = async (name, job) => {
  const response = await APIClient.post('/users', {
    name,
    job,
  });
  console.log(response.data);
};
