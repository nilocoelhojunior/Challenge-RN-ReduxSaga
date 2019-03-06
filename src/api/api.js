// @flow
import idx from 'idx';

import APIError from './utils/APIError';
import parseResponseBody from './utils/parseResponseBody';
import withTimeout from './utils/withTimeout';

export type ApiArgumentsType = {
  url: string,
  method?: string,
  headers?: Object,
  body?: Object,
};

const api = async (args: ApiArgumentsType): Promise<any> => {
  const { url } = args;

  const method = idx(args, _ => _.method) || 'GET';
  const headers = idx(args, _ => _.headers) || {};
  const body = idx(args, _ => _.body) || {};

  const options = {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...headers,
    },
    body: Object.keys(body).length > 0 ? JSON.stringify(body, null) : null,
  };

  const response = await fetch(url, options);
  const responseBody = await parseResponseBody(response);

  if (response.status <= 199 || response.status >= 301) {
    const messageError =
      typeof responseBody === 'object' ? idx(responseBody, _ => _.message) : responseBody;

    throw new APIError(response.status, responseBody.status, messageError || '');
  }

  return responseBody;
};

export default withTimeout(api);
