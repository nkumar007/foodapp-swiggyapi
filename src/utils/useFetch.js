import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_LIST_URL } from "../Contants";

const useFetch = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  useEffect(() => {
    fetcher();
  }, []);

  async function fetcher() {
    const res = await fetch(FETCH_RESTAURANT_LIST_URL);
    const json = await res.json();

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  return { allRestaurants, filteredRestaurants, setFilteredRestaurants };
};

export default useFetch;
