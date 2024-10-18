import React, { useEffect } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarController, BarElement } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarController, BarElement);

const CustomChart = ({ id, type, data, options }) => {
    useEffect(() => {
        const ctx = document.getElementById(id);
        let chartInstance;
        if (ctx) {
            chartInstance = new Chart(ctx, {
                type: type,
                data: data,
                options: options
            });
        }

        return () => {
            if (chartInstance) {
                chartInstance.destroy();
            }
        };
    }, [id, type, data, options]);

    return <canvas id={id}></canvas>;
};

export default CustomChart;