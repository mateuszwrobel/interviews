// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
// import { SunriseIcon } from '@interviewspnpm/forecast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

const Forecast = lazy(() =>
  import('@interviewspnpm/forecast').then((module) => ({
    default: module.Forecast,
  }))
);

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 bg-gray-50 border-b border-gray-200 dark:bg-gray-850 dark:border-gray-800">
        <div className="container mx-auto grid items-center gap-4">
          <div className="flex items-center gap-2">
            {/*<SunriseIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />*/}
            <h1 className="text-xl font-semibold">Weather App</h1>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Forecast />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
