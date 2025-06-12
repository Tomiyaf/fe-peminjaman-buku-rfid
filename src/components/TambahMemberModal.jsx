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
import { useEffect, useState } from "react";
import RFIDService from "../services/RFIDService";
import MemberService from "../services/MemberService";

function TambahMemberModal({ onSave }) {
  const [rfids, setRfids] = useState([]);
  const [name, setName] = useState("");
  const [rfidId, setRfidId] = useState(0);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    (async () => {
      await RFIDService.geAvailableRFIDs().then(r => setRfids(r));
    })()
  }, [update]);

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
              onChange={e => {
                const id = e.target.value;
                console.log(id);
                setRfidId(id)
              }}
            >
              <option value="">Pilih UID RFID</option>
              {rfids && rfids.length ? rfids.map((item) => (
                <option key={item.uid} value={item.id}>
                  {item.uid}
                </option>
              )) : <></>}
            </select>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="nama">Nama</Label>
              <Input id="nama" name="nama" value={name} onChange={e => setName(e.target.value)} />
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
                onClick={async () => {
                  await MemberService.createMember({
                    name: name,
                    memberId: (() => {
                      const array = new Uint8Array(15);
                      crypto.getRandomValues(array);
                      return btoa(String.fromCharCode(...array)).replace(/[^a-zA-Z0-9]/g, '').slice(0, 20);
                    })(),
                    rfidTagId: rfidId
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

export default TambahMemberModal;
