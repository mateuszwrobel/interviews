/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nhgNyvQ8HJw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { components } from '@interviewspnpm/utils';
import { MoonIcon, SunsetIcon, SunriseIcon, SunIcon } from './icons';

const { Input, Label, Button } = components;

const TIME_FRAMES = {
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

type TimeFrame = keyof typeof TIME_FRAMES;

function PartialForecast({ timeframe }: { timeframe: TimeFrame }) {
  const { name, IconComponent } = TIME_FRAMES[timeframe];
  return (
    <div className="flex items-center gap-4">
      <IconComponent className="w-8 h-8" />
      <div className="grid gap-0.5">
        <p className="text-sm font-medium">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
        </p>
      </div>
    </div>
  );
}

export function Forecast() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 bg-gray-50 border-b border-gray-200 dark:bg-gray-850 dark:border-gray-800">
        <div className="container mx-auto grid items-center gap-4">
          <div className="flex items-center gap-2">
            <SunriseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            <h1 className="text-xl font-semibold">Weather App</h1>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto grid items-center gap-4 p-4">
          <form className="flex flex-col lg:flex-row items-center gap-4">
            <div className="grow flex items-center self-stretch lg:self-auto gap-4">
              <Label className="m-0" htmlFor="city">
                City
              </Label>
              <Input id="city" placeholder="Enter your city" required />
            </div>
            <Button className="self-stretch lg:self-auto" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div className="container mx-auto grid items-center gap-4 p-4">
          <div className="grid gap-2">
            <h2 className="text-3xl font-semibold">New York, NY</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-start gap-4 md:gap-16">
            <div className="grid gap-1">
              <h3 className="text-xl font-semibold">Today</h3>
              <div className="grid gap-1.5">
                <PartialForecast timeframe="morning" />
                <PartialForecast timeframe="afternoon" />
                <PartialForecast timeframe="evening" />
                <PartialForecast timeframe="night" />
              </div>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-semibold">Tomorrow</h3>
              <div className="grid gap-1.5">
                <PartialForecast timeframe="morning" />
                <PartialForecast timeframe="afternoon" />
                <PartialForecast timeframe="evening" />
                <PartialForecast timeframe="night" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Forecast;
