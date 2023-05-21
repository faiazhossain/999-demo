import React, { useState } from "react";
import { Col, Row } from "antd";
import SearchComponent from "./SearchComponent";
import MapComponent from "./MapComponent";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    latitude: null,
    longitude: null,
  });

  const handleLocationSelect = (latitude, longitude) => {
    setSelectedLocation({ latitude, longitude });
  };

  return (
    <div>
      <Row>
        <Col span={24} style={{ position: "relative", height: "100%" }}>
          <MapComponent
            latitude={selectedLocation.latitude}
            longitude={selectedLocation.longitude}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              borderRadius: "30px",
            }}
          >
            <SearchComponent onLocationSelect={handleLocationSelect} />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
