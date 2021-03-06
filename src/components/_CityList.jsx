import { useEffect, useState } from "react";
import { CityPreview } from "./CityPreview";
import { useForm } from "../hooks/useForm.js";

export const CityList = ({ cities }) => {
  const [data, setData] = useState([]);
  const [newCity, handleChange, setNewCity] = useForm({
    name: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    addInfoByCityName("New York");
  };

  const addInfoByCityName = async (cityName) => {
    const key = "3b8466b956eb07b8b00cdb1acba5895b";
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`)
      .then((response) => response.json())
      .then((newData) => {
        setData((previewsData) => [...previewsData, newData]);
      });
  };

  const onSearch = async (ev) => {
    ev.preventDefault();
    await addInfoByCityName(newCity.name);
    setNewCity({
      name: "",
    });
  };

  if (!data) return <div>loading...</div>;
  return (
    <section className="city-list">
      <div className="city-list__title">current weather</div>
      <ul className="city-list__list">
        {data.map((city) => (
          <CityPreview key={city} city={city} />
        ))}
      </ul>
      <form onSubmit={onSearch} className="city-list__form">
        <input type="text" onChange={handleChange} value={newCity.name} name="name" placeholder="Enter City Name" required/>
        <button className="city-list__form__submit">show weather</button>
      </form>
    </section>
  );
};