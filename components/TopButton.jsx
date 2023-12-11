import React from "react";

function TopButton({ cities, updateQuery }) {
  return (
    <div className="flex flex-wrap items-center justify-around mt-2">
      {cities.map((city, index) => (
        <button
          key={index}
          className="text-white text-lg font-medium mb-2"
          style={{ minWidth: "20%" }}
          onClick={() => updateQuery({ q: city }, false)}
        >
          {city}
        </button>
      ))}
    </div>
  );
}

export default TopButton;
