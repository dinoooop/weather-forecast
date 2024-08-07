<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\WeatherService;
use Illuminate\Support\Facades\Log;

class WeatherController extends Controller
{
    protected $weatherService;

    public function __construct(WeatherService $weatherService)
    {
        $this->weatherService = $weatherService;
    }

    public function fetchAndStoreWeather(Request $request)
    {
        $city = $request->input('city');
        Log::info($city);
        $data = $this->weatherService->fetchWeatherData($city);

        if ($data) {
            $storeData = $this->weatherService->storeWeatherData($data);
            return response()->json($storeData);
        }

        return response()->json(['message' => 'Failed'], 500);
    }
}