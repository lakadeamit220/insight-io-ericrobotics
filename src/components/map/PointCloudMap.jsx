import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { PLYLoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';

const PointCloud = ({ url }) => {
  const geometry = useLoader(PLYLoader, url);
  
  useMemo(() => {
    geometry.computeVertexNormals();
    geometry.center();
    geometry.scale(10, 10, 10);
  }, [geometry]);

  return (
    <points geometry={geometry}>
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
    <div className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0">
      <Canvas camera={{ position: [0, 10, 5], fov: 45 }}>
        <color attach="background" args={['#e5e5e5']} />
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        <Suspense fallback={<FallbackLoading />}>
          <PointCloud url="/models/pointcloud.ply" />
        </Suspense>
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
};

export default PointCloudMap;
