const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const mainConfig = require('../../tailwind.config');
/** @type {import('tailwindcss').Config} */
module.exports = {
  ...mainConfig,
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
