import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import Speech from "./Speech";

function Inputs({ setQuery, units, setUnits, cities, updateQuery, weather }) {
  const [city, setCity] = useState("");

  const capitalizeCityName = (cityName) => {
    return cityName
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleInputKeyUp = (e) => {
    console.log("key up");
    console.log(e.key);
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };
  const handleSearchClick = () => {
    if (city !== "") {
      const capitalizedCity = capitalizeCityName(city);
      // Update the query and check if it's a new city
      updateQuery({ q: capitalizedCity }, !cities.includes(capitalizedCity));
      setCity("");
    }
  };
  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        setQuery({ lat: lat, lon: long });
      });
    }
  };
  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    console.log("selectedUnit", selectedUnit);
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="sm:flex sm:flex-row items-center justify-around">
      <div className="flex flex-row justify-center mt-4 lg:w-3/5">
        <div className="w-3/4 ml-1 mr-4">
          <input
            id="city-search"
            name="city"
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            onKeyUp={handleInputKeyUp}
            type="text"
            placeholder="Search for city..."
            className="text-md font-light p-2 w-full border-1 rounded-sm shadow-xl focus:outline-none capitalize placeholder:lowercase"
          />
        </div>
        <div className="w-1/8 mr-4">
          <UilSearch
            size={30}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
          />
        </div>
        <div className="w-1/8 mr-1">
          <UilLocationPoint
            size={30}
            className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
          />
        </div>
      </div>

      <div className="flex flex-row mt-4 ml-1 justify-evenly lg:w-2/5">
        <div className="flex flex-row items-center bg-white bg-opacity-80 text-green-900 font-medium px-4 rounded-md">
          <button
            name="metric"
            className="text-lg font-normal transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p className="text-xl mx-3">|</p>
          <button
            name="imperial"
            className="text-lg font-normal transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °F
          </button>
          <p></p>
        </div>

        <div className="ml-1">
          <Speech weather={weather} />
        </div>
      </div>
    </div>
  );
}

export default Inputs;
