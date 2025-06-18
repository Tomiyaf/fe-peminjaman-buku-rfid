import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import mqtt from "mqtt";
import { useEffect, useState } from "react";
import ChartPeminjamanBuku from "../components/ChartPeminjamanBuku";
import dataPeminjamanChart from "../mocks/dataPeminjamanChart";
import BookService from "../services/BookService";
import MemberService from "../services/MemberService";
import PengunjungService from "../services/PengunjungService";
import RFIDService from "../services/RFIDService";
import TransactionService from "../services/TransactionService";

function Dashboard() {
  const [totalPengunjung, setTotalPengunjung] = useState(0);
  const [totalMember, setTotalMember] = useState(0);
  const [totalBuku, setTotalBuku] = useState(0);
  const [totalBukuTersedia, setTotalBukuTersedia] = useState(0);
  const [totalBukuDipinjam, setTotalBukuDipinjam] = useState(0);
  const [RFIDs, setRFIDs] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(() => {
    const options = {
      connectTimeout: 4000,
      keepalive: 60,
      clean: true,
    };
    const client = mqtt.connect(
      `ws://${import.meta.env.VITE_MQTT_HOST}:9001`,
      options
    );
    client.on("connect", () => {
      console.log("Connected to MQTT broker");
      client.subscribe("client/update", (err) => {
        if (!err) {
          console.log("Subscribed to client/update");
        }
      });
    });

    client.on("message", (t, _) => {
      if (t == "client/update") {
        setUpdate(update + 1);
      }
    });

    PengunjungService.getPengunjung().then((r) => {
      setTotalPengunjung(r.total);
      MemberService.getMembers().then((r) => setTotalMember(r.length));
      BookService.getBooks().then((r) => {
        setTotalBuku(r.length);
        TransactionService.getTransactions().then((res) => {
          const borrowed = res.filter((t) => t.status === "borrowed").length;
          setTotalBukuTersedia(r.length - borrowed);
          setTotalBukuDipinjam(borrowed);
        });
        RFIDService.getRFIDs().then((r) => {
          setRFIDs(r);
          console.log(r.length);
        });
      });
    });
  }, [update]);

  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div>
      <h1 className="font-semibold text-xl mb-10">Dashboard</h1>
      <div className="w-full flex text-md font-semibold gap-5 justify-between">
        <div className="flex flex-col border-l-4 border-blue-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Total Buku</span>
          <span>{totalBuku}</span>
        </div>
        <div className="flex flex-col border-l-4 border-green-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Buku Tersedia</span>
          <span>{totalBukuTersedia}</span>
        </div>
        <div className="flex flex-col border-l-4 border-yellow-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Buku Dipinjam</span>
          <span>{totalBukuDipinjam}</span>
        </div>
        <div className="flex flex-col border-l-4 border-purple-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Total Member</span>
          <span>{totalMember}</span>
        </div>
        <div className="flex flex-col border-l-4 border-pink-500 rounded-sm shadow-md px-10 py-10 w-full">
          <span>Pengunjung Hari Ini</span>
          <span>{totalPengunjung}</span>
        </div>
      </div>
      <div className="flex justify-around w-full h-80">
        <div className="h-full max-w-xl w-full rounded-sm shadow-md p-5 mt-10">
          <ChartPeminjamanBuku data={dataPeminjamanChart} />
        </div>
        <div className="w-lg h-full overflow-y-scroll rounded-sm shadow-md p-5 mt-10">
          <TableRFID dataRFID={RFIDs} className="" />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

function TableRFID({ dataRFID }) {
  return (
    <Table className="">
      <TableCaption>Daftar UID RFID yang Belum Terdaftar</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10">ID</TableHead>
          <TableHead className="flex justify-center items-center">
            UID RFID
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="">
        {dataRFID && dataRFID.length ? (
          dataRFID.map((rfid, index) => (
            <TableRow key={index}>
              <TableCell className="font-semibold">{rfid.id}</TableCell>
              <TableCell className="flex justify-center">{rfid.uid}</TableCell>
            </TableRow>
          ))
        ) : (
          <></>
        )}
      </TableBody>
    </Table>
  );
}
