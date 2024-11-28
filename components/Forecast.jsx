import React from "react";

const Forecast = ({ title, items, tempSymbol }) => {
  return (
    <div>
      <div className="flex items-center justify-start pt-2 px-2">
        <p className="text-black bg-white bg-opacity-50 rounded-sm pl-1 border-r-lime-500 pr-1 py-1 border-r-4 font-medium uppercase">
          {title}
        </p>
      </div>
      <hr className="mt-2 mb-2 mx-2" />
      <div className="flex flex-row items-center justify-between text-black px-3 sm:px-16">
        {/* Map over the items array */}
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* For hourly: display time; for daily: display date */}
            <p className="font-light text-sm">
              {title === "hourly forecast" ? item.time : item.date}
            </p>
            {/* Display weather icon */}
            <img
              src={item.icon}
              className="w-12 my-1"
              alt={item.condition || "weather icon"}
            />
            {/* Display temperature */}
            <p className="font-medium">
              {title === "hourly forecast" ? (
                `${item.temperature.toFixed()}${tempSymbol}`
              ) : (
                <>
                  <span>{`${item.temperature.max.toFixed()}${tempSymbol}`}</span>
                  <br />
                  <span>{`${item.temperature.min.toFixed()}${tempSymbol}`}</span>
                </>
              )}
            </p>
            {/* Display condition */}
            <p className="font-light text-xs">{item.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
