import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./index.css";

const PopulationGraph = () => {
  const [populationData, setPopulationData] = useState(null);

  useEffect(() => {
    axios
      .get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
      .then((response) => {
        const data = response.data.data.map((item) => ({
          year: item.Year,
          population: item.Population,
        }));
        // Sort the data by year in increasing order
        data.sort((a, b) => a.year - b.year);
        setPopulationData(data);
      })
      .catch((error) => {
        console.error("Error fetching population data:", error);
      });
  }, []);

  return (
    <div className="population-graph-container">
      <h2>Population In US Year Wise</h2>
      {populationData && (
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={populationData}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="population" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default PopulationGraph;
