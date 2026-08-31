"use client";

import { useRef, useMemo, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, Html } from "@react-three/drei";
import * as THREE from "three";

const ORBIT_TAGS = [
  { label: "SEO", color: "#2563EB" },
  { label: "AI", color: "#7C3AED" },
  { label: "GEO", color: "#06B6D4" },
  { label: "AEO", color: "#8B5CF6" },
  { label: "CRO", color: "#0EA5E9" },
  { label: "PPC", color: "#6366F1" },
];

function ParticleField({ count = 100 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#2563EB"),
      new THREE.Color("#7C3AED"),
      new THREE.Color("#06B6D4"),
    ];
    for (let i = 0; i < count; i++) {
      const r = 1.2 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      const c = palette[i % palette.length];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.08;
      ref.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function CoreSphere() {
  const coreRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (coreRef.current) coreRef.current.rotation.y += delta * 0.2;
    if (glowRef.current) {
      const s = 1 + Math.sin(Date.now() * 0.002) * 0.04;
      glowRef.current.scale.setScalar(s);
    }
  });

  return (
    <group>
      {/* Outer soft glow shell */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.15, 48, 48]} />
        <meshBasicMaterial color="#7C3AED" transparent opacity={0.08} />
      </mesh>

      {/* Wireframe shell */}
      <mesh>
        <sphereGeometry args={[0.95, 24, 24]} />
        <meshBasicMaterial
          color="#2563EB"
          wireframe
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* Solid core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.72, 48, 48]} />
        <meshStandardMaterial
          color="#1E40AF"
          emissive="#2563EB"
          emissiveIntensity={0.55}
          metalness={0.35}
          roughness={0.25}
        />
      </mesh>

      {/* Inner bright core */}
      <mesh>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial
          color="#EEF2FF"
          emissive="#A5B4FC"
          emissiveIntensity={0.9}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
}

function OrbitRing({
  radius,
  tube = 0.018,
  color,
  tilt,
  speed,
}: {
  radius: number;
  tube?: number;
  color: string;
  tilt: [number, number, number];
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed;
  });

  return (
    <mesh ref={ref} rotation={tilt}>
      <torusGeometry args={[radius, tube, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.6}
        transparent
        opacity={0.75}
        metalness={0.4}
        roughness={0.3}
      />
    </mesh>
  );
}

function OrbitingNode({
  radius,
  speed,
  offset,
  color,
  size = 0.1,
  tilt = 0.4,
}: {
  radius: number;
  speed: number;
  offset: number;
  color: string;
  size?: number;
  tilt?: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t) * radius * Math.sin(tilt),
      Math.sin(t) * radius * Math.cos(tilt),
    );
  });

  return (
    <group ref={ref}>
      <Sphere args={[size, 16, 16]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1.2}
          metalness={0.3}
          roughness={0.2}
        />
      </Sphere>
      <Sphere args={[size * 1.8, 12, 12]}>
        <meshBasicMaterial color={color} transparent opacity={0.15} />
      </Sphere>
    </group>
  );
}

function OrbitingTag({
  label,
  color,
  radius,
  speed,
  offset,
  tilt = 0.55,
}: {
  label: string;
  color: string;
  radius: number;
  speed: number;
  offset: number;
  tilt?: number;
}) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t) * radius * Math.sin(tilt) * 0.7,
      Math.sin(t) * radius * Math.cos(tilt),
    );
  });

  return (
    <group ref={ref}>
      <Html center distanceFactor={9} className="pointer-events-none select-none">
        <div
          className="whitespace-nowrap rounded-full border border-white/80 px-2.5 py-1 text-[10px] font-bold shadow-md backdrop-blur-sm"
          style={{
            background: "rgba(255,255,255,0.92)",
            color,
            boxShadow: `0 4px 14px ${color}33`,
          }}
        >
          {label}
        </div>
      </Html>
    </group>
  );
}

function Scene({ mouse }: { mouse: MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      mouse.current.x * 0.35 + groupRef.current.rotation.y * 0.002,
      0.04,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      mouse.current.y * 0.2,
      0.04,
    );
    // Slow idle spin
    groupRef.current.rotation.y += delta * 0.08;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 5]} intensity={1.4} color="#2563EB" />
      <pointLight position={[-4, -2, 3]} intensity={1} color="#7C3AED" />
      <pointLight position={[0, 3, -2]} intensity={0.6} color="#06B6D4" />

      <ParticleField count={90} />
      <CoreSphere />

      {/* Multiple orbit rings */}
      <OrbitRing
        radius={1.55}
        color="#2563EB"
        tilt={[Math.PI / 2.2, 0.2, 0]}
        speed={0.35}
        tube={0.022}
      />
      <OrbitRing
        radius={1.95}
        color="#7C3AED"
        tilt={[0.55, Math.PI / 3, 0.3]}
        speed={-0.22}
        tube={0.016}
      />
      <OrbitRing
        radius={2.35}
        color="#06B6D4"
        tilt={[1.1, -0.4, 0.5]}
        speed={0.18}
        tube={0.012}
      />

      {/* Nodes traveling on orbits */}
      <OrbitingNode radius={1.55} speed={0.9} offset={0} color="#2563EB" size={0.09} />
      <OrbitingNode radius={1.55} speed={0.9} offset={Math.PI} color="#60A5FA" size={0.07} />
      <OrbitingNode radius={1.95} speed={-0.65} offset={1} color="#7C3AED" size={0.1} tilt={0.55} />
      <OrbitingNode radius={1.95} speed={-0.65} offset={1 + Math.PI} color="#A78BFA" size={0.07} tilt={0.55} />
      <OrbitingNode radius={2.35} speed={0.45} offset={2} color="#06B6D4" size={0.08} tilt={1.1} />

      {/* Floating service tags */}
      {ORBIT_TAGS.map((tag, i) => (
        <OrbitingTag
          key={tag.label}
          label={tag.label}
          color={tag.color}
          radius={2.15}
          speed={0.28}
          offset={(i / ORBIT_TAGS.length) * Math.PI * 2}
          tilt={0.5 + (i % 3) * 0.15}
        />
      ))}

      {/* Extra floating accent orbs */}
      <Float speed={1.4} floatIntensity={0.7}>
        <Sphere args={[0.12, 16, 16]} position={[-2.2, 1.3, 0.4]}>
          <meshStandardMaterial color="#2563EB" emissive="#2563EB" emissiveIntensity={0.9} />
        </Sphere>
      </Float>
      <Float speed={1.8} floatIntensity={0.5}>
        <Sphere args={[0.08, 16, 16]} position={[2.1, -1.1, 0.6]}>
          <meshStandardMaterial color="#7C3AED" emissive="#7C3AED" emissiveIntensity={0.9} />
        </Sphere>
      </Float>
      <Float speed={1.2} floatIntensity={0.6}>
        <Sphere args={[0.1, 16, 16]} position={[1.6, 1.5, -0.5]}>
          <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={0.9} />
        </Sphere>
      </Float>
    </group>
  );
}

export function HeroSceneCanvas() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="relative h-[380px] w-full md:h-[460px]"
      onPointerMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      }}
    >
      {/* Soft glow behind the canvas */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-56 w-56 rounded-full bg-gradient-to-br from-blue-400/20 via-purple-400/15 to-cyan-400/20 blur-3xl" />
      </div>

      <Canvas
        camera={{ position: [0, 0.3, 5.8], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene mouse={mouse} />
      </Canvas>
    </div>
  );
}
