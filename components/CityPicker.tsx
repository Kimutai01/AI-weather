"use client";
import React, { useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

type option = {
  value: {
    latitude: number;
    longitude: number;
    isoCode: string;
  };
  label: string;
} | null;
const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));

const CityPicker = () => {
  const [selectedOption, setSelectedOption] = useState<option>();
  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default CityPicker;
