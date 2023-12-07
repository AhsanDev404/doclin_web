import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Importing sample data from utils/constants
import { sampleData } from "@/utils/constants";

export default function SameDataComposedChart({ data }) {
  // Use the provided data if available, otherwise, use the sampleData
  const chartData = data ? data : sampleData;

  return (

    <ResponsiveContainer width="100%" height={300} >
      <ComposedChart data={chartData} >
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="uv" barSize={20} fill="#E8AA33" />
        <Line type="monotone" dataKey="uv" stroke="#fff" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}