import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
});

export const mainInfoAPI = {
  async getInfo(mainInfo) {
    const formData = new FormData();
    
    for (const key in mainInfo) {
      formData.append(key, mainInfo[key]);
    }

    const res = await instance.post('recognize', formData, {
      headers: {
        'Content-Type': 'info',
      },
    });

    return res.data;
  },
};
