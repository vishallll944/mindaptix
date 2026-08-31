"use client";

import { useRef, useMemo, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Html, Torus } from "@react-three/drei";
import * as THREE from "three";

const DEFAULT_TAGS = ["SEO", "Growth", "Leads", "ROI", "Scale", "Data"];

function ParticleField({ count = 70 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.045} color="#2563EB" transparent opacity={0.55} />
    </points>
  );
}

function OrbitRings() {
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ring1.current) ring1.current.rotation.z += delta * 0.25;
    if (ring2.current) ring2.current.rotation.x += delta * 0.18;
  });

  return (
    <group>
      <Torus ref={ring1} args={[1.6, 0.02, 16, 80]} rotation={[Math.PI / 2.5, 0, 0]}>
        <meshBasicMaterial color="#2563EB" transparent opacity={0.35} />
      </Torus>
      <Torus ref={ring2} args={[2.1, 0.015, 16, 80]} rotation={[0.4, Math.PI / 4, 0]}>
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.25} />
      </Torus>
    </group>
  );
}

function CoreOrb() {
  return (
    <Float speed={1.8} floatIntensity={0.5}>
      <Sphere args={[0.55, 32, 32]}>
        <meshStandardMaterial
          color="#2563EB"
          emissive="#2563EB"
          emissiveIntensity={0.35}
          metalness={0.4}
          roughness={0.2}
        />
      </Sphere>
    </Float>
  );
}

function FloatingTag({
  position,
  label,
}: {
  position: [number, number, number];
  label: string;
}) {
  return (
    <Float speed={1.2 + Math.random()} floatIntensity={0.5}>
      <Html position={position} distanceFactor={7} className="pointer-events-none">
        <span className="whitespace-nowrap rounded-full border border-blue-100 bg-white/90 px-2.5 py-1 text-[10px] font-bold text-accent-blue shadow-sm backdrop-blur-sm">
          {label}
        </span>
      </Html>
    </Float>
  );
}

function Scene({
  mouse,
  tags,
}: {
  mouse: MutableRefObject<{ x: number; y: number }>;
  tags: string[];
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.current.x * 0.35,
      0.05,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.2,
      0.05,
    );
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 4]} intensity={1.1} color="#2563EB" />
      <pointLight position={[-4, -2, 3]} intensity={0.7} color="#7C3AED" />

      <ParticleField />
      <OrbitRings />
      <CoreOrb />

      {tags.map((tag, i) => {
        const angle = (i / tags.length) * Math.PI * 2;
        const r = 2.4;
        return (
          <FloatingTag
            key={tag}
            label={tag}
            position={[Math.cos(angle) * r, Math.sin(angle) * 0.6, Math.sin(angle) * r]}
          />
        );
      })}
    </group>
  );
}

type ServiceHeroSceneProps = {
  tags?: string[];
  className?: string;
};

export function ServiceHeroScene({ tags = DEFAULT_TAGS, className = "" }: ServiceHeroSceneProps) {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className={`relative h-[280px] w-full sm:h-[320px] lg:h-[380px] ${className}`}
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene mouse={mouse} tags={tags} />
      </Canvas>
    </div>
  );
}
