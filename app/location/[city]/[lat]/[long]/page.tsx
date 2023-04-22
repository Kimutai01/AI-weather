import React from "react";
import { getClient } from "@/apollo-client";
import fetchWeatherQueries from "@/graphql/queries/fetchWeatherQueries";
import CallOutCard from "@/components/CallOutCard";

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

  console.log(results);

  return (
    <div>
      <div className="p-5">
        <div>
          <h2 className="text-xl font-bold">Today's overview</h2>
          <p className="text-sm text-gray-400">
            last updated at:{" "}
            {new Date(results.current_weather.time).toLocaleString()} (
            {results.timezone})
          </p>
        </div>
        <div>
          <CallOutCard message="Hello" />
        </div>
      </div>
    </div>
  );
}

export default WeatherPage;
