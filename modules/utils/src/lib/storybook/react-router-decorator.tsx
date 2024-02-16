import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

export const reactRouterDecorator = (Story: React.ComponentType) => {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );
};
