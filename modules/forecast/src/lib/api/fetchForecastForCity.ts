import {
  generateWeatherDataForDays,
  WeatherDataForDays,
} from '../utils/forecastGenerator';
import { api } from '@interviewspnpm/core';

// export function fetchForecastForCity(city: string) {
//   const apiOptions = {
//     url: `some url/${city}`,
//     options: {
//       method: 'GET',
//     },
//   };
//
//   const { promise, abort } = api.fetchWithAbort<WeatherDataForDays>(apiOptions);
//   return promise;
// }

export function fetchForecastForCity(city: string) {
  const controller = new AbortController();
  const signal = controller.signal;

  const promise = new Promise<WeatherDataForDays>((resolve, reject) => {
    const i = setTimeout(() => {
      resolve(generateWeatherDataForDays());
    }, 1000);

    signal.addEventListener('abort', () => {
      clearTimeout(i);
      reject(new Error('Request Aborted'));
    });
  });

  return { promise, abort: controller.abort.bind(controller) };
}
