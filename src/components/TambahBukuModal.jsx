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
import dataRFID from "../mocks/dataRFID";

function TambahBukuModal() {
  return (
    <Dialog>
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
              >
                <option value="">Pilih UID RFID</option>
                {dataRFID.map((item, idx) => (
                  <option key={item.uid} value={item.uid}>
                    {item.uid}
                  </option>
                ))}
              </select>
            </div>
            {/* ...field lainnya... */}
            <div className="grid gap-3">
              <Label htmlFor="judul">Judul</Label>
              <Input id="judul" name="judul" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pengarang">Pengarang</Label>
              <Input id="pengarang" name="pengarang" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="isbn">ISBN</Label>
              <Input id="isbn" name="isbn" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tahunTerbit">Tahun Terbit</Label>
              <Input
                id="tahunTerbit"
                name="tahunTerbit"
                type="number"
                min={1900}
                max={2100}
              />
            </div>
            {/* <div className="grid gap-3">
              <Label htmlFor="total">Total</Label>
              <Input id="total" name="total" type="number" min={0} max={9999} />
            </div> */}
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
            <DialogClose>
              <Button
                type="submit"
                className="bg-blue-500 text-white hover:bg-blue-400 hover:text-white hover:cursor-pointer"
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
