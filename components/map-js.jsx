"use client"

import { Stack, Box } from "@mui/material"
import Script from "next/script"
import { memo, useEffect } from "react"
import Loader from "./common/loading/loader"
import "../public/next-assets/images/leaflet/leaflet.css"

const Map = ({ latLng, setLatLng }) => {
  useEffect(() => {
    if (!latLng.lat && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>
        setLatLng({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      )
    }
  }, [])

  if (latLng.lat === "") return <Loader />
  return (
    <Stack sx={{ width: "100%", height: "300px" }}>
      <Script
        src="/next-assets/images/leaflet/leaflet.js"
        strategy="afterInteractive"
        crossOrigin=""
        onReady={() => {
          var map = L.map("map").setView([latLng.lat, latLng.lng], 13)
          L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution:
              '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          }).addTo(map)

          var icon = L.icon({
            iconUrl: "/next-assets/images/leaflet/images/marker-icon.png",
            shadowUrl: "/next-assets/images/leaflet/images/marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28]
          })

          // Get lat & long by click
          let marker = null
          const onMapClick = e => {
            if (marker) {
              map.removeLayer(marker)
            }
            // setLatLng(e.latlng);
            const txt = e.latlng.toString()
            localStorage.setItem("latlang", e.latlng)
            marker = L.marker(e.latlng, { icon: icon })
              .addTo(map)
              .bindPopup(txt)
              .openPopup()
          }
          map.on("click", onMapClick)
        }}
      />
      <Box id="map"></Box>
    </Stack>
  )
}

export default memo(Map)
