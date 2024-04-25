import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxios from "../../hooks/useAxios";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Loader from "../../Components/Loader/Loader";

const FoodCategory = () => {
  const axios = useAxios();
  const {
    data: categories = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["foodCategory"],
    queryFn: async () => {
      const response = axios.get("/unique-categories");
      return (await response).data;
    },
  });
  return (
    <div>
      {isLoading ? (
        <Loader></Loader>
      ) : (
        <div className="grid grid-cols-3 gap-12">
          {categories?.map((category, index) => (
            <CategoryCard key={index} category={category}></CategoryCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default FoodCategory;
