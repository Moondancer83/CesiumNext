export async function getLocations(query: string): Promise<Locations> {
  const response = await fetch(`/api/locations/${query}`);
  return response.json();
}

export function convertRawLocation(raw: RawLocation): Location {
  const longitude = Number(raw.lng);
  const latitude = Number(raw.lat);

  if (isNaN(longitude) || isNaN(latitude)) {
    console.error(`Invalid coordinates: {lng: ${raw.lng}, lat: ${raw.lat}}`);
    throw new Error(`Invalid coordinates: {lng: ${raw.lng}, lat: ${raw.lat}}`)
  }

  return {lng: longitude, lat: latitude};
}

export interface RawLocation {
  lat: string,
  lng: string
}

export interface Locations {
  [key: string]: RawLocation
}

export interface Location {
  lat: number,
  lng: number
}