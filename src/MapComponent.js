import React, { useRef, useEffect, useState } from "react";
import { Map, Marker } from "bkoi-gl";

function MapComponent({ latitude, longitude }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [zoom] = useState(12);

  useEffect(() => {
    if (latitude != null) {
      if (map.current) {
        // Fly animation to the selected location
        map.current.flyTo({
          center: [longitude, latitude],
          zoom: 16,
        });
        // Update marker position
        if (marker.current) {
          marker.current.setLngLat([longitude, latitude]);
        } else {
          marker.current = new Marker({ color: "#1D267D", scale: 1.2 })
            .setLngLat([longitude, latitude])
            .addTo(map.current);
        }
      }
    } else {
      if (map.current === null) {
        map.current = new Map({
          container: mapContainer.current,
          center: [90.3938010872331, 23.821600277500405],
          zoom: zoom,
          style: "http://20.244.112.255:8080/styles/barikoi-tests/style.json",
        });
      }
    }
  }, [longitude, latitude, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} style={{ height: "98vh" }} />
    </div>
  );
}

export default MapComponent;
