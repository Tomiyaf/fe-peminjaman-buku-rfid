import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function ChartPeminjamanBuku({ data }) {
  const chartData = {
    labels: data.map((item) => item.bulan),
    datasets: [
      {
        label: "Jumlah Peminjaman",
        data: data.map((item) => item.jumlah_peminjaman),
        backgroundColor: "rgba(59, 130, 246, 1)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: "Grafik Peminjaman Buku per Bulan",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        barPercentage: 0.7, // default 0.9, semakin kecil semakin ramping
        categoryPercentage: 0.7, // default 0.8, semakin kecil semakin ramping
      },
      y: {
        grid: { display: false },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
}

export default ChartPeminjamanBuku;
