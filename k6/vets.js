import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 100 }, // below normal load
    { duration: '20s', target: 200 },
    { duration: '20s', target: 300 }, // normal load
    { duration: '10s', target: 400 },
    { duration: '10s', target: 500 }, // around the breaking point
    { duration: '10s', target: 600 }, // around the breaking point
    { duration: '10s', target: 700 }, // around the breaking point
    { duration: '10m', target: 700 },
    { duration: '20s', target: 600 }, // beyond the breaking point
    { duration: '20s', target: 700 },
    { duration: '1m', target: 0 }, // scale down. Recovery stage.
  ],
};

export default function () {
  const BASE_URL = 'http://172.20.2.138:8080'; // make sure this is not production

  const responses = http.batch([
    ['GET', `${BASE_URL}/api/vet/vets`, null, { tags: { name: 'vets' } }],
    ['GET', `${BASE_URL}/api/vet/vets`, null, { tags: { name: 'vets' } }],
    ['GET', `${BASE_URL}/api/vet/vets`, null, { tags: { name: 'vets' } }],
    ['GET', `${BASE_URL}/api/vet/vets`, null, { tags: { name: 'vets' } }],
  ]);

  sleep(1);
}

