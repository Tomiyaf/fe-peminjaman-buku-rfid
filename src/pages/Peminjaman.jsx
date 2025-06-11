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
import dataPeminjamanTable from "../mocks/dataPeminjamanTable";

function Peminjaman() {
  const daftarPeminjaman = dataPeminjamanTable;
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
          {daftarPeminjaman.map((item, index) => (
            <TableRow key={index} className="">
              <TableCell className="font-medium py-4">{item.id}</TableCell>
              <TableCell>{item.nama}</TableCell>
              <TableCell>{item.judulBuku}</TableCell>
              <TableCell>{item.status}</TableCell>
              <TableCell>{item.tanggalPinjam}</TableCell>
              <TableCell>{item.tanggalKembali}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Peminjaman;
