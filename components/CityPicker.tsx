"use client";
import React from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const CityPicker = () => {
  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default CityPicker;
