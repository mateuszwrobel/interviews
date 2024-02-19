import {
  partialTimeframe,
  WeatherData,
  WeatherDataForDay,
  WeatherDataForDays,
} from '../utils/forecastGenerator';
import { PartialForecast } from './partialForecast';

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
