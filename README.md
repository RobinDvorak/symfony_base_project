# Symfony 4 skeleton with HMR support
Basic Symfony 4 app skeleton with frontend/backend structrue and configured Webpack (Encore) for js and sass bundling.

## Features
- Hot Module Reload
- SASS compilation
- ECMA Script 6 compilation to JS
- CSS autoprefixer
- JS lint
- SASS lint

# Prerequisities
- PHP 7.1
- Composer
- Node.js

## Instalation
- run ``composer install``
- run ``npm install``

## Development
- start php server
- run ``php bin/console server:run``
- start Webpack watcher
- run ``npm run dev-server`` for watch js and sass files with HMR support
- run ``npm run watch`` for watch js and sass files without HMR support
