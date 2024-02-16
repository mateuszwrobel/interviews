/**
 * v0 by Vercel.
 * @see https://v0.dev/t/nhgNyvQ8HJw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { components } from '@interviewspnpm/utils';
const { Input, Label, Button } = components;
export function Forecast() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 bg-gray-50 border-b border-gray-200 dark:bg-gray-850 dark:border-gray-800">
        <div className="container mx-auto grid items-center gap-4">
          <div className="flex items-center gap-2">
            <SunriseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            <h1 className="text-xl font-semibold">Weather</h1>
          </div>
          <form className="flex items-center gap-4">
            <Label className="m-0" htmlFor="city">
              City
            </Label>
            <Input id="city" placeholder="Enter your city" required />
            <Button type="submit">Submit</Button>
          </form>
        </div>
      </header>
      <main className="flex-1">
        <div className="container mx-auto grid items-center gap-4 p-4">
          <div className="grid gap-2">
            <h2 className="text-3xl font-semibold">New York, NY</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-1">
              <h3 className="text-xl font-semibold">Today</h3>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-4">
                  <SunriseIcon className="w-8 h-8" />
                  <div className="grid gap-0.5">
                    <p className="text-sm font-medium">Morning</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <SunIcon className="w-8 h-8" />
                  <div className="grid gap-0.5">
                    <p className="text-sm font-medium">Afternoon</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <SunsetIcon className="w-8 h-8" />
                  <div className="grid gap-0.5">
                    <p className="text-sm font-medium">Evening</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MoonIcon className="w-8 h-8" />
                  <div className="grid gap-0.5">
                    <p className="text-sm font-medium">Night</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-1">
              <h3 className="text-xl font-semibold">Tomorrow</h3>
              <div className="grid gap-1.5">
                <div className="flex items-center gap-4">
                  <SunriseIcon className="w-8 h-8" />
                  <div className="grid gap-0.5">
                    <p className="text-sm font-medium">Morning</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <SunIcon className="w-8 h-8" />
                  <div className="grid gap-0.5">
                    <p className="text-sm font-medium">Afternoon</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <SunsetIcon className="w-8 h-8" />
                  <div className="grid gap-0.5">
                    <p className="text-sm font-medium">Evening</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MoonIcon className="w-8 h-8" />
                  <div className="grid gap-0.5">
                    <p className="text-sm font-medium">Night</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Partly cloudy. High 42F. Winds NW at 10 to 15 mph.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function SunriseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v8" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m8 6 4-4 4 4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  );
}

function SunsetIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 10V2" />
      <path d="m4.93 10.93 1.41 1.41" />
      <path d="M2 18h2" />
      <path d="M20 18h2" />
      <path d="m19.07 10.93-1.41 1.41" />
      <path d="M22 22H2" />
      <path d="m16 6-4 4-4-4" />
      <path d="M16 18a4 4 0 0 0-8 0" />
    </svg>
  );
}

export default Forecast;
