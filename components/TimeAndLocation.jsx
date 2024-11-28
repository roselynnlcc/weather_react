// import { formatToLocalTime } from "@/services/weatherServices";
import React from "react";
import { DateTime } from "luxon";

const TimeAndLocation = ({ weather }) => {
  const formattedTime = DateTime.fromSeconds(weather.localTime, "yyyy-MM-dd HH:mm").toFormat(
    "ccc, dd LLL yyyy | hh:mm a"
  );
  return (
    <div>
      <div className="flex items-center justify-center my-4 pt-2">
        <p className="text-black text-xl font-light">
          {formattedTime}
        </p>
      </div>
      <div className="flex items-center justify-center my-1">
        <p className="text-black text-3xl font-medium">{`${weather.city}, ${weather.country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
