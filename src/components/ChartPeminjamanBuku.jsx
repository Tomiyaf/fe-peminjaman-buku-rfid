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
import TransactionService from "../services/TransactionService";
import { useState, useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const currentYear = new Date().getFullYear();

function ChartPeminjamanBuku() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    TransactionService.getTransactions().then((transactions) => {
      // Filter hanya transaksi di tahun ini
      const filtered = transactions.filter((trx) => {
        const date = new Date(trx.borrowDate);
        return date.getFullYear() === currentYear;
      });

      // Hitung jumlah peminjaman per bulan
      const peminjamanPerBulan = {};
      filtered.forEach((trx) => {
        const date = new Date(trx.borrowDate);
        const month = date.getMonth(); // 0-11
        if (!peminjamanPerBulan[month]) {
          peminjamanPerBulan[month] = 1;
        } else {
          peminjamanPerBulan[month]++;
        }
      });

      // Map ke semua bulan, jika tidak ada isi 0
      const dataChart = monthNames.map((bulan, idx) => ({
        bulan,
        jumlah_peminjaman: peminjamanPerBulan[idx] || 0,
      }));

      setDataChart(dataChart);
    });
  }, []);

  const chartData = {
    labels: dataChart.map((item) => item.bulan),
    datasets: [
      {
        label: "Jumlah Peminjaman",
        data: dataChart.map((item) => item.jumlah_peminjaman),
        backgroundColor: "rgba(59, 130, 246, 1)",
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
        barPercentage: 0.7,
        categoryPercentage: 0.7,
      },
      y: {
        grid: { display: false },
        beginAtZero: true,
        ticks: {
          stepSize: 1, // <-- tambahkan ini
          callback: function (value) {
            return Number.isInteger(value) ? value : null; // hanya tampilkan integer
          },
        },
      },
    },
  };

  return (
    <div style={{ height: 300 }}>
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default ChartPeminjamanBuku;
