
# Ghibli Meteo: Responsive Weather Tracking

## Description
Responsive Weather Tracking is a comprehensive web application designed to provide real-time weather updates and forecasts. Leveraging the OpenWeather API, it offers users the ability to search for weather conditions in different cities, view hourly and daily forecasts, and customize their weather tracking experience. With a focus on user-friendliness and interactive features, this application stands out with its unique "listen to weather" functionality and a beautiful, dynamic background that changes based on the time of day, adorned with images from the iconic Studio Ghibli movies.

## Visuals

#### Landing Page
<img src="/docs/media/01_firstpage.png" alt="Landing Page" width="600"/>

#### Up to 8 Cities Can Be Added
<img src="/docs/media/02_addCity.png" alt="Up to 8 cities can be added" width="600"/>

#### Responsive Design on iPad Pro
<img src="/docs/media/03_Responsive_iPadPro.jpeg" alt="Responsive design on iPad Pro" width="600"/>

#### Responsive Design on iPad Mini
<img src="/docs/media/03_Responsive_iPadMini.jpeg" alt="Responsive design on iPad Mini" width="600"/>

#### Responsive Design on Mobile
<img src="/docs/media/03_Responsive_mobile.png" alt="Responsive design on mobile" width="250"/>

## Installation
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




## Purpose
The core purpose of this application is to fetch and display weather data from the OpenWeather API, providing current weather conditions and comprehensive forecasts. Features include:

- A 5-hourly forecast and a 5-day weather outlook.
- A city search functionality, allowing users to find weather details by entering a city name or using their current location.
- An option to add up to 5 cities to a personalized panel for easy access to favored locations.
- Temperature units are displayed in metric by default, with the option for users to switch to imperial units.
- A unique "listen to weather" feature, providing an audible description of the current and next day's weather.
- Dynamic background images, sourced from Studio Ghibli films, that change according to the local time (day or night) of the selected city.

## Technology Stack
- Next.js
- React
- `useState` and `useEffect` for managing side effects
- OpenWeather API for fetching weather data

## Features
- Real-Time Weather Data: Access up-to-date weather information for any city.
- Customizable City Panel: Users can add and manage up to 5 cities for quick access to weather updates.
- Hourly and Daily Forecasts: Detailed 5-hourly and 5-day forecasts provide comprehensive weather predictions.
- Dynamic Backgrounds: Beautiful backgrounds from Studio Ghibli films enhance the visual experience, changing with the day and night cycles.
- Interactive Audio Feature: "Listen to weather" functionality for an engaging, auditory weather description.
- Unit Conversion: Easily switch between metric and imperial units for temperature readings.
- Responsive Design: Optimized for a seamless experience across various devices and screen sizes.

## Acknowledgments
A big thank you to OpenWeather API for offering the essential weather data that powers our app, making real-time weather tracking and forecasts possible.

Special thanks also to Studio Ghibli for providing the stunning background images, featuring scenes from "Spirited Away," "When Marnie Was There," "Nausicaä of the Valley of the Wind," and "Arrietty."

Additionally, this project was greatly assisted by the tutorial "Build A Weather App With React JS | Hourly And Daily Forecast" created by Yash Patel, available on YouTube. This resource was instrumental in shaping the foundational aspects of the application.

Heartfelt gratitude to Aaron, our instructor, for his invaluable teachings, guidance, and support throughout the development process.

## Resources
- [OpenWeatherAPI] - Source of weather and forecast data
- [Studio Ghibli] - Source of wallpaper
- [Build A Weather App With React JS |...] - A detailed tutorial created by Yash Patel

[//]: # 
   [OpenWeatherAPI]: <https://openweathermap.org/api>
   [Studio Ghibli]: <https://www.ghibli.jp/>
   [Build A Weather App With React JS |...]: <https://www.youtube.com/watch?v=cWk5EKVxrgo>
   
## Remarks
This README is written with the assistance of Chatgpt.
