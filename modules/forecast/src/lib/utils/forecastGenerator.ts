export type WeatherData = {
  timestamp: number;
  cloudDescription: string;
  temperatureF: number;
  temperatureC: number;
  windDirection: string;
  windStrengthKmh: number;
  windStrengthMph: number;
  atmosphericPressure: number;
};

export function generateRandomWeatherData(timestamp = Date.now()): WeatherData {
  const cloudDescriptions = ['Clear', 'Partly cloudy', 'Cloudy', 'Overcast'];
  const windDirections = ['NW', 'SE', 'NE', 'SW'];
  const windStrengthsMph = [5, 10, 15, 20, 25];

  const randomCloudDescription =
    cloudDescriptions[Math.floor(Math.random() * cloudDescriptions.length)];
  const randomTemperatureF = Math.round(
    59 + Math.random() * 18 * (Math.random() > 0.5 ? 1 : -1)
  );
  const randomWindDirection =
    windDirections[Math.floor(Math.random() * windDirections.length)];
  const randomWindStrengthMph =
    windStrengthsMph[Math.floor(Math.random() * windStrengthsMph.length)];

  const randomTemperatureC = Math.round(((randomTemperatureF - 32) * 5) / 9);
  const randomAtmosphericPressure = Math.round(980 + Math.random() * 70);
  const randomWindStrengthKmh = Math.round(randomWindStrengthMph * 1.60934);

  return {
    timestamp,
    cloudDescription: randomCloudDescription,
    temperatureF: randomTemperatureF,
    temperatureC: randomTemperatureC,
    windDirection: randomWindDirection,
    windStrengthKmh: randomWindStrengthKmh,
    windStrengthMph: randomWindStrengthMph,
    atmosphericPressure: randomAtmosphericPressure,
  };
}

export type partialTimeframe = 'morning' | 'afternoon' | 'evening' | 'night';
export type WeatherDataForDay = { [K in partialTimeframe]: WeatherData };

export type WeatherDataForDays = {
  today: WeatherDataForDay;
  tomorrow: WeatherDataForDay;
};

const oneHourInMilliseconds = 60 * 60 * 1000;
const fourTimesADay = [
  {
    timeframe: 'morning',
    hourOffset: 4,
  },
  {
    timeframe: 'afternoon',
    hourOffset: 12,
  },
  {
    timeframe: 'evening',
    hourOffset: 17,
  },
  {
    timeframe: 'night',
    hourOffset: 20,
  },
] as const;

export function generateWeatherDataForDays(): WeatherDataForDays {
  const now = new Date();
  now.setHours(0, 1, 0, 0);
  const timestampNow = now.getTime();

  const weatherDataForDay = (dayOffset: number): WeatherDataForDay => {
    return fourTimesADay.reduce((acc, { timeframe, hourOffset }) => {
      const timestamp =
        timestampNow +
        dayOffset * 24 * oneHourInMilliseconds +
        hourOffset * oneHourInMilliseconds;
      acc[timeframe] = {
        ...generateRandomWeatherData(timestamp),
      };
      return acc;
    }, {} as WeatherDataForDay);
  };

  return {
    today: weatherDataForDay(0),
    tomorrow: weatherDataForDay(1),
  };
}
