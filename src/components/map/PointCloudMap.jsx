import React, { Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import { PLYLoader } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Map as MapIcon, Layers, Maximize } from 'lucide-react';

const PointCloud = ({ url }) => {
  const geometry = useLoader(PLYLoader, url);
  
  // Compute normals and center the geometry if needed
  useMemo(() => {
    geometry.computeVertexNormals();
    geometry.center();
    
    // Scale it depending on the sample model
    geometry.scale(10, 10, 10);
  }, [geometry]);

  return (
    <points geometry={geometry}>
      <pointsMaterial 
        size={0.05} 
        vertexColors={geometry.hasAttribute('color')}
        color={geometry.hasAttribute('color') ? undefined : 0x3b82f6}
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

const FallbackLoading = () => (
  <Html center>
    <div className="text-blue-400 flex flex-col items-center gap-2">
      <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <span className="text-sm font-mono tracking-widest text-white/70">LOADING PLY...</span>
    </div>
  </Html>
);

const PointCloudMap = () => {
  return (
    <div className="glass-panel rounded-2xl flex-1 flex flex-col relative overflow-hidden group h-full">
      {/* Header bar */}
      <div className="absolute top-0 inset-x-0 p-4 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto">
          <div className="p-1.5 bg-purple-500/20 text-purple-400 rounded-md backdrop-blur-md">
            <MapIcon size={16} />
          </div>
          <span className="font-semibold text-white text-sm">LiDAR Point Cloud View</span>
        </div>
        <div className="flex items-center gap-2 pointer-events-auto">
          <button className="text-white/70 hover:text-white transition-colors bg-black/40 p-1.5 rounded-md backdrop-blur-md">
            <Layers size={16} />
          </button>
          <button className="text-white/70 hover:text-white transition-colors bg-black/40 p-1.5 rounded-md backdrop-blur-md">
            <Maximize size={16} />
          </button>
        </div>
      </div>

      <div className="w-full h-full bg-[#0a0a0f] cursor-grab active:cursor-grabbing">
        <Canvas camera={{ position: [5, 5, 5], fov: 45 }}>
          <color attach="background" args={['#0a0a0f']} />
          <ambientLight intensity={0.5} />
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
          <gridHelper args={[20, 20, 0x444444, 0x222222]} position={[0, -2, 0]} />
        </Canvas>
      </div>
      
      {/* Status overlay */}
      <div className="absolute bottom-4 left-4 flex gap-4 text-xs font-mono text-white/50 pointer-events-none">
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          Scanner: Active
        </div>
        <div>Pts: ~2.4M</div>
      </div>
    </div>
  );
};

export default PointCloudMap;
