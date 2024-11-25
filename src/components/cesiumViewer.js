import React, { useEffect, useRef } from 'react';
import { Viewer,buildModuleUrl,Cartesian3,GeoJsonDataSource   } from 'cesium';
buildModuleUrl.setBaseUrl('/cesium/')
const CesiumViewer = () => {
  const viewerRef = useRef(null);

  useEffect(() => {
    if (!viewerRef.current) return;

    const viewer = new Viewer(viewerRef.current, {
      terrainProvider: undefined,
    });
    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(
        69.3451, // Longitude (Center of Pakistan)
        30.3753, // Latitude (Center of Pakistan)
        10000000 // Height in meters (10,000 km above the Earth)
      ),
    });
   // Load the GeoJSON layer (Pakistan border)
   const loadGeoJson = async () => {
    const geoJsonDataSource = await GeoJsonDataSource.load('/pakistan-boundary.geojson');
    viewer.dataSources.add(geoJsonDataSource); // Add the GeoJSON to the viewer

    // Optional: Set styling for the vector layer (boundary of Pakistan)
    geoJsonDataSource.entities.values.forEach(entity => {
      entity.polygon.material = Cesium.Color.RED.withAlpha(0.5); // Set a semi-transparent red fill
      entity.polygon.outline = true; // Outline the polygon
      entity.polygon.outlineColor = Cesium.Color.BLACK; // Black outline
      entity.polygon.outlineWidth = 2; // Set the outline width
    });
  };

  loadGeoJson();
    return () => {
      viewer.destroy();
    };
  }, []);

  return (
    <div
      ref={viewerRef}
      style={{ width: '100%', height: '100vh' }}
    />
  );
};

export default CesiumViewer;
