import React from "react";
import { TextInput } from "@sanity/ui";

const searchLatLng = async (lat, lng) => {
  const response =
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCAALJLslWmt7qFNiGPBbKNALTyM4wz_yM
  `);

  return await response.json();
};

export const CountryInput = ({ elementProps }) => {
  // const { elementProps } = props;

  return <TextInput {...elementProps} value="Connor" />;
};
