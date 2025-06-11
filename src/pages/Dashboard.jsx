import ChartPeminjamanBuku from "../components/ChartPeminjamanBuku";
import dataPeminjamanChart from "../mocks/dataPeminjamanChart";

function Dashboard() {
  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div>
      <h1 className="font-semibold text-xl mb-10">Dashboard</h1>
      <div className="w-full flex text-md font-semibold gap-5 justify-between">
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Total Buku</span>
          <span>10</span>
        </div>
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Buku Tersedia</span>
          <span>5</span>
        </div>
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Buku Dipinjam</span>
          <span>5</span>
        </div>
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Total Member</span>
          <span>9</span>
        </div>
      </div>
      <div className="w-xl rounded-sm shadow-md p-5 mt-10">
        <ChartPeminjamanBuku data={dataPeminjamanChart} />
      </div>
    </div>
  );
}

export default Dashboard;
