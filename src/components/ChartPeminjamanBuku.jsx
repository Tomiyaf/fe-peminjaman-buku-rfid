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

function getMonthRange(transactions) {
  if (!transactions.length) return [];
  const dates = transactions.map((t) => new Date(t.borrowDate));
  const minDate = new Date(Math.min(...dates));
  const maxDate = new Date(Math.max(...dates));
  minDate.setDate(1);
  maxDate.setDate(1);

  const months = [];
  let current = new Date(minDate);
  while (current <= maxDate) {
    months.push(
      current.toLocaleString("id-ID", { month: "long", year: "numeric" })
    );
    current.setMonth(current.getMonth() + 1);
  }
  return months;
}

function ChartPeminjamanBuku() {
  const [dataChart, setDataChart] = useState([]);

  useEffect(() => {
    TransactionService.getTransactions().then((transactions) => {
      // 1. Hitung jumlah peminjaman per bulan
      const peminjamanPerBulan = {};
      transactions.forEach((transaction) => {
        const date = new Date(transaction.borrowDate);
        const month = date.toLocaleString("id-ID", {
          month: "long",
          year: "numeric",
        });
        if (!peminjamanPerBulan[month]) {
          peminjamanPerBulan[month] = 1;
        } else {
          peminjamanPerBulan[month]++;
        }
      });

      // 2. Buat array semua bulan dalam rentang data
      const allMonths = getMonthRange(transactions);

      // 3. Gabungkan, jika tidak ada peminjaman isi 0
      const dataChart = allMonths.map((bulan) => ({
        bulan,
        jumlah_peminjaman: peminjamanPerBulan[bulan] || 0,
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
