import { useCallback, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function RecenterMap({ position }) {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 11);
    }
  }, [map, position]);

  return null;
}

export default function JobCenterMap({ searchLocation }) {
  const [mapCenter, setMapCenter] = useState([35.0844, -106.6504]);
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(false);

  const userId = import.meta.env.VITE_CAREERONESTOP_USER_ID;
  const token = import.meta.env.VITE_CAREERONESTOP_API_KEY;

  const handleSearch = useCallback(
    async (locationValue) => {
      const searchedLocation = locationValue || searchLocation;

      if (!searchedLocation?.trim()) return;

      if (!userId || !token) {
        alert("Missing CareerOneStop API credentials in .env");
        return;
      }

      try {
        setLoading(true);

        const endpoint = `https://api.careeronestop.org/v1/ajcfinder/${userId}/${encodeURIComponent(
          searchedLocation
        )}/25/0/0/0/0/Distance/ASC/0/25`;

        const response = await fetch(endpoint, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("CareerOneStop API request failed");
        }

        const data = await response.json();
        const results = data.OneStopCenterList || [];

        const validResults = results.filter(
          (center) => center.Latitude && center.Longitude
        );

        setCenters(validResults);

        if (validResults.length > 0) {
          setMapCenter([
            Number(validResults[0].Latitude),
            Number(validResults[0].Longitude),
          ]);
        } else {
          alert("No American Job Centers found for that location.");
        }
      } catch (error) {
        console.error("Error fetching job centers:", error);
        alert("Something went wrong while searching job centers.");
      } finally {
        setLoading(false);
      }
    },
    [searchLocation, token, userId]
  );

  useEffect(() => {
    const runSearch = async () => {
      if (!searchLocation?.trim()) return;
      await handleSearch(searchLocation);
    };

    runSearch();
  }, [searchLocation, handleSearch]);

  return (
    <div className="space-y-5">
      {loading && (
        <p className="text-sm font-semibold text-[#9f1d20]">
          Searching American Job Centers...
        </p>
      )}

      <div className="mt-4 h-[420px] w-full overflow-hidden rounded-[20px] border border-[#e2ddd2] bg-white sm:h-[500px]">
        <MapContainer
          center={mapCenter}
          zoom={10}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <RecenterMap position={mapCenter} />

          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {centers.map((center) => (
            <Marker
              key={center.ID}
              position={[Number(center.Latitude), Number(center.Longitude)]}
            >
              <Popup>
                <div className="space-y-2">
                  <h3 className="font-bold">{center.Name}</h3>

                  <p>
                    {center.Address1}, {center.City}, {center.StateAbbr}{" "}
                    {center.Zip}
                  </p>

                  <p>{center.Phone}</p>

                  {center.VeteranRep === "Yes" && (
                    <p className="font-bold text-[#9f1d20]">
                      Veteran Representative Available
                    </p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {centers.length > 0 && (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {centers.map((center) => (
            <div
              key={center.ID}
              className="relative overflow-hidden rounded-[22px] border border-[#e5ddd1] bg-white px-5 py-5 shadow-[0_2px_10px_rgba(36,33,28,0.04)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(36,33,28,0.08)]"
            >
              <span className="absolute right-5 top-5 text-[14px]">📍</span>

              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] bg-[#f3ede3] text-[22px] font-bold text-[#4a4034]">
                A
              </div>

              <p className="mt-5 text-[15px] text-[#85796d]">
                {center.City}, {center.StateAbbr}
              </p>

              <h3
                className="mt-1 text-[30px] leading-[1.08] text-[#1d2f66]"
                style={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                }}
              >
                {center.Name}
              </h3>

              <div className="mt-4 flex flex-wrap items-center gap-3 text-[15px] text-[#7c746c]">
                <span>
                  📍 {center.Address1}, {center.City}, {center.StateAbbr}
                </span>
                <span>☎ {center.Phone}</span>
              </div>

             <div className="my-5 h-px w-full bg-[#eee4d7]" />
              <div className="flex flex-wrap gap-2">
                {center.VeteranRep === "Yes" && (
                  <span className="rounded-[8px] border border-[#efc7c8] bg-[#fff3f3] px-3 py-2 text-[13px] font-semibold text-[#a1272d]">
                    Veteran Preferred
                  </span>
                )}

                <span className="rounded-[8px] border border-[#d8ddea] bg-[#f5f7fb] px-3 py-2 text-[13px] font-semibold text-[#31406d]">
                  {center.ProgramType}
                </span>
              </div>

              {center.WebSiteUrl && (
                <a
                  href={center.WebSiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center text-[18px] font-semibold text-[#9f1d20] transition hover:translate-x-[2px]"
                >
                  Visit Website →
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}