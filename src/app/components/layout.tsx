import { Outlet } from 'react-router-dom';
import { auth } from '@interviewspnpm/core';
export function Layout() {
  const user = auth.useUser();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 bg-gray-50 border-b border-gray-200 dark:bg-gray-850 dark:border-gray-800">
        <div className="container mx-auto grid items-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-xl font-semibold">Weather App</h1>
            {user && (
              <div className="ml-auto w-14 h-14 rounded-full bg-blue-500 items-center flex text-gray-800">
                {user.email}
              </div>
            )}
          </div>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
