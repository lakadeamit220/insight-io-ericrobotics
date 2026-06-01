import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { PLYLoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import useRobotStore from '../../store/useRobotStore';
import { MapPin } from 'lucide-react';

const PointCloud = ({ url }) => {
  const geometry = useLoader(PLYLoader, url);
  const setWaypoint = useRobotStore(state => state.setWaypoint);
  
  useMemo(() => {
    geometry.computeVertexNormals();
    geometry.center();
    geometry.scale(10, 10, 10);
  }, [geometry]);

  return (
    <points 
      geometry={geometry}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setWaypoint([e.point.x, e.point.y, e.point.z]);
      }}
    >
      <pointsMaterial 
        size={0.05} 
        vertexColors={geometry.hasAttribute('color')}
        color={geometry.hasAttribute('color') ? undefined : 0x111111}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

const WaypointMarker = () => {
  const waypoint = useRobotStore(state => state.waypoint);
  
  if (!waypoint) return null;
  
  return (
    <group position={waypoint}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#ef4444" emissive="#ef4444" emissiveIntensity={0.5} />
      </mesh>
      <Html center position={[0, 1, 0]}>
        <div className="bg-slate-800 text-white text-xs px-3 py-1.5 rounded-md font-bold whitespace-nowrap shadow-lg flex items-center gap-1 pointer-events-none">
          <MapPin size={14} className="text-red-400" /> Target Set
        </div>
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-800 absolute left-1/2 -translate-x-1/2 bottom-[-8px]"></div>
      </Html>
    </group>
  );
};

const FallbackLoading = () => (
  <Html center>
    <div className="text-slate-800 flex flex-col items-center gap-2">
      <div className="w-6 h-6 border-2 border-slate-800 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-sm font-mono tracking-widest font-bold">LOADING MAP...</span>
    </div>
  </Html>
);

const PointCloudMap = () => {
  return (
    <div className="absolute inset-0 w-full h-full cursor-crosshair active:cursor-crosshair z-0">
      <Canvas camera={{ position: [0, 10, 5], fov: 45 }}>
        <color attach="background" args={['#e5e5e5']} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={<FallbackLoading />}>
          <PointCloud url="/models/pointcloud.ply" />
          <WaypointMarker />
        </Suspense>
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={false}
          dampingFactor={0.05}
          makeDefault
        />
      </Canvas>
    </div>
  );
};

export default PointCloudMap;
