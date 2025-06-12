import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import EditPenggunaCard from "../components/EditPenggunaCard";
import TambahMemberModal from "../components/TambahMemberModal";
import MemberService from "../services/MemberService";

function ListMember() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    (async () => {
      await MemberService.getMembers().then(v => setUsers(v))
    })()
  }, [update]);

  return (
    <div className="">
      <h1 className="font-semibold text-xl">Daftar Member</h1>
      <div className="w-full flex justify-end">
        {/* <Button className="bg-green-500 text-white hover:bg-green-400 hover:text-white hover:cursor-pointer">
          Tambah Pengguna Baru +
        </Button> */}
        <TambahMemberModal onSave={() => setUpdate(update + 1)} />
      </div>
      <Table>
        <TableCaption>Daftar member yang sudah ditambahkan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[150px]">RFID</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead className="w-[150px]">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{user.id}</TableCell>
              <TableCell className="font-mono">{user.rfidTagId}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell className="flex gap-2">
                <EditPenggunaCard pengguna={user} onSave={() => setUpdate(update + 1)} />
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
                          onClick={async () => {
                            await MemberService.deleteMember(user.id);
                            setUpdate(update + 1);
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

export default ListMember;
