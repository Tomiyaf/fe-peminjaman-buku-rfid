import React, { useEffect, useState } from "react";
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
import EditBukuCard from "../components/EditBukuCard";
import TambahBukuModal from "../components/TambahBukuModal";
import BookService from "../services/BookService";
import RFIDService from "../services/RFIDService";

function ListBuku() {
  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    BookService.getBooks().then(v => setBooks(v));
  }, [update]);

  return (
    <div className="">
      <h1 className="font-semibold text-xl">Daftar Buku</h1>
      <div className="w-full  flex justify-end">
        {/* <Button className="bg-green-500 text-white hover:bg-green-400 hover:text-white hover:cursor-pointer">
          Tambah Buku Baru +
        </Button> */}
        <TambahBukuModal onSave={() => setUpdate(update + 1)} />
      </div>
      <Table>
        <TableCaption>Daftar buku yang sudah ditambahkan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[100px]">RFID ID</TableHead>
            <TableHead>Judul</TableHead>
            <TableHead>Pengarang</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Tahun</TableHead>
            {/* <TableHead>Status</TableHead> */}
            <TableHead>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books && books.length ? books.map((buku, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{buku.id}</TableCell>
              <TableCell className="font-medium">{buku.rfidTagId}</TableCell>
              <TableCell>{buku.title}</TableCell>
              <TableCell>{buku.author}</TableCell>
              <TableCell>{buku.isbn}</TableCell>
              <TableCell>{buku.publishYear}</TableCell>
              {/* <TableCell>
                Total: {buku.status.total}
                <br />
                Terpinjam: {buku.status.terpinjam}
                <br />
                Sisa: {buku.status.sisa}
              </TableCell> */}
              <TableCell className="flex gap-2">
                <EditBukuCard buku={buku} onSave={() => setUpdate(update + 1)} />
                <Dialog>
                  <DialogTrigger>
                    <Button className="bg-red-500 text-white hover:bg-red-400 hover:text-white hover:cursor-pointer">
                      Hapus
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Apa anda yakin ingin menghapus?</DialogTitle>
                      <DialogDescription>
                        Aksi ini akan menghapus permanen data buku dari server.
                      </DialogDescription>
                      <DialogClose asChild>
                        <Button
                          variant="destructive"
                          className="bg-red-500 text-white hover:bg-red-400 hover:text-white hover:cursor-pointer"
                          onClick={async () => {
                            await BookService.deleteBook(buku.id);
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
          )) : <></>}
        </TableBody>
      </Table>
    </div>
  );
}

export default ListBuku;
