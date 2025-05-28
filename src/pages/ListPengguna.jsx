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

function ListPengguna() {
  const dataPengguna = [
    {
      id: "USR001",
      nama: "Andi Nugroho",
      email: "andi.nugroho@example.com",
      noTelepon: "081234567890",
    },
    {
      id: "USR002",
      nama: "Sinta Kurniawati",
      email: "sinta.kurniawati@example.com",
      noTelepon: "082345678901",
    },
    {
      id: "USR003",
      nama: "Budi Santosa",
      email: "budi.santosa@example.com",
      noTelepon: "083456789012",
    },
    {
      id: "USR004",
      nama: "Rina Wijaya",
      email: "rina.wijaya@example.com",
      noTelepon: "084567890123",
    },
    {
      id: "USR005",
      nama: "Dedi Haryanto",
      email: "dedi.haryanto@example.com",
      noTelepon: "085678901234",
    },
  ];

  return (
    <div className="">
      <h1 className="font-semibold text-xl">Daftar Pengguna</h1>
      <div className="w-full  flex justify-end">
        <Button className="hover:cursor-pointer">Tambah Pengguna Baru +</Button>
      </div>
      <Table>
        <TableCaption>Daftar pengguna yang sudah ditambahkan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>No. Telepon</TableHead>
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataPengguna.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell>{user.nama}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.noTelepon}</TableCell>
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

export default ListPengguna;
