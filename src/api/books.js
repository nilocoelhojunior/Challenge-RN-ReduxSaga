import { API_URL, APP_NAME } from 'react-native-dotenv';

import api from './api';

import type { NewsType } from './types';

const endpoints = {
  design: () => 'https://www.googleapis.com/books/v1/volumes?q=',
  privacy: () => '/privacy_policy',
};

/** ****************
 * TERMS OF USE *
 ***************** */

export const terms = async (): Promise<NewsType> => {
  const url = `${API_URL}${endpoints.terms()}`;

  return api({
    method: 'GET',
    url,
    headers,
  });
};

/** ****************
 * TERMS OF PRIVACY *
 ***************** */

export const privacy = async (): Promise<NewsType> => {
  const url = `${API_URL}${endpoints.privacy()}`;
  const headers = {
    'X-App-Client': APP_NAME,
  };

  return api({
    method: 'GET',
    url,
    headers,
  });
};
