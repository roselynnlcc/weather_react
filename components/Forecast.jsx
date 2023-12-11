import React from "react";
import { iconUrlFromCode } from "../services/weatherServices";

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
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <p className="font-light text-sm">{item.title}</p>
              <img
                src={iconUrlFromCode(item.icon)}
                className="w-12 my-1"
                alt=""
              />
              {item.temp.map((temp, index) => (
                <p
                  className="font-medium"
                  key={index}
                >{`${temp.toFixed()} ${tempSymbol}`}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
