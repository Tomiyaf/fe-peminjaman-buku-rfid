import React, { useState } from "react";
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
import EditBukuCard from "../components/EditBukuCard";
import dataBuku from "../mocks/dataBuku";

function ListBuku() {
  return (
    <div className="">
      <h1 className="font-semibold text-xl">Daftar Buku</h1>
      <div className="w-full  flex justify-end">
        <Button className="bg-green-500 text-white hover:bg-green-400 hover:text-white hover:cursor-pointer">
          Tambah Buku Baru +
        </Button>
      </div>
      <Table>
        <TableCaption>Daftar buku yang sudah ditambahkan</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="w-[100px]">RFID</TableHead>
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
              <TableCell className="font-medium">{buku.rfid}</TableCell>
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
                <EditBukuCard buku={buku} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default ListBuku;
