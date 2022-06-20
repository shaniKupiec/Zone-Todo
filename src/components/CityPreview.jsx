export const CityPreview = ({ city }) => {
  // console.log("city", city);
  if (!city) return <div>loading...</div>;
  return (
    <section className="city">
      <img className="city__img" src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="" />
      <div className="city__deg"> {Math.floor(city.main.temp - 273.15) } ℃</div>
      <div className="city__name"> {city.name}</div>
      <div className="city__desc"> {city.weather[0].description}</div>
    </section>
    // <section className="city">
    //   <img className="city__img" src={city.current.weather_icons[0]} alt="" />
    //   <div className="city__deg"> {city.current.temperature} ℃</div>
    //   <div className="city__name"> {city.location.name}</div>
    //   <div className="city__desc"> {city.current.weather_descriptions[0]}</div>
    // </section>
  );
};
