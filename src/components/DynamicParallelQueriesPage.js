import React from "react";
import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHeroes = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

const DynamicParallelQueriesPage = ({ heroIds }) => {
  const queryResults = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );
  console.log(queryResults);
  return <div>Dynamic Parallel Queries Page</div>;
};

export default DynamicParallelQueriesPage;
