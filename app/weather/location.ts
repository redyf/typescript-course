import axios from "axios";

export interface LocationInfo {
  lat: string;
  lon: string;
  display_name: string;
}

export async function fetchLocationData(
  apiUrl: string,
  location: string,
): Promise<LocationInfo> {
  // const GEOCODE_API_URL = "https://geocode.maps.co/search";
  const options = {
    method: "GET",
    url: apiUrl,
    params: {
      q: location,
    },
  };

  const response = await axios.request<LocationInfo[]>(options);

  if (response.status === 200) {
    if (response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error(`Unable to find location information for ${location}`);
    }
  } else {
    throw new Error("failed to fetch location data");
  }
}
