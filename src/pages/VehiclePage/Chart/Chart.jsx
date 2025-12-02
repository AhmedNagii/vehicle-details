import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import styles from './Chart.module.css';
import {chartData} from  '../../../data/dummyData'



function Chart() {
  return (
    <div className={styles.chartContainer}>
      {/* ResponsiveContainer ensures the chart fits the parent div's width */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 0, left: 0, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#e0e0e0"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            padding={{ left: 10, right: 10 }}
            tick={{ fill: 'hsla(0, 0%, 0%, 1)' }}
          />

          <YAxis
            tickFormatter={(tick) => `${tick}K`}
            domain={[0, 160]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: 'hsla(0, 0%, 0%, 1)' }}
          />
          <Tooltip />

          <Bar
            dataKey="revenue"
            fill="hsla(0, 0%, 0%, 1)"
            radius={[4, 4, 0, 0]}
            name="Avg. Monthly Revenue"
            barSize={10}
          />

          <Bar
            dataKey="expenses"
            fill="hsla(359, 78%, 62%, 1)"
            radius={[4, 4, 0, 0]}
            name="Avg. Monthly Expenses"
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
