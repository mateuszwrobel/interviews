import { WeatherData } from '../utils/forecastGenerator';
import { MoonIcon, SunIcon, SunriseIcon, SunsetIcon } from '../icons';

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
