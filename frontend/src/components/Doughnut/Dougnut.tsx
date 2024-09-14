import { useEffect, useRef } from "react";
import styles from "./Doughnut.module.scss";
import { Chart } from "chart.js/auto";
import { ChartConfiguration } from "chart.js/auto";

export const Doughnut: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let chartInstance: Chart<"doughnut", number[], string> | null = null;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const config: ChartConfiguration<"doughnut", number[], string> = {
          type: "doughnut",
          data: {
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
              {
                label: "# of Votes",
                data: [40, 19, 10],
                // borderWidth: 0,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false, // Ukrywa legendę
              },
              tooltip: {
                enabled: false, // Wyłącza tooltips
              },
            },
            scales: {
              x: {
                grid: {
                  display: false, // Ukrywa siatkę osi X
                },
                ticks: {
                  display: false, // Ukrywa etykiety osi X
                },

                border: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false, // Ukrywa siatkę osi Y
                },
                ticks: {
                  display: false, // Ukrywa etykiety osi Y
                },

                border: {
                  display: false,
                },
              },
            },
          },
        };

        chartInstance = new Chart(ctx, config);
      }
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};
