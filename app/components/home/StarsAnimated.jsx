import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const StarsAnimated = () => {
  const starsRef = useRef();

  const starProps = useMemo(
    () => ({
      radius: 1,
      depth: 60,
      count: 50000,
      factor: 4,
      saturation: 0,
      fade: true,
      speed: 0,
    }),
    []
  );

  useFrame(() => {
    starsRef.current.rotation.y += 0.0005;
    starsRef.current.rotation.x += 0.0005;
    starsRef.current.rotation.z += 0.0005;
  });

  return <Stars ref={starsRef} {...starProps} />;
};

export default StarsAnimated;
