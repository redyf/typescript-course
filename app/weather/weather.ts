import { LocationInfo, fetchLocationData } from "./location";
import { fetchWeatherData } from "./weatherapi";
const GEOCODE_API_URL = "https://geocode.maps.co/search";
const WEATHER_API_URL = "https://api.open-meteo.com/v1/forecast";

async function main(): Promise<number> {
  // pnpm run wheather LOCATION
  if (process.argv.length !== 3) {
    console.error("usage: weather LOCATION");
    return 1;
  }
  //get location
  const location = process.argv[2];
  // convert location to lat/lon
  let locationInfo: LocationInfo;
  try {
    locationInfo = await fetchLocationData(GEOCODE_API_URL, location);
  } catch (err) {
    console.error(err);
    return 1;
  }

  console.log(`Fetching weather data for ${locationInfo.display_name}`);
  try {
    const weather = await fetchWeatherData(
      WEATHER_API_URL,
      locationInfo.lat,
      locationInfo.lon,
    );
    console.log(weather.format());
  } catch (err) {
    console.error(err);
    return 1;
  }

  // fetch weather data
  // display weather data
  console.log(process.argv);
  return await Promise.resolve(0);
}

main().catch((err) => console.error(err));
