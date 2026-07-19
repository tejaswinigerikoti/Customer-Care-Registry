import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function ComplaintPieChart({
  resolved,
  pending
}) {

  const data = {
    labels: ["Resolved", "Pending"],
    datasets: [
      {
        data: [resolved, pending],
        backgroundColor: [
          "#28a745",
          "#dc3545"
        ]
      }
    ]
  };

  return (
    <div className="card shadow mt-4">
      <div className="card-header">
        Complaint Status
      </div>

      <div className="card-body">
        <Pie data={data} />
      </div>
    </div>
  );
}

export default ComplaintPieChart;