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

function TambahMemberModal() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-green-500 text-white hover:bg-green-400 hover:text-white hover:cursor-pointer"
          >
            Tambah Member +
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tambah Member Baru</DialogTitle>
            <DialogDescription>
              Menambahkan data member baru di sini. Klik simpan untuk menyimpan
              data.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <Label htmlFor="rfid">UID RFID</Label>
            <select
              id="rfid"
              name="rfid"
              className="border rounded px-2 py-1"
              required
            >
              <option value="">Pilih UID RFID</option>
              {dataRFID.map((item) => (
                <option key={item.uid} value={item.uid}>
                  {item.uid}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="nama">Nama</Label>
              <Input id="nama" name="nama" />
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

export default TambahMemberModal;
