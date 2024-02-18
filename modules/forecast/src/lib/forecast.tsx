import { MoonIcon, SunIcon, SunriseIcon, SunsetIcon } from './icons';
import {
  generateWeatherDataForDays,
  partialTimeframe,
  WeatherData,
  WeatherDataForDay,
  WeatherDataForDays,
} from './utils/forecastGenerator';
import { CityForm } from './components/cityForm';
import { useGetForecast } from './hooks/useGetForecast';

export const TIME_FRAMES = {
  morning: {
    name: 'Morning',
    IconComponent: SunriseIcon,
  },
  afternoon: {
    name: 'Afternoon',
    IconComponent: SunIcon,
  },
  evening: {
    name: 'Evening',
    IconComponent: SunsetIcon,
  },
  night: {
    name: 'Night',
    IconComponent: MoonIcon,
  },
} as const;

export type TimeFrame = keyof typeof TIME_FRAMES;

export function PartialForecast({
  timeframe,
  weatherData,
}: {
  timeframe: TimeFrame;
  weatherData: WeatherData;
}) {
  const { name, IconComponent } = TIME_FRAMES[timeframe];
  return (
    <div className="flex items-center gap-4">
      <IconComponent className="w-8 h-8" />
      <div className="grid gap-0.5">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {weatherData.cloudDescription}, {weatherData.temperatureC}°C (
          {weatherData.temperatureF}°F). Winds {weatherData.windDirection} at{' '}
          {weatherData.windStrengthKmh} Km/h ({weatherData.windStrengthMph}{' '}
          mph).
        </p>
      </div>
    </div>
  );
}

function dayDataToPartialForecasts(
  acc: JSX.Element[],
  dayData: [string, WeatherData]
) {
  const [timeframe, weatherData] = dayData as [partialTimeframe, WeatherData];
  if (weatherData.timestamp > Date.now()) {
    acc.push(
      <PartialForecast
        key={timeframe}
        timeframe={timeframe}
        weatherData={weatherData}
      />
    );
  }
  return acc;
}

function renderDay(day: [string, WeatherDataForDay]) {
  const [dayKey, dayData] = day as [
    keyof WeatherDataForDays,
    WeatherDataForDay
  ];
  const dayLabel = dayKey === 'today' ? 'Today' : 'Tomorrow';

  const partialForecasts = Object.entries(dayData).reduce(
    dayDataToPartialForecasts,
    [] as JSX.Element[]
  );

  if (partialForecasts.length === 0) {
    return null;
  }
  return (
    <div key={dayKey} className="grid gap-1">
      <h3 className="text-xl font-semibold">{dayLabel}</h3>
      <div className="grid gap-1.5">{partialForecasts}</div>
    </div>
  );
}

export function ForecastResults({
  city,
  forecast,
}: {
  city: string;
  forecast: WeatherDataForDays;
}) {
  const daysForecast = Object.entries(forecast).map(renderDay);

  return (
    <div className="container mx-auto grid items-center gap-4 p-4">
      <div className="grid gap-2">
        <h2 className="text-3xl font-semibold">{city}</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-16">
        {daysForecast}
      </div>
    </div>
  );
}

export function Forecast() {
  const { state, setCity } = useGetForecast();

  return (
    <>
      <CityForm onCitySet={setCity} />
      {state.status === 'loading' && <p>Loading...</p>}
      {state.status === 'error' && <p>Error: {state.error.message}</p>}
      {state.status === 'idle' && <p>Enter a city to get started</p>}
      {state.status === 'loaded' && (
        <ForecastResults forecast={state.forecast} city={state.city} />
      )}
    </>
  );
}

export default Forecast;
