import {useEffect, useState} from "react";
import {Viewer} from "resium";

import RootLayout from "@/components/RootLayout";
import {EntityFromLocation} from "@/components/EntityFromLocation";
import {CameraFromRawLocation} from "@/components/CameraFromRawLocation";
import {setupMap} from "@/services/CesiumMapService";
import {getLocations, type Locations, type RawLocation} from "@/services/LocationService";

setupMap();

export const metadata = {
  title: 'Arcadia Locations',
  description: 'Show locations of Arcadia',
}

export default function GeneralMap() {
  const [locations, setLocations] = useState<Locations>({});

  useEffect(() => {
    getLocations("arcadia").then(resp => setLocations(resp));
  }, []);

  return (
    <RootLayout>
      <Viewer full style={{top: "56px", bottom: "56px"}}>
        {Object.values(locations).filter((value: RawLocation, index: number) => index === 0).map((location: RawLocation) => {
          return (<CameraFromRawLocation key={0} rawLocation={location}/>)
        })}
        {Object.keys(locations).map((key: string, index: number) => {
          const location: RawLocation = locations[key];

          return (
            <>
              <EntityFromLocation rawLocation={location} name={key} key={index}/>
            </>
          )
        })}
      </Viewer>
    </RootLayout>
  );
}
