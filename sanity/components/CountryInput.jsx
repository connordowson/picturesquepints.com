import React from "react";
import { TextInput } from "@sanity/ui";

const { GOOGLE_MAPS_API_KEY } = process.env;

const searchLatLng = async (lat, lng) => {
  const response =
    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}
  `);

  return await response.json();
};

export const CountryInput = ({ elementProps }) => {
  // const { elementProps } = props;

  return <TextInput {...elementProps} value="Connor" />;
};
