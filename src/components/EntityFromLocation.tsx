import {Cartesian3} from "cesium";
import {Entity} from "resium";

import {convertRawLocation, Location, RawLocation} from "@/services/LocationService";

export function EntityFromLocation(props: {rawLocation: RawLocation, name: string}) {
  try {
    const location: Location = convertRawLocation(props.rawLocation);

    return (
      <Entity
        name={props.name}
        point={{pixelSize: 20}}
        position={Cartesian3.fromDegrees(location.lng, location.lat, 0)}
      />
    );
  } catch (e) {
    console.log(e.message);

    return null;
  }
}
