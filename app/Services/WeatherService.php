<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use App\Models\WeatherForecast;

class WeatherService
{
    protected $apiUrl;
    protected $apiKey;

    public function __construct()
    {
        $this->apiUrl = config('services.weather.api_url');
        $this->apiKey = config('services.weather.api_key');
    }

    public function fetchWeatherData($city)
    {

        $response = Http::get($this->apiUrl, [
            'q' => $city,
            'appid' => $this->apiKey,
            'units'=> 'metric'
        ]);

        if ($response->successful()) {
            return $response->json();
        }

        return null;
    }

    public function storeWeatherData($data)
    {

        $weather = WeatherForecast::where('city', $data['name'])->first();

        if ($weather) {
            $weather->update([
                'temperature' => $data['main']['temp'],
                'humidity' => $data['main']['humidity'],
                'wind_speed' => $data['wind']['speed'],
            ]);

            return $weather;
        }
        
        return WeatherForecast::create([
            'city' => $data['name'],
            'temperature' => $data['main']['temp'],
            'humidity' => $data['main']['humidity'],
            'wind_speed' => $data['wind']['speed'],
        ]);
    }
}
