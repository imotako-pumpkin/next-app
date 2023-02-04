import { Vector3 } from "three";

import { Human } from "@/components/three/models/Human";
import { LinkZone } from "@/components/three/models/LinkZone";
import { TopFieldProvider } from "@/contexts/TopFieldContext";

export const TopField = () => {
  return (
    <>
      <TopFieldProvider>
        {/* <Square
        size={{ height: 100, width: 100 }}
        rotation={new Euler(-0.5 * Math.PI, 0, 0)}
        color="#1ea3d8"
      /> */}
        <LinkZone
          size={{ height: 10, width: 10 }}
          color="red"
          position={aboutPosition}
        />
        <LinkZone
          size={{ height: 10, width: 10 }}
          color="white"
          position={infoPosition}
        />
        <Human position={new Vector3(0, 1.5, 0)} />
      </TopFieldProvider>
    </>
  );
};

const aboutPosition = new Vector3(10, 0, 10);

const infoPosition = new Vector3(-10, 0, -10);
