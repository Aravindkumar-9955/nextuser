// pages/dashboard.js

import React, { useEffect, useRef, useState } from 'react';

const Dashboard = () => {
  const canvasRef = useRef(null);
  const [chartData, setChartData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Draw the chart using Canvas API
    drawChart(ctx, chartData);
  }, [chartData]);

  const drawChart = (ctx, data) => {
    const labels = data.labels;
    const datasets = data.datasets;

    // Clear existing chart
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Calculate dimensions
    const barWidth = (ctx.canvas.width - 40) / labels.length;
    const maxValue = Math.max(...datasets[0].data);
    const scaleRatio = (ctx.canvas.height - 40) / maxValue;

    // Draw bars
    datasets.forEach((dataset, datasetIndex) => {
      dataset.data.forEach((value, index) => {
        const x = 20 + index * barWidth;
        const y = ctx.canvas.height - value * scaleRatio - 20;
        const barHeight = value * scaleRatio;

        ctx.fillStyle = dataset.backgroundColor;
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.strokeStyle = dataset.borderColor;
        ctx.strokeRect(x, y, barWidth, barHeight);
      });
    });

    // Draw labels
    ctx.fillStyle = '#000';
    ctx.font = '14px Arial';
    labels.forEach((label, index) => {
      const x = 20 + index * barWidth + barWidth / 2;
      const y = ctx.canvas.height - 5;

      ctx.fillText(label, x, y);
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <canvas ref={canvasRef} width={800} height={400}></canvas>
    </div>
  );
};

export default Dashboard;
