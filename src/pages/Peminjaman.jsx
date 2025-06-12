import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import TransactionService from "../services/TransactionService";

function formatDate(date) {
  return new Intl.DateTimeFormat('in-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: "UTC"
  }).format(new Date(date)).toString();
}

function mapStatus(status) {
  switch (status) {
    case "borrowed":
      return "dipinjam";
    case "returned":
      return "dikembalikan";
    default:
      return "-";
  }
}

function Peminjaman() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    TransactionService.getTransactions().then(r => setTransactions(r));
  }, []);

  return (
    <div className="">
      <h1 className="font-semibold text-xl">Daftar Peminjaman Buku</h1>
      <div className="w-full  flex justify-end">
        <Button className=" bg-white text-white"></Button>
      </div>
      <Table>
        <TableCaption>Daftar peminjaman buku yang telah dilakukan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Peminjam</TableHead>
            <TableHead>Buku</TableHead>
            <TableHead>Peminjaman</TableHead>
            <TableHead>Tanggal Pinjam</TableHead>
            <TableHead>Tanggal Kembali</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((item, index) => (
            <TableRow key={index} className="">
              <TableCell className="font-medium py-4">{item.id}</TableCell>
              <TableCell>{item.member.name}</TableCell>
              <TableCell>{item.book.title}</TableCell>
              <TableCell>{mapStatus(item.status)}</TableCell>
              <TableCell>{formatDate(item.borrowDate)}</TableCell>
              <TableCell>{item.returnDate ? formatDate(item.returnDate) : "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Peminjaman;
