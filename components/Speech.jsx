import React, { useEffect } from "react";
import { formatToLocalTime } from "@/services/weatherServices";
import { DateTime } from "luxon";
import { UilVolume } from "@iconscout/react-unicons";

const Speech = ({ weather }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTime = DateTime.now().toSeconds();
      const speechSynthesis = window.speechSynthesis;

      for (const voice of speechSynthesis.getVoices()) {
        console.log(voice.name, "local: " + voice.localService);
      }
    }
  }, []);

  const speak = (text) => {
    if (typeof window !== "undefined") {
      // Stop any current speech
      window.speechSynthesis.cancel();

      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  };

  const handleSpeakClick = () => {
    if (typeof window !== "undefined") {
      const currentTime = DateTime.now().toSeconds();
      const speechText = `The time now is ${formatToLocalTime(
        currentTime,
        weather.timezone
      )} in ${weather.name}. Current temperature is ${weather.temp.toFixed()}. 
       Today, we have ${
         weather.details
       } with a high of ${weather.temp_max.toFixed()} and a low of ${weather.temp_min.toFixed()}. 
       Tomorrow we can expect ${
         weather.daily[0].details
       } with a high of ${weather.daily[0].temp[1].toFixed()} and a low of ${weather.daily[0].temp[0].toFixed()}`;
      speak(speechText);
    }
  };

  return (
    <button
      onClick={handleSpeakClick}
      className=" bg-white bg-opacity-80 text-green-900 font-normal py-2 px-3 rounded-md"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UilVolume size={30} style={{ marginRight: "0.25rem" }} />
      Listen to weather
    </button>
  );
};

export default Speech;
