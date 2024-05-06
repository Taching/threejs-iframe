import {
  Html,
  PresentationControls,
  Float,
  Environment,
  useGLTF,
  ContactShadows,
  Text,
} from "@react-three/drei";

export default function Experience() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
  return (
    <>
      <Environment preset="city" />
      <color args={["#6C9D7E"]} attach="background" />
      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#6C9D7E"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://takatoshiwada.com/" />
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={0.7}
            position={[1.5, 0.75, 0.75]}
            rotation-y={-1.25}
            maxWidth={2}
            color={"#F7FFFA"}
            textAlign="left"
          >
            TAKATOSHI WADA
          </Text>
        </Float>
      </PresentationControls>

      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -1.2, 0]}
        opacity={0.4}
        blur={2.4}
      />
    </>
  );
}
