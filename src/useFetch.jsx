import React, { useEffect, useState } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [followers, setFollowers] = useState([]);

  const getProducts = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const paginatedData = paginate(data, 9);
      setFollowers(paginatedData);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  return { isLoading, followers };
};
