import { useEffect, useRef } from "react";

import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

import Home from "@arcgis/core/widgets/Home";
import ScaleBar from "@arcgis/core/widgets/ScaleBar";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";

import "./Map.css";
export default function LocationMap() {
  /*   =================Dom Nodes================= */
  const MapElement = useRef(null);

  useEffect(() => {
    var view = new MapView({
      container: MapElement.current,
      map: new Map({
        basemap: "topo-vector",
      }),

      zoom: 10,
      center: [31.477898, 30.005493],
    });

    const homeBtn = new Home({
      view: view,
    });
    view.ui.add(homeBtn, "top-left");

    const toggle = new BasemapToggle({
      // 2 - Set properties
      view: view, // view that provides access to the map's 'topo-vector' basemap
      nextBasemap: "dark-gray", // allows for toggling to the 'hybrid' basemap
    });
    // Add widget to the top right corner of the view
    view.ui.add(toggle, "bottom-left");
  }, []);

  return (
    <div
      className="mapContainer"
      style={{ height: "400px" }}
      ref={MapElement}
    ></div>
  );
}
