import axios from 'axios';

import { BASE_URL } from '../shared/constants';
import { ContentItem } from './models';

const API = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
});

class ApiService {
  getContent = async (dirId: number): Promise<ContentItem> => {
    const { data } = await API.get<ContentItem>('/api/content', {
      params: { dirId: dirId || undefined },
    });
    return data;
  };
}

export const apiService = new ApiService();
