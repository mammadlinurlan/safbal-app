"use client";

import { useEffect, useRef } from "react";

const BEE_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="56" height="56">
  <!-- Glow circle -->
  <circle cx="32" cy="32" r="30" fill="#F5A623" opacity="0.15"/>
  <!-- Pin shadow -->
  <ellipse cx="32" cy="61" rx="6" ry="2" fill="#00000033"/>
  <!-- Pin stem -->
  <line x1="32" y1="48" x2="32" y2="60" stroke="#D4891C" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Body -->
  <ellipse cx="32" cy="30" rx="10" ry="13" fill="#F5A623"/>
  <!-- Stripes -->
  <rect x="22" y="25" width="20" height="4" rx="2" fill="#1A1A1A" opacity="0.7"/>
  <rect x="22" y="32" width="20" height="4" rx="2" fill="#1A1A1A" opacity="0.7"/>
  <!-- Head -->
  <circle cx="32" cy="17" r="6" fill="#1A1A1A"/>
  <!-- Eyes -->
  <circle cx="29.5" cy="16" r="1.5" fill="white"/>
  <circle cx="34.5" cy="16" r="1.5" fill="white"/>
  <!-- Antennae -->
  <line x1="29" y1="12" x2="24" y2="6" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="23.5" cy="5.5" r="1.5" fill="#F5A623"/>
  <line x1="35" y1="12" x2="40" y2="6" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="40.5" cy="5.5" r="1.5" fill="#F5A623"/>
  <!-- Wings -->
  <ellipse cx="19" cy="25" rx="8" ry="5" fill="white" opacity="0.75" transform="rotate(-20 19 25)"/>
  <ellipse cx="45" cy="25" rx="8" ry="5" fill="white" opacity="0.75" transform="rotate(20 45 25)"/>
</svg>
`;

export default function Map() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);

  useEffect(() => {
    if (mapInstanceRef.current || !mapRef.current) return;

    const initMap = async () => {
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      if (!mapRef.current) return;
      // Leaflet adds _leaflet_id to the container after init — skip if already present
      if ((mapRef.current as unknown as Record<string, unknown>)._leaflet_id) return;

      const lat = 40.395395;
      const lng = 49.841036;

      const map = L.map(mapRef.current as HTMLElement, {
        center: [lat, lng],
        zoom: 16,
        zoomControl: true,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      const beeIcon = L.divIcon({
        html: BEE_SVG,
        className: "",
        iconSize: [56, 70],
        iconAnchor: [28, 68],
        popupAnchor: [0, -68],
      });

      L.marker([lat, lng], { icon: beeIcon })
        .addTo(map)
        .bindPopup(
          `<div style="font-family:'Nunito',sans-serif;padding:4px 2px;min-width:150px">
            <strong style="color:#1A1A1A;font-size:14px">🍯 Saf Bal</strong><br/>
            <span style="color:#888;font-size:12px">Bakı, Azərbaycan</span><br/>
            <a href="tel:+994503686882" style="color:#F5A623;font-size:12px;text-decoration:none;margin-top:4px;display:block">+994 50 368 68 82</a>
          </div>`,
          { maxWidth: 200 }
        )
        .openPopup();

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        (mapInstanceRef.current as { remove: () => void }).remove();
        mapInstanceRef.current = null;
      }
      if (mapRef.current) {
        delete (mapRef.current as unknown as Record<string, unknown>)._leaflet_id;
      }
    };
  }, []);

  return <div ref={mapRef} className="w-full h-[450px] z-0" />;
}
