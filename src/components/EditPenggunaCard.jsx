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
import MemberService from "../services/MemberService";
import { useState } from "react";

function EditPenggunaCard({ pengguna, onSave }) {
  console.log(pengguna);
  const [newName, setNewName] = useState(pengguna.name);

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
              <Input id="nama" name="nama" value={newName} onChange={e => setNewName(e.target.value)} />
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
                className="bg-blue-500 text-white hover:bg-blue-400 hover:text-white hover:cursor-pointer"
                onClick={async () => {
                  console.log(newName)
                  await MemberService.updateMember({ 
                    id: pengguna.id,
                    name: newName
                  });
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

export default EditPenggunaCard;
