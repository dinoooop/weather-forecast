# Weather Forecast
Weather Forecast is an application that allow you to find the weather report of given city.

## Installation
PHP 8.1 and Laravel 10 or higher are required.

First of all, clone the project and copy the configurations from example env file
```sh
git clone https://github.com/dinoooop/weather-forecast.git
cd weather-forecast
cp .env.example .env
```

To configure the application and connect to the database, update the following settings in `.env` file.
```dotenv
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=E:\weather-forecast\WF.sqlite
DB_USERNAME=root
DB_PASSWORD=

WF_API_URL=https://api.openweathermap.org/data/2.5/weather
WF_API_KEY=
```


### Note
When using SQLite, you need to provide the full path to the database file (DB_DATABASE).

To install all dependencies, run the following command
```sh
composer install
```

Run the following command to create all required table for the application.
```sh
php artisan migrate
```

The application frontend is in React JS, run the following command to install all the dependencies and create the build.
```sh
npm install
npm run build
```

Run the following command to starts a local development server for the application.
```sh
php artisan serve
```
