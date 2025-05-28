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

function ListBuku() {
  const dataBuku = [
    {
      id: "BK001",
      judul: "Pemrograman Web dengan React",
      pengarang: "Andi Nugroho",
      penerbit: "Elex Media Komputindo",
      tahun: 2022,
      status: {
        total: 10,
        terpinjam: 3,
        sisa: 7,
      },
    },
    {
      id: "BK002",
      judul: "Struktur Data dan Algoritma",
      pengarang: "Sinta Kurniawati",
      penerbit: "Gramedia",
      tahun: 2021,
      status: {
        total: 5,
        terpinjam: 5,
        sisa: 0,
      },
    },
    {
      id: "BK003",
      judul: "Jaringan Komputer Dasar",
      pengarang: "Budi Santosa",
      penerbit: "Informatika Bandung",
      tahun: 2020,
      status: {
        total: 7,
        terpinjam: 2,
        sisa: 5,
      },
    },
    {
      id: "BK004",
      judul: "Kecerdasan Buatan: Teori dan Praktik",
      pengarang: "Rina Wijaya",
      penerbit: "Andi Publisher",
      tahun: 2023,
      status: {
        total: 8,
        terpinjam: 4,
        sisa: 4,
      },
    },
    {
      id: "BK005",
      judul: "Sistem Operasi Modern",
      pengarang: "Dedi Haryanto",
      penerbit: "Prenada Media",
      tahun: 2019,
      status: {
        total: 6,
        terpinjam: 1,
        sisa: 5,
      },
    },
  ];

  return (
    <div className="">
      <h1 className="font-semibold text-xl">Daftar Buku</h1>
      <div className="w-full  flex justify-end">
        <Button className="hover:cursor-pointer">Tambah Buku Baru +</Button>
      </div>
      <Table>
        <TableCaption>Daftar buku yang sudah ditambahkan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Judul</TableHead>
            <TableHead>Pengarang</TableHead>
            <TableHead>Penerbit</TableHead>
            <TableHead>Tahun</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataBuku.map((buku, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{buku.id}</TableCell>
              <TableCell>{buku.judul}</TableCell>
              <TableCell>{buku.pengarang}</TableCell>
              <TableCell>{buku.penerbit}</TableCell>
              <TableCell>{buku.tahun}</TableCell>
              <TableCell>
                Total: {buku.status.total}
                <br />
                Terpinjam: {buku.status.terpinjam}
                <br />
                Sisa: {buku.status.sisa}
              </TableCell>
              <TableCell>
                <Button className="hover:cursor-pointer">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ListBuku;
