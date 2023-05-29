import {Cartesian3} from "cesium";
import {Camera} from "resium";

import {convertRawLocation, type RawLocation, type Location} from "@/services/LocationService";

export function CameraFromRawLocation(props: {rawLocation: RawLocation}) {
  try {
    const location: Location = convertRawLocation(props.rawLocation);

    return (
      <Camera position={Cartesian3.fromDegrees(location.lng, location.lat, 1000)}/>
    );
  } catch (e) {
    console.log(e.message);

    return null;
  }
}
