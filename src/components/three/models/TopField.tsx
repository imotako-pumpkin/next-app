import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useRef } from "react";
import { Euler, Mesh, Vector3 } from "three";

import useKeyboard from "@/hooks/useKeyboard";

export const TopField = () => {
  const ballRef = useRef<Mesh>(null);

  const keyMap = useKeyboard();

  return (
    <>
      <Square
        size={{ height: 100, width: 100 }}
        rotation={new Euler(-0.5 * Math.PI, 0, 0)}
        color="#1ea3d8"
      />
      <Square
        size={{ height: 10, width: 10 }}
        rotation={new Euler(-0.5 * Math.PI, 0, 0)}
        color="red"
        position={new Vector3(10, 0.1, 10)}
      />
      <Square
        size={{ height: 10, width: 10 }}
        rotation={new Euler(-0.5 * Math.PI, 0, 0)}
        color="white"
        position={new Vector3(-10, 0.1, -10)}
      />
      <Sphere keyMap={keyMap} position={new Vector3(-2, 1.5, 0)} />
    </>
  );
};

type SquareProps = {
  color: string;
  position?: Vector3;
  rotation?: Euler;
  size: { height: number; width: number };
};

const Square: FC<SquareProps> = (props) => {
  const { color, position, size } = props;
  return (
    <>
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} receiveShadow position={position}>
        <planeGeometry args={[size.width, size.height]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </>
  );
};

type SphereProps = { keyMap: { [x: string]: boolean }; position: Vector3 };

const Sphere: FC<SphereProps> = (props) => {
  const ref = useRef<Mesh>(null);
  const keyMap = props.keyMap;

  useFrame((_, delta) => {
    const times = delta * 10;
    if (ref.current) {
      const position = ref.current.position;
      keyMap["ArrowLeft"] && (position.x -= 1 * times);
      keyMap["ArrowRight"] && (position.x += 1 * times);
      keyMap["ArrowUp"] && (position.z -= 1 * times);
      keyMap["ArrowDown"] && (position.z += 1 * times);
      keyMap["Space"] && position.y < 5 && (position.y += 0.5);
      !keyMap["Space"] && position.y > 1.5 && (position.y -= 0.2);
    }
  });

  const router = useRouter();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        router.push("./about");
      }
    },
    [router]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
  }, [handleKeyDown]);

  return (
    <mesh ref={ref} {...props}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="silver" metalness={0.8} roughness={0.5} />
    </mesh>
  );
};
