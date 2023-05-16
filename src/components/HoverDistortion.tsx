import React, { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`;

const fragmentShader = `
  precision highp float;
  precision highp int;
  uniform sampler2D tWater;
  uniform sampler2D tFlow;
  uniform float uTime;
  varying vec2 vUv;
  uniform vec4 res;
  void main() {
    vec3 flow = texture2D(tFlow, vUv).rgb;
    vec2 uv = .5 * gl_FragCoord.xy / res.xy ;
    vec2 myUV = (uv - vec2(0.5))*res.zw + vec2(0.5);
    myUV -= flow.xy * (0.15 * 0.5);
    vec3 tex = texture2D(tWater, myUV).rgb;
    gl_FragColor.rgb = vec3(tex.r, tex.g, tex.b);
    gl_FragColor.a = tex.r;
  }
`;

const HoverDistortion: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = new THREE.TextureLoader().load("/logoPng.png");
  console.log(texture);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

  const mouse = useRef(new THREE.Vector2(-1, -1));
  const velocity = useRef(new THREE.Vector2(0, 0));
  const needsUpdate = useRef(false);
  const lastTime = useRef(performance.now());

  useEffect(() => {
    const updateMouse = (event: MouseEvent | TouchEvent) => {
      event.preventDefault();
      const x =
        (("touches" in event ? event.touches[0].clientX : event.clientX) /
          window.innerWidth) *
          2 -
        1;
      const y =
        (-("touches" in event ? event.touches[0].clientY : event.clientY) /
          window.innerHeight) *
          2 +
        1;
      const deltaX = x - mouse.current.x;
      const deltaY = y - mouse.current.y;
      mouse.current.set(x, y);
      velocity.current.set(deltaX, deltaY);
      const delta = Math.max(10.4, performance.now() - lastTime.current);
      lastTime.current = performance.now();
      velocity.current.x = deltaX / delta;
      velocity.current.y = deltaY / delta;
      needsUpdate.current = true;
    };

    const isTouchCapable = "ontouchstart" in window;
    if (isTouchCapable) {
      window.addEventListener("touchstart", updateMouse, false);
      window.addEventListener("touchmove", updateMouse, { passive: false });
    } else {
      window.addEventListener("mousemove", updateMouse, false);
    }

    return () => {
      if (isTouchCapable) {
        window.removeEventListener("touchstart", updateMouse);
        window.removeEventListener("touchmove", updateMouse);
      } else {
        window.removeEventListener("mousemove", updateMouse);
      }
    };
  }, []);

  useFrame((state: any, delta: number) => {
    if (!needsUpdate.current) {
      mouse.current.set(-1, -1);
      velocity.current.set(0, 0);
    }
    needsUpdate.current = false;

    if (meshRef.current && meshRef.current.material) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
      state.gl.render(state.scene, state.camera);
    }
  });

  return (
    <>
      <mesh ref={meshRef}>
        <shaderMaterial
          transparent
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={{
            uTime: { value: 0 },
            tWater: { value: texture },
            res: {
              value: new THREE.Vector4(
                window.innerWidth,
                window.innerHeight,
                1,
                1
              ),
            },
            mouse: { value: mouse.current },
            velocity: { value: velocity.current },
          }}
        />
        {/* <meshBasicMaterial transparent map={texture} /> */}
        <planeBufferGeometry args={[6, 6, 256, 256]} />
      </mesh>
    </>
  );
};

export default HoverDistortion;
