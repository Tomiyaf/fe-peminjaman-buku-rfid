import { useEffect, useState } from "react";
import ChartPeminjamanBuku from "../components/ChartPeminjamanBuku";
import dataPeminjamanChart from "../mocks/dataPeminjamanChart";
import PengunjungService from "../services/PengunjungService";
import MemberService from "../services/MemberService";
import BookService from "../services/BookService";
import TransactionService from "../services/TransactionService";

function Dashboard() {
  const [totalPengunjung, setTotalPengunjung] = useState(0);
  const [totalMember, setTotalMember] = useState(0);
  const [totalBuku, setTotalBuku] = useState(0);
  const [totalBukuTersedia, setTotalBukuTersedia] = useState(0);
  const [totalBukuDipinjam, setTotalBukuDipinjam] = useState(0);

  useEffect(() => {
    PengunjungService.getPengunjung().then(r => {
      setTotalPengunjung(r.total);
      MemberService.getMembers().then(r => setTotalMember(r.length));
      BookService.getBooks().then(r => {
        setTotalBuku(r.length);
        TransactionService.getTransactions().then(res => {
          setTotalBukuTersedia(r.length - res.length);
          setTotalBukuDipinjam(res.length);
        });
      });
    });
  }, []);

  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div>
      <h1 className="font-semibold text-xl mb-10">Dashboard</h1>
      <div className="w-full flex text-md font-semibold gap-5 justify-between">
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Total Buku</span>
          <span>{totalBuku}</span>
        </div>
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Buku Tersedia</span>
          <span>{totalBukuTersedia}</span>
        </div>
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Buku Dipinjam</span>
          <span>{totalBukuDipinjam}</span>
        </div>
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Total Member</span>
          <span>{totalMember}</span>
        </div>
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Pengunjung Hari Ini</span>
          <span>{totalPengunjung}</span>
        </div>
      </div>
      <div className="w-xl rounded-sm shadow-md p-5 mt-10">
        <ChartPeminjamanBuku data={dataPeminjamanChart} />
      </div>
    </div>
  );
}

export default Dashboard;
