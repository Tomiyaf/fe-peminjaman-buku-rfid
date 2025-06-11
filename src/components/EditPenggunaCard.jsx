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

function EditPenggunaCard({ pengguna }) {
  console.log(pengguna);
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-blue-500 text-white hover:bg-blue-400 hover:text-white hover:cursor-pointer"
          >
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Data Pengguna</DialogTitle>
            <DialogDescription>
              Membuat perubahan data pengguna di sini. Klik simpan untuk
              menyimpan data.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="judul">Nama</Label>
              <Input id="nama" name="nama" defaultValue={pengguna.nama} />
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

export default EditPenggunaCard;
