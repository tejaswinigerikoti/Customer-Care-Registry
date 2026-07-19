import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function AgentBarChart({
  active,
  inactive
}) {

  const data = {
    labels: [
      "Active",
      "Inactive"
    ],

    datasets: [
      {
        label: "Agents",
        data: [
          active,
          inactive
        ],
        backgroundColor: [
          "#0d6efd",
          "#6c757d"
        ]
      }
    ]
  };

  return (
    <div className="card shadow mt-4">

      <div className="card-header">
        Agent Status
      </div>

      <div className="card-body">
        <Bar data={data} />
      </div>

    </div>
  );
}

export default AgentBarChart;