"use client";
import React, { useState } from "react";
import Select from "react-select";
import { Country, State, City } from "country-state-city";
import { useRouter } from "next/navigation";

type option = {
  value: {
    latitude: number;
    longitude: number;
    isoCode: string;
  };
  label: string;
} | null;

type Cityoption = {
  value: {
    latitude: number;
    longitude: number;
    countryCode: string;
    name: string;
    stateCode: string;
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
  const [selectedCountry, setSelectedCountry] = useState<option>();
  const [selectedCity, setSelectedCity] = useState<Cityoption>();

  const handleSelectCountry = (option: option) => {
    setSelectedCountry(option);
    setSelectedCity(null);
  };

  const router = useRouter();
  return (
    <div>
      <div>
        <label htmlFor="country">Country</label>
      </div>
      <Select
        className="text-black"
        value={selectedCountry}
        onChange={handleSelectCountry}
        options={options}
      />
    </div>
  );
};

export default CityPicker;
