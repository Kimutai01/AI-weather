// type Daily {
//   temperature_2m_max: [Float]
//   time: [Date]
//   weathercode: [Int]
// }
// type DailyUnits {
//   temperature_2m_max: String
//   time: String
//   weathercode: String
// }
// type Hourly {
//   apparent_temperature: [Float]
//   dewpoint_2m: [Float]
//   precipitation_probability: [Int]
//   relativehumidity_2m: [Int]
//   temperature_2m: [Float]
//   time: [DateTime]
//   uv_index: [Float]
//   uv_index_clear_sky: [Float]
// }
// type HourlyUnits {
//   apparent_temperature: String
//   dewpoint_2m: String
//   precipitation_probability: String
//   relativehumidity_2m: String
//   temperature_2m: String
//   time: String
//   uv_index: String
//   uv_index_clear_sky: String
// }
// type Root {
//   current_weather: CurrentWeather
//   daily: Daily
//   daily_units: DailyUnits
//   elevation: Int
//   generationtime_ms: Float
//   hourly: Hourly
//   hourly_units: HourlyUnits
//   latitude: Float
//   longitude: Float
//   timezone: String
//   timezone_abbreviation: String
//   utc_offset_seconds: Int
// }

interface CurrentWeather {
  is_day: number;
  temperature: number;
  time: number;
  WeatherCode: number;
  WindDirection: number;
  WindSpeed: number;
}

interface Daily {
  temperature_2m_max: string;
  time: string;
  weathercode: string;
}

interface DailyUnits {
  temperature_2m_max: string;
  time: string;
  weathercode: string;
}

interface Hourly {
  apparent_temperature: [number];
  dewpoint_2m: string;
  precipitation_probability: [number];
  relativehumidity_2m: [number];
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
}

interface HourlyUnits {
  apparent_temperature: string;
  dewpoint_2m: string;
  precipitation_probability: string;
  relativehumidity_2m: string;
  temperature_2m: string;
  time: string;
  uv_index: string;
  uv_index_clear_sky: string;
}

interface Root {
  current_weather: CurrentWeather;
  daily: Daily;
  daily_units: DailyUnits;
  elevation: number;
  generationtime_ms: number;
  hourly: Hourly;
  hourly_units: HourlyUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  utc_offset_seconds: number;
}
