import axios from 'axios';
import Api from '../Api';

const apiUrl = Api.url('accounts');

const Account = {
  async create(data) {
    try {
      const response = await axios.post(apiUrl, data);
      return Api.checkStatus(response, 'CREATE_ACCOUNT');
    } catch (err) {
      if (err.response) {
        return Api.checkStatus(err.response, 'CREATE_ACCOUNT');
      }
      return err;
    }
  },

  async lookup(accountId) {
    try {
      const response = await axios.get(`${apiUrl}/${accountId}`);
      return Api.checkStatus(response, 'LOOKUP_ACCOUNT');
    } catch (err) {
      if (err.response) {
        return Api.checkStatus(err.response, 'LOOKUP_ACCOUNT');
      }
      return err;
    }
  },

  async search(data) {
    try {
      const url = Api.addQuery(apiUrl, data);
      const response = await axios.get(url);
      return Api.checkStatus(response, 'SEARCH_ACCOUNTS');
    } catch (err) {
      if (err.response) {
        console.error('error');
        return Api.checkStatus(err.response, 'SEARCH_ACCOUNTS');
      }
      return err;
    }
  },
};

export default Account;
