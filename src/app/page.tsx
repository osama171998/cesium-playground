"use client"
import dynamic from 'next/dynamic';

const CesiumViewer = dynamic(() => import('../components/cesiumViewer'), {
  ssr: false, // Disable server-side rendering for Cesium
});

const Home = () => {
  return (
    <div style={{ height: '100vh' }}>
      <CesiumViewer />
    </div>
  );
};

export default Home;
