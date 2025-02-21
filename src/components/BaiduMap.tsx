import React, { useEffect, useRef } from 'react';

interface BaiduMapProps {
  center: {
    lat: number;
    lng: number;
  };
  zoom?: number;
  className?: string;
}

const BaiduMap: React.FC<BaiduMapProps> = ({ center, zoom = 15, className = '' }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    const loadMap = () => {
      if (typeof window.BMapGL === 'undefined') {
        // 如果百度地图未加载，延迟重试
        setTimeout(loadMap, 100);
        return;
      }

      if (mapRef.current && !mapInstance.current) {
        const map = new window.BMapGL.Map(mapRef.current);
        const point = new window.BMapGL.Point(center.lng, center.lat);
        map.centerAndZoom(point, zoom);
        map.enableScrollWheelZoom();
        map.setMapType(window.BMapGL.MapType.NORMAL);

        // 添加标记
        const marker = new window.BMapGL.Marker(point);
        map.addOverlay(marker);

        // 添加信息窗口
        const infoWindow = new window.BMapGL.InfoWindow("易准软件", {
          width: 200,
          height: 100,
          title: "公司地址"
        });
        marker.addEventListener('click', () => {
          map.openInfoWindow(infoWindow, point);
        });

        mapInstance.current = map;
      }
    };

    loadMap();

    return () => {
      if (mapInstance.current) {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, [center, zoom]);

  return <div ref={mapRef} className={`w-full h-full ${className}`}></div>;
};

export default BaiduMap;
