import React from "react";
import {
  UilTemperature,
  UilTemperatureQuarter,
  UilTear,
  UilWind,
  UilUser,
} from "@iconscout/react-unicons";

import { iconUrlFromCode } from "@/services/weatherServices";

const TemperatureAndDetails = ({ weather, tempSymbol }) => {
  return (
    <div>
      <div className="flex items-center justify-center py-4 text-xl font-medium">
        <p className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 via-sky-600 to-teal-700">
          {weather.details}
        </p>
      </div>
      <div className="flex items-center justify-center text-black py-3">
        <img src={iconUrlFromCode(`${weather.icon}`)} alt="" className="w-25" />
        <div className="flex flex-col space-y-2">
          <p className="text-6xl">{`${weather.temp.toFixed()} ${tempSymbol}`}</p>
          <div className="flex font-light text-sm items-center justify-center">
            <UilUser size={18} className="mr-1" />
            Feels like
            <span className="font-medium ml-1">{`${weather.feels_like.toFixed()}${tempSymbol}`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 text-black text-sm pt-2 pb-4">
        <UilWind />
        <span className="font-medium ml-1">{`${weather.speed.toFixed()}km/h`}</span>
        <p className="font-light">|</p>
        <UilTear />
        <span className="font-medium ml-1">{`${weather.humidity}%`}</span>
        <p className="font-light">|</p>
        <UilTemperatureQuarter />
        <span className="font-medium ml-1">{`${weather.temp_max.toFixed()}°`}</span>
        <p className="font-light">|</p>
        <UilTemperature />
        <span className="font-medium ml-1">{`${weather.temp_min.toFixed()}°`}</span>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
