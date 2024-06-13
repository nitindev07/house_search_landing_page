import React, { createContext, useEffect, useState } from "react";
import { housesData } from "../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Propety Type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    });
    const uniquesCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniquesCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });
    const uniquesProperties = ["Propety Type (any)", ...new Set(allProperties)];
    setProperties(uniquesProperties);
  }, []);

  const handleClick = () => {
    setLoading(true)
    const isDefault = (str) => {
      return str.split(" ").includes("(any)");
    };
    const minPrice = parseInt(price.split(" ")[0]);
    const maxPrice = parseInt(price.split(" ")[2]);

    const newHouse = houses.filter((house)=> {
      const housePrice = parseInt(house.price);

      if (
        house.country === country &&
        house.type === property &&
        housePrice >= minPrice &&
        housePrice <= maxPrice
      ) {
        return house;
      }
      if (isDefault(country) && isDefault(property) && isDefault(price)) {
        return house;
      }
      if(!isDefault(country) && isDefault(property) && isDefault(price)){
        return house.country === country
      }
      if(!isDefault(property) && isDefault(country) && isDefault(price)){
        return house.type === property
      }
      if(!isDefault(price) && isDefault(country) && isDefault(property)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house
        }
      }
      if(!isDefault(country) && !isDefault(property) && isDefault(price)){
        return house.country === country && house.type === property
      }
      if(!isDefault(country) && isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.country === country
        }
      }
      if(isDefault(country) && !isDefault(property) && !isDefault(price)){
        if(housePrice >= minPrice && housePrice <= maxPrice){
          return house.type === property
        }
      }
    });

    setTimeout(()=>{
      return newHouse.length < 1 ? setHouses([]) : setHouses(newHouse),
      setLoading(false)
      })
  };
  
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
