const LOCATIONS = {
  "budapest": {
    "lat": "47.4986567",
    "lng": "19.0532484"
  },
  "dresden": {
    "lat": "51.082249",
    "lng": "13.7269685"
  },
  "los_angeles": {
    "lat": "33.9201528",
    "lng": "-118.3925842"
  }
}

export default function handler(req, res) {
  res.status(200).json(LOCATIONS);
}