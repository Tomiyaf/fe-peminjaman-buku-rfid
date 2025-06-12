import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import dataMember from "../mocks/dataMember";
import EditPenggunaCard from "../components/EditPenggunaCard";
import TambahMemberModal from "../components/TambahMemberModal";

function ListPengguna() {
  return (
    <div className="">
      <h1 className="font-semibold text-xl">Daftar Pengguna</h1>
      <div className="w-full flex justify-end">
        {/* <Button className="bg-green-500 text-white hover:bg-green-400 hover:text-white hover:cursor-pointer">
          Tambah Pengguna Baru +
        </Button> */}
        <TambahMemberModal />
      </div>
      <Table>
        <TableCaption>Daftar pengguna yang sudah ditambahkan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[150px]">RFID</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead className="w-[150px]">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataMember.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell className="font-mono">{user.rfid}</TableCell>
              <TableCell>{user.nama}</TableCell>
              <TableCell className="flex gap-2">
                <EditPenggunaCard pengguna={user} />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-red-500 text-white hover:bg-red-400 hover:text-white hover:cursor-pointer">
                      Hapus
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Apa anda yakin ingin menghapus?</DialogTitle>
                      <DialogDescription>
                        Aksi ini akan menghapus permanen data member dari
                        server.
                      </DialogDescription>
                      <DialogClose asChild>
                        <Button
                          variant="destructive"
                          className="bg-red-500 text-white hover:bg-red-400 hover:text-white hover:cursor-pointer"
                          onClick={() => {
                            // Logic to delete the book
                            console.log(`Deleting member with ID: ${user.id}`);
                          }}
                        >
                          Hapus
                        </Button>
                      </DialogClose>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ListPengguna;
