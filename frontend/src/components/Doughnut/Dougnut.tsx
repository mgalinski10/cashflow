import { useEffect, useRef } from "react";
import styles from "./Doughnut.module.scss";
import { Chart } from "chart.js/auto";
import { ChartConfiguration } from "chart.js/auto";
import { countCategories } from "../../services/countCategories";
import { TransactionsProps } from "../MainContent/Transactions/Transactions";

export const Doughnut: React.FC<TransactionsProps> = ({ transactions }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  let chartInstance: Chart<"doughnut", number[], string> | null = null;
  const countedCategories = countCategories(transactions);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        const config: ChartConfiguration<"doughnut", number[], string> = {
          type: "doughnut",
          data: {
            labels: [
              "Food",
              "Education",
              "Clothing",
              "Health",
              "Entertainment",
              "Home",
            ],
            datasets: [
              {
                label: "# of Category",
                data: countedCategories,
              },
            ],
          },
          options: {
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },

                border: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
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
