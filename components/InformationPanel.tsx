import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import CityPicker from "./CityPicker";

type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
};

function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 ">
      <div p-10>
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p>
          Long/Lat: {results.longitude}/{results.latitude}
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />
      <div>
        <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
          <p>
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p>Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</p>
        </div>

        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
    </div>
  );
}

export default InformationPanel;
