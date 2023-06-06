import { render } from "solid-js/web";
import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import MapGL, { Viewport, Marker } from "solid-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

type MapProps = {
  mapbox_access_token: string;
  lng: number;
  lat: number;
}

const Map: Component = ({ mapbox_access_token, lng, lat }: MapProps) => {

  const [viewport, setViewport] = createSignal({
    center: [lng, lat],
    zoom: 11,
  } as Viewport);

  return (
    <div class="flow">

      <div class="map border">
        <MapGL
          options={{ style: 'mb:basic', accessToken: mapbox_access_token }}
          viewport={viewport()}
          onViewportChange={(evt: Viewport) => setViewport(evt)}
        >
          <Marker lngLat={[lng, lat]} options={{
            color: "#262527"
          }} />

        </MapGL>
      </div>
    </div>
  )

}

export default Map;

