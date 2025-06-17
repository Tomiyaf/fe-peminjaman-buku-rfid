import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import RFIDService from "../services/RFIDService";
import { useEffect, useState } from "react";
import BookService from "../services/BookService";

function TambahBukuModal({ onSave }) {
  const [rfids, setRfids] = useState([]);
  const [rfidId, setRfidId] = useState(0);
  const [update, setUpdate] = useState(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    RFIDService.getAvailableRFIDs().then((r) => setRfids(r));
  }, [update]);

  const resetForm = () => {
    setRfidId(0);
    setTitle("");
    setAuthor("");
    setIsbn("");
    setPublishYear("");
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        setOpen(val);
        if (!val) {
          resetForm();
        }
      }}
    >
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-green-500 text-white hover:bg-green-400 hover:text-white hover:cursor-pointer"
          >
            Tambah Buku +
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tambah Data Buku</DialogTitle>
            <DialogDescription>
              Isi data buku di sini. Klik simpan untuk menyimpan data.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            {/* UID RFID */}
            <div className="grid gap-3">
              <Label htmlFor="uid">UID RFID</Label>
              <select
                id="uid"
                name="uid"
                className="border rounded px-2 py-1"
                required
                onChange={(e) => setRfidId(e.target.value)}
              >
                <option value="">Pilih UID RFID</option>
                {rfids && rfids.length ? (
                  rfids.map((item) => (
                    <option key={item.uid} value={item.id}>
                      {item.uid}
                    </option>
                  ))
                ) : (
                  <></>
                )}
              </select>
            </div>
            {/* ...field lainnya... */}
            <div className="grid gap-3">
              <Label htmlFor="judul">Judul</Label>
              <Input
                id="judul"
                name="judul"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pengarang">Pengarang</Label>
              <Input
                id="pengarang"
                name="pengarang"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="isbn">ISBN</Label>
              <Input
                id="isbn"
                name="isbn"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tahunTerbit">Tahun Terbit</Label>
              <Input
                id="tahunTerbit"
                name="tahunTerbit"
                type="number"
                min={1900}
                max={2100}
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                className="bg-red-500 text-white hover:bg-red-400 hover:text-white hover:cursor-pointer"
              >
                Batal
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-400 hover:text-white hover:cursor-pointer"
                onClick={async () => {
                  await BookService.createBook({
                    title: title,
                    author: author,
                    publishYear: publishYear,
                    isbn: isbn,
                    rfidTagId: rfidId,
                  });
                  setUpdate(update + 1);
                  onSave();
                }}
              >
                Simpan
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default TambahBukuModal;
