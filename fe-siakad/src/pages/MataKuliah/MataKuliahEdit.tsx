import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMataKuliahByKode } from "@/services/api";
import { AxiosError } from "axios";
import type { MatakuliahType } from "@/types/matakuliah";
import MataKuliahForm from "@/components/matakuliah/MataKuliahForm";

export default function MataKuliahEdit() {
  const params = useParams();
  const kode = params.kode as string;
  const [mataKuliah, setMataKuliah] = useState<MatakuliahType | null>(null);

  useEffect(() => {
    getMataKuliahByKode(kode)
      .then((res) => {
        setMataKuliah(res.data as MatakuliahType);
      })
      .catch((err: AxiosError) => {
        // const response = err.response?.data;
        // console.log(response?.message);
      });
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-6">Edit Mata Kuliah</h1>
      <MataKuliahForm initialData={mataKuliah} isEdit />
    </div>
  );
}
