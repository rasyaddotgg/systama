import { useEffect, useState } from "react";
import { deleteMataKuliah, getMataKuliah } from "@/services/api";
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import DataTable from "../ui/DataTable";
import type { MatakuliahType } from "@/types/matakuliah";
import MataKuliahRow from "./MataKuliahRow";
import toast from "react-hot-toast";

const headers = ["Kode", "Nama", "SKS", "Semester", "Jurusan", "Aksi"];

export default function MataKuliahList() {
  const [data, setData] = useState<MatakuliahType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getMataKuliah()
      .then((res) => setData(res.data as MatakuliahType[]))
      .catch(() => toast.error("Gagal memuat data mata kuliah"));
  }, []);

  const handleOnDelete = async (kode: string) => {
    if (confirm("Apakah anda yakin ingin menghapus mata kuliah ini?")) {
      try {
        await deleteMataKuliah(kode);
        setData((prev) => prev.filter((mhs) => mhs.kode !== kode));
        toast.success("Mata kuliah berhasil dihapus");
      } catch (error) {
        toast.error("Gagal menghapus mata kuliah");
      }
    }
  };

  return (
    <Card>
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manajemen Mata Kuliah</h1>
          <button
            onClick={() => navigate("/matakuliah/new")}
            className="bg-indigo-600 text-white px-4 py-2 rounded shadow"
          >
            ➕ Mata Kuliah Baru
          </button>
        </div>
        <hr />
        <DataTable
          headers={headers}
          data={data}
          entity="mata kuliah"
          renderItem={(item: MatakuliahType) => (
            <MataKuliahRow
              row={item}
              onDelete={handleOnDelete}
              key={item.kode}
            />
          )}
        />
      </div>
    </Card>
  );
}
