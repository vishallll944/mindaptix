"use client";

import { useRef, useMemo, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function GrowthSphereInner({
  mouse,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const lineRef = useRef<THREE.LineSegments>(null);

  const { points, lines } = useMemo(() => {
    const nodeCount = 40;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const r = 1.6;
      pts.push(
        new THREE.Vector3(
          r * Math.cos(theta) * Math.sin(phi),
          r * Math.sin(theta) * Math.sin(phi),
          r * Math.cos(phi)
        )
      );
    }
    const linePositions: number[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 0.9) {
          linePositions.push(
            pts[i].x,
            pts[i].y,
            pts[i].z,
            pts[j].x,
            pts[j].y,
            pts[j].z
          );
        }
      }
    }
    return { points: pts, lines: new Float32Array(linePositions) };
  }, []);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.3,
        0.05
      );
    }
    if (lineRef.current) {
      lineRef.current.rotation.y -= delta * 0.05;
    }
  });

  return (
    <Float speed={1.2} floatIntensity={0.3}>
      <group ref={groupRef}>
        <lineSegments ref={lineRef}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[lines, 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#7C3AED" transparent opacity={0.35} />
        </lineSegments>

        {points.map((p, i) => (
          <mesh key={i} position={p}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? "#2563EB" : i % 3 === 1 ? "#7C3AED" : "#06B6D4"}
              emissive={i % 3 === 0 ? "#2563EB" : i % 3 === 1 ? "#7C3AED" : "#06B6D4"}
              emissiveIntensity={0.6}
            />
          </mesh>
        ))}

        <mesh>
          <sphereGeometry args={[1.55, 32, 32]} />
          <meshStandardMaterial
            color="#EEF4FF"
            transparent
            opacity={0.08}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  );
}

export function GrowthSphereCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="relative mx-auto h-[360px] w-full max-w-lg md:h-[420px]"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[4, 4, 4]} intensity={1} color="#2563EB" />
        <pointLight position={[-4, -2, 2]} intensity={0.6} color="#7C3AED" />
        <GrowthSphereInner mouse={mouse} />
      </Canvas>
    </div>
  );
}
