import { defineConfig } from "astro/config";
import sanity from "astro-sanity";
import solidJs from "@astrojs/solid-js";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: "55ejqbg9",
      dataset: "production",
      apiVersion: "v2021-10-21",
      useCdn: true,
    }),
    solidJs(),
  ],
  output: "server",
  adapter: netlify(),
});
