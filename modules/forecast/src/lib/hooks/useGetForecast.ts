import { useReducer, useEffect } from 'react';
import { fetchForecastForCity } from '../api/fetchForecastForCity';
import { WeatherDataForDays } from '../utils/forecastGenerator'; // replace with your actual API function

type IdleState = { status: 'idle' };
type LoadingState = { status: 'loading'; city: string };
type LoadedState = {
  status: 'loaded';
  city: string;
  forecast: WeatherDataForDays;
};
type ErrorState = { status: 'error'; city: string; error: any };

type State = IdleState | LoadingState | LoadedState | ErrorState;

type Action =
  | { type: 'startLoading'; city: string }
  | { type: 'loaded'; forecast: WeatherDataForDays }
  | { type: 'error'; error: any };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'startLoading':
      return { status: 'loading', city: action.city };
    case 'loaded':
      return {
        status: 'loaded',
        city: (state as LoadingState).city,
        forecast: action.forecast,
      };
    case 'error':
      return {
        status: 'error',
        city: (state as LoadingState).city,
        error: action.error,
      };
    default:
      return state;
  }
}

export function useGetForecast() {
  const [state, dispatch] = useReducer(reducer, { status: 'idle' });

  useEffect(() => {
    if (state.status === 'loading') {
      const { promise, abort } = fetchForecastForCity(state.city);
      promise
        .then((data) => {
          dispatch({ type: 'loaded', forecast: data });
        })
        .catch((error) => {
          dispatch({ type: 'error', error });
        });

      return () => {
        abort();
      };
    }
    // state.city is not needed to be in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.status]);

  const setCity = (city: string) => {
    dispatch({ type: 'startLoading', city });
  };

  return { setCity, state: state };
}
