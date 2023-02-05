import { useFrame } from "@react-three/fiber";
import _ from "lodash";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useRef } from "react";
import { Mesh, Vector3 } from "three";

import { useTopFieldContext } from "@/contexts/TopFieldContext";
import { useForwardRaycast } from "@/hooks/useForwardRaycast";
import useKeyboard from "@/hooks/useKeyboard";

type HumanProps = { position: Vector3 };

export const Human: FC<HumanProps> = (props) => {
  const ref = useRef<Mesh>(null);
  const keyMap = useKeyboard();
  const { dispatch, state } = useTopFieldContext();

  const getIntersections = useForwardRaycast(ref);

  useFrame((x, delta) => {
    const times = delta * 10;
    if (ref.current) {
      const position = ref.current.position;
      keyMap["ArrowLeft"] && (position.x -= 1 * times);
      keyMap["ArrowRight"] && (position.x += 1 * times);
      keyMap["ArrowUp"] && (position.z -= 1 * times);
      keyMap["ArrowDown"] && (position.z += 1 * times);
      keyMap["Space"] && position.y < 5 && (position.y += 0.5);
      !keyMap["Space"] && position.y > 1.5 && (position.y -= 0.2);
      if (!_.isEqual(state.humanCoordinate, position)) {
        dispatch({ payload: position, type: "UPDATE_HUMAN_COORDINATE" });
      }
    }
  });

  useEffect(() => {
    if (ref.current) {
      const position = ref.current.position;
      position.x = state.humanCoordinate.x;
      position.y = state.humanCoordinate.y;
      position.z = state.humanCoordinate.z;
    }
  }, [state.humanCoordinate]);

  const router = useRouter();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        const intersections = getIntersections();

        const crossInformation = intersections.some(
          (x) => x.object.name === "information"
        );

        if (crossInformation) {
          router.push("./information");
        }

        const crossAbout = intersections.some((x) => x.object.name === "about");

        if (crossAbout) {
          router.push("./about");
        }
      }
    },
    [getIntersections, router]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <mesh ref={ref} {...props}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="silver" metalness={0.8} roughness={0.5} />
      </mesh>
    </>
  );
};
