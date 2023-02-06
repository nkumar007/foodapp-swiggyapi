import { useState, useEffect } from "react";
import { FETCH_RESTAURANT_URL } from "../Contants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const res = await fetch(FETCH_RESTAURANT_URL + id);
    const json = await res.json();
    setRestaurant(json.data);
  }

  // returning the restaurant menu
  return restaurant;
};

export default useRestaurant;
