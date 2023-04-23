import React from "react";
import { getClient } from "@/apollo-client";
import fetchWeatherQueries from "@/graphql/queries/fetchWeatherQueries";
import CallOutCard from "@/components/CallOutCard";
import StatCard from "@/components/StatCard";
import InformationPanel from "@/components/informationPanel";
import TempChart from "@/components/TempChart";
import RainChart from "@/components/RainChart";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function WeatherPage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQueries,
    variables: {
      current_weather: "true",
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;

  return (
    <div className="flex flex-col min-h-screen md:flex-row">
      <InformationPanel
        city={city}
        latitude={lat}
        longitude={long}
        results={results}
      />
      <div className="p-5">
        <div>
          <h2 className="text-xl font-bold">Today's overview</h2>
          <p className="text-sm text-gray-400">
            last updated at:{" "}
            {new Date(results.current_weather.time).toLocaleString()} (
            {results.timezone})
          </p>
        </div>
        <div className="m-2 mb-10">
          <CallOutCard message="Hello" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 m-2">
          <StatCard
            title="Maximun Temperature"
            metric={`${results.daily.temperature_2m_max[0].toFixed(1)}°C`}
            color="yellow"
          />
          <StatCard
            title="Maximun Temperature"
            metric={`${results.daily.temperature_2m_min[0].toFixed(1)}°C`}
            color="green"
          />
          <div>
            <StatCard
              title="UV Index"
              metric={`${results.daily.uv_index_max[0].toFixed(1)}°C`}
              color="yellow"
            />
            {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 && (
              <CallOutCard
                message="UV Index is high, please wear sunscreen"
                warning
              />
            )}
          </div>

          <div className="flex space-x-3">
            <StatCard
              title="Wind speed"
              metric={`${results.current_weather.windspeed.toFixed(1)}°C`}
              color="cyan"
            />
            <StatCard
              title="Wind direction"
              metric={`${results.current_weather.winddirection.toFixed(1)}°C`}
              color="violet"
            />
          </div>
        </div>
        <hr className="mb-5" />
        <div className="space-y-3">
          {/* Temp chart */}
          <TempChart results={results} />

          {/* Rain chart */}
          <RainChart results={results} />
          {/* Humidity chart */}
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
