export const CityPreview = ({ city }) => {
  if (!city) return <div>loading...</div>;
  return (
    <section className="city">
      <img className="city__img" src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="" />
      <section className="city__info">
        <div className="city__info__deg"> {Math.floor(city.main.temp - 273.15)} ℃</div>
        <div className="city__info__name"> {city.name}</div>
        <div className="city__info__desc"> {city.weather[0].description}</div>
      </section>
    </section>
  );
};
