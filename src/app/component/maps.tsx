"use client";

import { useEffect, useRef } from "react";

const YandexMap = () => {
  const mapRef = useRef(null);

  const addresses = [
    { id: 1, name: "Market 1", coords: [40.1792, 44.4991] },
    { id: 2, name: "Market 2", coords: [40.185, 44.515] },
    { id: 3, name: "Market 3", coords: [40.17, 44.48] },
  ];

  useEffect(() => {
    const loadMap = () => {
      if (window.ymaps && mapRef.current) {
        window.ymaps.ready(() => {
          const myMap = new window.ymaps.Map(mapRef.current, {
            center: [40.1792, 44.4991],
            zoom: 12,
            controls: ["zoomControl", "fullscreenControl"],
          });

          // Add placemarks for each address
          addresses.forEach((item) => {
            const placemark = new window.ymaps.Placemark(item.coords, {
              balloonContent: item.name,
            });
            myMap.geoObjects.add(placemark);
          });
        });
      }
    };

    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/2.1/?lang=en_US";
    script.type = "text/javascript";
    script.onload = loadMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center px-4 md:px-16 lg:px-32 py-6 border-t-4 border-gray-300">
      <h2 className="text-2xl font-bold mb-4 text-center">Yandex Map</h2>
      <div
        ref={mapRef}
        className="w-full max-w-4xl h-[400px] md:h-[500px] rounded-lg shadow-lg"
      />
      <div className="mt-6 w-full max-w-4xl">
        <h3 className="text-xl font-semibold mb-2">Market Addresses:</h3>
        <ul className="list-disc pl-5 space-y-1">
          {addresses.map((addr) => (
            <li key={addr.id}>{addr.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YandexMap;
