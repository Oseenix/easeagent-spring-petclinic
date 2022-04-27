import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 100 }, // below normal load
    { duration: '10s', target: 200 },
    { duration: '10s', target: 300 }, // normal load
    { duration: '10s', target: 400 },
    { duration: '10s', target: 500 }, // around the breaking point
    { duration: '5m', target: 500 },
    { duration: '20s', target: 600 }, // beyond the breaking point
    { duration: '20s', target: 700 },
    { duration: '1m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
  const BASE_URL = 'http://172.20.2.138:8080'; // make sure this is not production

  const responses = http.batch([
    ['GET', `${BASE_URL}/api/gateway/owners/1`, null, { tags: { name: 'owner' } }],
    ['GET', `${BASE_URL}/api/gateway/owners/2`, null, { tags: { name: 'owner' } }],
    ['GET', `${BASE_URL}/api/gateway/owners/3`, null, { tags: { name: 'owner' } }],
    ['GET', `${BASE_URL}/api/gateway/owners/4`, null, { tags: { name: 'owner' } }],
  ]);

  sleep(1);
}

