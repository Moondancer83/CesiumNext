import * as Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export function setupMap() {
  if (!process.env.NEXT_PUBLIC_CESIUM_API_KEY) {
    console.error("Missing environment variable `NEXT_PUBLIC_CESIUM_API_KEY`")
  } else {
    Cesium.Ion.defaultAccessToken = process.env.NEXT_PUBLIC_CESIUM_API_KEY;
  }
}