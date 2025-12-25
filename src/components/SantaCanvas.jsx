import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows, Center } from '@react-three/drei'
import * as THREE from 'three'

function Model({ url }) {
    const { scene } = useGLTF(url)
    const groupRef = useRef()

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.005
        }
    })

    return (
        <primitive
            ref={groupRef}
            object={scene}
            scale={2.2}
            rotation={[0, -Math.PI / 4, 0]}
        />
    )
}

const SantaCanvas = () => {
    return (
        <Canvas
            camera={{ position: [0, 0, 7], fov: 45 }}
            shadows
        >
            <ambientLight intensity={0.7} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />

            <Suspense fallback={null}>
                <Center>
                    <Model url="/3d_santa/Meshy_AI_Future_Santa_1225104955_texture.glb" />
                </Center>
                <Environment preset="city" />
                <ContactShadows
                    position={[0, -2.5, 0]}
                    opacity={0.5}
                    scale={20}
                    blur={2.5}
                    far={4.5}
                />
            </Suspense>

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                minPolarAngle={Math.PI / 3}
                maxPolarAngle={Math.PI / 1.8}
            />
        </Canvas>
    )
}

export default SantaCanvas
