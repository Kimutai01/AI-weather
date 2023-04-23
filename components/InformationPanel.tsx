import React from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/weatherCodeToString";
import Image from "next/image";

type Props = {
  city: string;
  lat: string;
  long: string;
  results: Root;
};

function InformationPanel({ city, lat, long, results }: Props) {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-500 p-10">
      <div className="">
        <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
        <p>
          Long/Lat: {results.longitude}/{results.latitude}
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />
      <div>
        <div className="mt-5 flex flex-col items-center justify-between space-x-10 mb-5">
          <p>
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <p className="font extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>

        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </p>
      </div>
      <hr className="mb-10 mt-5" />
      <div>
        <div>
          {/*image*/}
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            width={100}
            height={100}
            alt="Weather Icon"
          />

          <div>
            <p>{results.current_weather.temperature.toFixed(1)}°C</p>
            <p>
              {/*Weather Code*/}
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationPanel;
