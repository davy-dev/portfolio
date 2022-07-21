/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei";
import * as THREE from "three";
export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/portfolio.glb");
  const { actions } = useAnimations(animations, group);
  const yellowBloom = new THREE.Color(0.5,4,0);
  const blueBloom = new THREE.Color(0,2.7,10)
  useEffect(() => {
    actions.CameraAction.play();
  }, [actions]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <directionalLight
          name="Light002"
          intensity={0.3}
          decay={2}
          color="#e6ecff"
          position={[8.39, 13.03, 4.93]}
          rotation={[-1.84, 0.6, 1.93]}
          scale={[1, 0.85, 0.73]}
        />
        <PerspectiveCamera
          name="Camera"
          makeDefault={false}
          far={100}
          near={0.1}
          fov={22.9}
          position={[0, 15, 45]}
          rotation={[-0.3, 0, 0]}
          scale={[1, 0.64, 0.92]}
        />
        <spotLight
          name="Spot"
          intensity={10}
          angle={0.4}
          penumbra={0.55}
          decay={2}
          color="#1098ff"
          position={[-12.21, 10.48, 0.6]}
          rotation={[-1.5, -1.1, 0.04]}
        >
          <group position={[0, 0, -1]} />
        </spotLight>
        <mesh
          name="Plane066"
          geometry={nodes.Plane066.geometry}
          material={nodes.Plane066.material}
          position={[-1.69, 1.56, 28.13]}
          scale={204.26}
        />
        <mesh
          name="mouseBottom"
          geometry={nodes.mouseBottom.geometry}
          material={materials.metallic}
          position={[7.28, 1.6, 3.25]}
          rotation={[0, -0.32, 0]}
          scale={[0.44, 0.22, 0.88]}
        />
        <mesh
          name="mousseTop"
          geometry={nodes.mousseTop.geometry}
          material={materials.mainColor}
          position={[7.28, 1.04, 3.25]}
          rotation={[0, -0.32, 0]}
          scale={[0.44, 0.22, 0.88]}
        />
        <mesh
          name="mousseButton1"
          geometry={nodes.mousseButton1.geometry}
          material={materials.metallic}
          position={[7.28, 0.5, 3.25]}
          rotation={[0, -0.32, 0]}
          scale={[0.44, 0.22, 0.88]}
        />
        <mesh
          name="mouseButton2"
          geometry={nodes.mouseButton2.geometry}
          material={materials.metallic}
          position={[7.28, 0.49, 3.25]}
          rotation={[0, -0.32, 0]}
          scale={[0.44, 0.22, 0.88]}
        />
        <mesh
          name="frame"
          geometry={nodes.frame.geometry}
          material={materials.monitBody}
          position={[-0.07, 5.97, -2.69]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[6.42, 0.34, 3.08]}
        />
        <group
          name="stand"
          position={[-0.03, 4.96, -3.97]}
          rotation={[0, 0, -Math.PI]}
          scale={[-1.62, -0.22, -0.22]}
        >
          <mesh
            name="Mesh_5"
            geometry={nodes.Mesh_5.geometry}
            material={materials.mainColor}
          />
          <points
            name="Mesh_6"
            geometry={nodes.Mesh_6.geometry}
            material={materials.mainColor}
          />
        </group>
        <mesh
          name="lcd"
          geometry={nodes.lcd.geometry}
          material={materials.lcd}
          position={[-0.07, 5.97, -3.43]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
          scale={[6.42, 0.34, 3.08]}
        />
        <mesh
          name="Cylinder"
          geometry={nodes.Cylinder.geometry}
          material={materials.metallic}
          position={[-0.04, 4.95, -4.06]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.32, 1.85, 0.26]}
        />
        <mesh
          name="Cylinder001"
          geometry={nodes.Cylinder001.geometry}
          material={materials.armLamp}
          position={[-0.04, 2.03, -7]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.32, 1.85, 0.26]}
        />
        <mesh
          name="keyboardBottom"
          geometry={nodes.keyboardBottom.geometry}
          material={materials.armLamp}
          position={[-0.05, 1.53, 3.48]}
          scale={[5.06, 0.14, 1.89]}
        />
        <mesh
          name="keyboardTop"
          geometry={nodes.keyboardTop.geometry}
          material={materials.mainColor}
          position={[-0.05, 0.24, 3.48]}
          scale={[5.09, 0.22, 1.9]}
        />
        <mesh
          name="Plane"
          geometry={nodes.Plane.geometry}
          material={materials.touch}
          position={[-3.27, 1.76, 3.43]}
          scale={0.22}
        ></mesh>
        <mesh
          name="Plane001"
          geometry={nodes.Plane001.geometry}
          material={materials.touch}
          position={[-2.71, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane002"
          geometry={nodes.Plane002.geometry}
          material={materials.touch}
          position={[-2.16, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane003"
          geometry={nodes.Plane003.geometry}
          material={materials.touch}
          position={[-1.59, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane004"
          geometry={nodes.Plane004.geometry}
          material={materials.touch}
          position={[-1.03, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane005"
          geometry={nodes.Plane005.geometry}
          material={materials.touch}
          position={[-0.46, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane006"
          geometry={nodes.Plane006.geometry}
          material={materials.touch}
          position={[0.1, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane007"
          geometry={nodes.Plane007.geometry}
          material={materials.touch}
          position={[0.67, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane008"
          geometry={nodes.Plane008.geometry}
          material={materials.touch}
          position={[1.23, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane009"
          geometry={nodes.Plane009.geometry}
          material={materials.touch}
          position={[1.79, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane010"
          geometry={nodes.Plane010.geometry}
          material={materials.touch}
          position={[2.36, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane011"
          geometry={nodes.Plane011.geometry}
          material={materials.touch}
          position={[2.93, 1.76, 3.43]}
          scale={0.22}
        />
        <mesh
          name="Plane012"
          geometry={nodes.Plane012.geometry}
          material={materials.touch}
          position={[-3.86, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane013"
          geometry={nodes.Plane013.geometry}
          material={materials.touch}
          position={[-3.35, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane014"
          geometry={nodes.Plane014.geometry}
          material={materials.touch}
          position={[-2.81, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane015"
          geometry={nodes.Plane015.geometry}
          material={materials.touch}
          position={[-2.27, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane016"
          geometry={nodes.Plane016.geometry}
          material={materials.touch}
          position={[-1.73, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane017"
          geometry={nodes.Plane017.geometry}
          material={materials.touch}
          position={[-1.18, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane018"
          geometry={nodes.Plane018.geometry}
          material={materials.touch}
          position={[-0.63, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane019"
          geometry={nodes.Plane019.geometry}
          material={materials.touch}
          position={[-0.07, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane020"
          geometry={nodes.Plane020.geometry}
          material={materials.touch}
          position={[0.48, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane021"
          geometry={nodes.Plane021.geometry}
          material={materials.touch}
          position={[1.05, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane022"
          geometry={nodes.Plane022.geometry}
          material={materials.touch}
          position={[1.59, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane023"
          geometry={nodes.Plane023.geometry}
          material={materials.touch}
          position={[2.15, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane024"
          geometry={nodes.Plane024.geometry}
          material={materials.touch}
          position={[2.7, 1.76, 2.92]}
          scale={0.22}
        />
        <mesh
          name="Plane025"
          geometry={nodes.Plane025.geometry}
          material={materials.touch}
          position={[-3.04, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane026"
          geometry={nodes.Plane026.geometry}
          material={materials.touch}
          position={[-2.48, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane027"
          geometry={nodes.Plane027.geometry}
          material={materials.touch}
          position={[-1.94, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane028"
          geometry={nodes.Plane028.geometry}
          material={materials.touch}
          position={[-1.38, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane029"
          geometry={nodes.Plane029.geometry}
          material={materials.touch}
          position={[-0.82, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane030"
          geometry={nodes.Plane030.geometry}
          material={materials.touch}
          position={[-0.24, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane031"
          geometry={nodes.Plane031.geometry}
          material={materials.touch}
          position={[0.31, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane032"
          geometry={nodes.Plane032.geometry}
          material={materials.touch}
          position={[0.88, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane033"
          geometry={nodes.Plane033.geometry}
          material={materials.touch}
          position={[1.44, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane034"
          geometry={nodes.Plane034.geometry}
          material={materials.touch}
          position={[2, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane035"
          geometry={nodes.Plane035.geometry}
          material={materials.touch}
          position={[2.56, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane036"
          geometry={nodes.Plane036.geometry}
          material={materials.touch}
          position={[3.12, 1.76, 3.96]}
          scale={0.22}
        />
        <mesh
          name="Plane038"
          geometry={nodes.Plane038.geometry}
          material={materials.touch}
          position={[-3.32, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane039"
          geometry={nodes.Plane039.geometry}
          material={materials.touch}
          position={[-2.78, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane040"
          geometry={nodes.Plane040.geometry}
          material={materials.touch}
          position={[-2.23, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane041"
          geometry={nodes.Plane041.geometry}
          material={materials.touch}
          position={[-1.68, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane042"
          geometry={nodes.Plane042.geometry}
          material={materials.touch}
          position={[-1.12, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane043"
          geometry={nodes.Plane043.geometry}
          material={materials.touch}
          position={[-0.57, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane044"
          geometry={nodes.Plane044.geometry}
          material={materials.touch}
          position={[-0.01, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane045"
          geometry={nodes.Plane045.geometry}
          material={materials.touch}
          position={[0.57, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane046"
          geometry={nodes.Plane046.geometry}
          material={materials.touch}
          position={[1.13, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane047"
          geometry={nodes.Plane047.geometry}
          material={materials.touch}
          position={[1.69, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane048"
          geometry={nodes.Plane048.geometry}
          material={materials.touch}
          position={[2.26, 1.76, 4.47]}
          scale={0.22}
        />
        <mesh
          name="Plane049"
          geometry={nodes.Plane049.geometry}
          material={materials.touch}
          position={[3.22, 1.76, 4.47]}
          scale={[0.64, 0.22, 0.22]}
        />
        <mesh
          name="Plane050"
          geometry={nodes.Plane050.geometry}
          material={materials.touch}
          position={[-3.86, 1.76, 4.47]}
          scale={0.22}
        />
        <group
          name="Plane051"
          position={[-3.73, 1.76, 3.95]}
          scale={[0.36, 0.22, 0.22]}
        >
          <mesh
            name="Plane057_1"
            geometry={nodes.Plane057_1.geometry}
            material={materials.touch}
          />
          <points
            name="Plane057_2"
            geometry={nodes.Plane057_2.geometry}
            material={materials.touch}
          />
        </group>
        <mesh
          name="Plane037"
          geometry={nodes.Plane037.geometry}
          material={materials.touch}
          position={[-3.83, 1.77, 3.43]}
          scale={[0.25, 0.22, 0.22]}
        />
        <mesh
          name="Plane052"
          geometry={nodes.Plane052.geometry}
          material={materials.touch}
          position={[3.45, 1.76, 2.92]}
          scale={[0.42, 0.22, 0.22]}
        />
        <mesh
          name="Plane053"
          geometry={nodes.Plane053.geometry}
          material={materials.touch}
          position={[-0.34, 1.76, 5]}
          scale={[1.44, 0.22, 0.22]}
        />
        <mesh
          name="Plane054"
          geometry={nodes.Plane054.geometry}
          material={materials.touch}
          position={[-3.2, 1.76, 4.99]}
          scale={0.22}
        />
        <mesh
          name="Plane055"
          geometry={nodes.Plane055.geometry}
          material={materials.touch}
          position={[-2.66, 1.76, 4.99]}
          scale={0.22}
        />
        <mesh
          name="Plane056"
          geometry={nodes.Plane056.geometry}
          material={materials.touch}
          position={[-2.11, 1.76, 4.99]}
          scale={0.22}
        />
        <mesh
          name="Plane057"
          geometry={nodes.Plane057.geometry}
          material={materials.touch}
          position={[-3.8, 1.76, 4.99]}
          scale={[0.29, 0.22, 0.22]}
        />
        <mesh
          name="Plane058"
          geometry={nodes.Plane058.geometry}
          material={materials.touch}
          position={[1.43, 1.76, 5]}
          scale={0.22}
        />
        <mesh
          name="Plane059"
          geometry={nodes.Plane059.geometry}
          material={materials.touch}
          position={[1.99, 1.76, 5]}
          scale={0.22}
        />
        <mesh
          name="Plane060"
          geometry={nodes.Plane060.geometry}
          material={materials.touch}
          position={[2.54, 1.76, 5]}
          scale={0.22}
        />
        <mesh
          name="Plane061"
          geometry={nodes.Plane061.geometry}
          material={materials.touch}
          position={[3.08, 1.76, 4.89]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.22, -0.22, -0.11]}
        />
        <mesh
          name="Plane062"
          geometry={nodes.Plane062.geometry}
          material={materials.touch}
          position={[3.63, 1.76, 5]}
          scale={0.22}
        />
        <mesh
          name="Plane063"
          geometry={nodes.Plane063.geometry}
          material={materials.touch}
          position={[3.08, 1.76, 5.12]}
          rotation={[0, 0, -Math.PI]}
          scale={[-0.22, -0.22, -0.11]}
        />
        <mesh
          name="Plane064"
          geometry={nodes.Plane064.geometry}
          material={materials.touch}
          position={[3.67, 1.76, 3.7]}
          scale={[0.2, 0.22, 0.48]}
        />
        <group>
          <mesh
            name="lamp"
            geometry={nodes.lamp.geometry}
            material={materials.armLamp}
            position={[-13.95, 1.83, 0.59]}
            scale={0.77}
          />
          <mesh position={[-11.5, 10.2, 0.59]}>
            <sphereGeometry args={[0.7, 10, 50]} />
            <meshBasicMaterial color={blueBloom} toneMapped={false} />
          </mesh>
        </group>
        <group
          name="ml"
          position={[-8.7, 3.06, -3.37]}
          rotation={[0, 0.37, 0]}
          scale={[1, 1.53, 1]}
        >
          <mesh
            name="Mesh_11"
            geometry={nodes.Mesh_11.geometry}
            material={materials.monitBody}
          />
          <mesh
            name="Mesh_12"
            geometry={nodes.Mesh_12.geometry}
            material={materials.BoomerColor}
          />
          <mesh
            name="Mesh_13"
            geometry={nodes.Mesh_13.geometry}
            material={materials.monitRing}
          />
        </group>
        <mesh
          name="medailMoL"
          geometry={nodes.medailMoL.geometry}
          position={[-8.34, 4.43, -2.42]}
          rotation={[0, -1.2, Math.PI / 2]}
          scale={0.09}
        >
          <meshBasicMaterial color={yellowBloom} toneMapped={false} />
        </mesh>
        <group
          name="mr"
          position={[8.79, 3.11, -3.37]}
          rotation={[0, -0.38, 0]}
          scale={[1, 1.53, 1]}
        >
          <mesh
            name="Mesh_14"
            geometry={nodes.Mesh_14.geometry}
            material={materials.monitBody}
          />
          <mesh
            name="Mesh_15"
            geometry={nodes.Mesh_15.geometry}
            material={materials.BoomerColor}
          />
          <mesh
            name="Mesh_16"
            geometry={nodes.Mesh_16.geometry}
            material={materials.monitRing}
          />
        </group>
        <mesh
          name="medailMoR"
          geometry={nodes.medailMoR.geometry}
          position={[8.41, 4.45, -2.34]}
          rotation={[-Math.PI, -1.19, -Math.PI / 2]}
          scale={0.09}
        >
          <meshBasicMaterial color={yellowBloom} toneMapped={false} />
        </mesh>
        <mesh
          name="Plane067"
          geometry={nodes.Plane067.geometry}
          material={materials.metaillColor}
          position={[0.01, 1.8, 2.27]}
          rotation={[-2.98, -Math.PI / 2, 0]}
          scale={0.18}
          >
          <meshBasicMaterial color={yellowBloom} toneMapped={false} />
        </mesh>
        <mesh
          name="centralUnitBody"
          geometry={nodes.centralUnitBody.geometry}
          material={materials.monitBody}
          position={[17.48, 4.71, 2.75]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="centralUnitFace"
          geometry={nodes.centralUnitFace.geometry}
          material={materials.armLamp}
          position={[17.48, 4.71, 0.15]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="centralUnitFront"
          geometry={nodes.centralUnitFront.geometry}
          material={materials.armLamp}
          position={[17.48, 4.71, 1.33]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plane065"
          geometry={nodes.Plane065.geometry}
          position={[16, 2.48, 3]}
          rotation={[-1.57, -Math.PI / 2, 0]}
          scale={0.24}
        >
          <meshBasicMaterial color={yellowBloom} toneMapped={false} />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/portfolio.glb");