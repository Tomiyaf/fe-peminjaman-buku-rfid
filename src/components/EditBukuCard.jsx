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

function EditBukuCard({ buku }) {
  console.log(buku);
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
            <DialogTitle>Edit Data Buku</DialogTitle>
            <DialogDescription>
              Membuat perubahan data buku di sini. Klik simpan untuk menyimpan
              data.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="judul">Judul</Label>
              <Input id="judul" name="name" defaultValue={buku.judul} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="pengarang">Pengarang</Label>
              <Input
                id="pengarang"
                name="username"
                defaultValue={buku.pengarang}
              />
            </div>
            {/* <div className="grid gap-3">
              <Label htmlFor="penerbit">Penerbit</Label>
              <Input
                id="penerbit"
                name="penerbit"
                defaultValue={buku.penerbit}
              />
            </div> */}
            <div className="grid gap-3">
              <Label htmlFor="isbn">ISBN</Label>
              <Input id="isbn" name="isbn" defaultValue={buku.isbn} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="tahunTerbit">Tahun Terbit</Label>
              <Input
                id="tahunTerbit"
                name="tahunTerbit"
                type="number"
                min={1900}
                max={2100}
                defaultValue={buku.tahun}
              />
            </div>
            {/* <div className="grid gap-3">
              <Label htmlFor="total">Total</Label>
              <Input
                id="total"
                name="total"
                type="number"
                min={0}
                max={9999}
                defaultValue={buku.status.total}
              />
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

export default EditBukuCard;
