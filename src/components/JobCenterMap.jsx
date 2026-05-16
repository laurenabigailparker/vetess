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

      <div className="h-[420px] w-full overflow-hidden rounded-[20px] border border-[#e2ddd2] sm:h-[500px]">
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
              className="relative rounded-[16px] border border-[#e7dfd2] bg-[#fbf9f4] px-4 py-4 shadow-[0_2px_6px_rgba(27,31,59,0.05)] transition-all duration-200 ease-out hover:-translate-y-[2px] hover:border-[#ded6c8] hover:shadow-[0_6px_14px_rgba(27,31,59,0.08)]"
            >
              <span className="absolute right-4 top-4 text-sm text-[#9f1d20]">
                📍
              </span>

              <h3 className="pr-7 text-[15px] font-bold text-[#2a3560]">
                {center.Name}
              </h3>

              <p className="mt-3 text-[14px] text-[#7a756e]">
                {center.Address1}, {center.City}, {center.StateAbbr}{" "}
                {center.Zip}
              </p>

              <p className="mt-1 text-[14px] text-[#7a756e]">{center.Phone}</p>

              <p className="mt-1 text-[14px] text-[#7a756e]">
                {center.ProgramType}
              </p>

              {center.VeteranRep === "Yes" && (
                <p className="mt-2 text-[13px] font-bold text-[#9f1d20]">
                  Veteran Representative Available
                </p>
              )}

              {center.WebSiteUrl && (
                <a
                  href={center.WebSiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 flex w-full items-center justify-center rounded-[10px] bg-[#f7f3ea] px-4 py-2 text-[14px] font-bold text-[#2f3e6a] transition-all duration-200 ease-out hover:bg-[#efe8dd]"
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