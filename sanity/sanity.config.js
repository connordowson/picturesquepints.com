import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import { googleMapsInput } from "@sanity/google-maps-input";

export default defineConfig({
  title: "Picturesque Pints",
  projectId: "55ejqbg9",
  dataset: "production",
  plugins: [
    deskTool(),
    googleMapsInput({
      apiKey: "AIzaSyCAALJLslWmt7qFNiGPBbKNALTyM4wz_yM",
      defaultLocation: {
        lat: 51.43570636358845,
        lng: -2.5894995415640216,
      },
      defaultZoom: 11,
    }),
  ],
  schema: {
    types: schemas,
  },
});
