import { useState, useEffect } from "react";

export default function MyCity() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch("https://wttr.in/Kyiv?format=j1")
      .then((res) => res.json())
      .then((data) => {
        const current = data.current_condition[0];
        setWeather({
          temp: current.temp_C,
          description: current.weatherDesc[0].value,
          lat: current.lat,
          lon: current.lon,
        });
      });
  }, []);

  return (
    <div>
      <h1>Моє місто — Київ</h1>
      <p>Київ — столиця України, місто з багатою історією.</p>
      {weather ? (
        <div>
          <h2>Погода зараз:</h2>
          <p>Температура: {weather.temp}°C</p>
          <p>Опис: {weather.description}</p>
          <p>Координати: {weather.lat}, {weather.lon}</p>
        </div>
      ) : (
        <p>Завантаження погоди...</p>
      )}
    </div>
  );
}
