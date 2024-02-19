import { CityForm } from '../components/cityForm';
import { useGetForecast } from '../hooks/useGetForecast';
import { ForecastResults } from '../components/forecastResults';

export function Forecast() {
  const { state, setCity } = useGetForecast();

  return (
    <>
      <CityForm onCitySet={setCity} />
      {state.status === 'loading' && <p className="container">Loading...</p>}
      {state.status === 'error' && (
        <p className="container">Error: {state.error.message}</p>
      )}
      {state.status === 'idle' && (
        <p className="container">Enter a city to get started</p>
      )}
      {state.status === 'loaded' && (
        <ForecastResults forecast={state.forecast} city={state.city} />
      )}
    </>
  );
}

export default Forecast;
