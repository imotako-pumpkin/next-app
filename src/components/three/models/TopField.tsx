import { Cloud } from "@react-three/drei";

import { Human } from "@/components/three/models/Human";
import { LinkZones } from "@/components/three/models/LinkZones";
import {
  initHumanCoordinate,
  TopFieldProvider,
} from "@/contexts/TopFieldContext";

export const TopField = () => {
  return (
    <>
      <TopFieldProvider>
        <LinkZones />
        <Human position={initHumanCoordinate} />
        <Cloud position={[-20, 0, -5]} args={[5, 5]} speed={10} color={"red"} />
      </TopFieldProvider>
    </>
  );
};
