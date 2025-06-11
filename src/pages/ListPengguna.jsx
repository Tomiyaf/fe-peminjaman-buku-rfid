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
import dataPengguna from "../mocks/dataPengguna";
import EditPenggunaCard from "../components/EditPenggunaCard";

function ListPengguna() {
  return (
    <div className="">
      <h1 className="font-semibold text-xl">Daftar Pengguna</h1>
      <div className="w-full  flex justify-end">
        <Button className="bg-green-500 text-white hover:bg-green-400 hover:text-white hover:cursor-pointer">
          Tambah Pengguna Baru +
        </Button>
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
                <EditPenggunaCard pengguna={user} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ListPengguna;
