/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import axios from "axios";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import Spinner from "react-bootstrap/Spinner";

const ZonesLocation = () => {
  const [data, setData] = useState([]);

  const fetchLocation = async () => {
    try {
      const { data } = await axios.get(
        "https://mr-arsad-new-gps-backend.vercel.app/api/v1/location"
      );
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const containerStyle = {
    width: "100%",
    height: "800px",
  };

  const center = {
    lat: 28.6139,
    lng: 77.209,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDntn5A6bf1VLX2WgNUetcG84HjRrCmE7w",
  });

  if (!isLoaded) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <div>
        <GoogleMap
          center={center}
          zoom={7}
          mapContainerStyle={containerStyle}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          {data?.message?.map((i, index) => (
            <MarkerF
              position={{ lat: parseFloat(i.lat), lng: parseFloat(i.long) }}
              key={index}
            />
          ))}
        </GoogleMap>
      </div>
    </>
  );
};

export default HOC(ZonesLocation);
