import "./map.scss";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer } from "react-leaflet";

import Pin from "../pin/Pin";

import { type LatLngTuple } from "leaflet";
import { AnnouncementDto } from "../../types/Announcement";

const position = [52.4797, -1.90269];

type MapProps = {
  items: AnnouncementDto[];
};
const Map = ({ items }: MapProps) => {
  return (
    <MapContainer
      center={position as LatLngTuple}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
};

export default Map;
