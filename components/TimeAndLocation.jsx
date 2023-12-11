import { formatToLocalTime } from "@/services/weatherServices";
import React from "react";
import { DateTime } from "luxon";

const TimeAndLocation = ({ weather }) => {
  const currentTime = DateTime.now().toSeconds();
  return (
    <div>
      <div className="flex items-center justify-center my-4 pt-2">
        <p className="text-black text-xl font-light">
          {formatToLocalTime(currentTime, weather.timezone)}
        </p>
      </div>
      <div className="flex items-center justify-center my-1">
        <p className="text-black text-3xl font-medium">{`${weather.name}, ${weather.country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
