import axios from 'axios';
import ApiRootUrl from './api.location';
import authHeader from './auth-header';

const API_URL = ApiRootUrl + '/recipes';

const Create = () => {
  return axios.post(API_URL, { headers: authHeader() });
};

export default Create;
