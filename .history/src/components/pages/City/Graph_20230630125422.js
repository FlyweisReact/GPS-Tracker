/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../../layout/HOC";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

const Graph = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const [position, setPosition] = useState({
    lat: 48.8584,
    lng: 2.2945,
  });

  const fetchUs = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://mr-arsad-new-gps-backend.vercel.app/api/v1/admin/user/location/63f07487bd1cc1fda388e376"
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    console.log("Rendersd");
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://mr-arsad-new-gps-backend.vercel.app/api/v1/admin/user/location/${id}`
      );
      setPosition({
        lat: parseInt(data?.message?.data?.latitude),
        lng: parseInt(data?.message?.data?.longitude),
      });
      console.log(data);
    } catch (Err) {
      console.log(Err);
    }
  };

  const containerStyle = {
    width: "100%",
    height: "800px",
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
          center={position}
          zoom={15}
          mapContainerStyle={containerStyle}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <MarkerF position={position} />
        </GoogleMap>
      </div>
    </>
  );
};

export default HOC(Graph);
