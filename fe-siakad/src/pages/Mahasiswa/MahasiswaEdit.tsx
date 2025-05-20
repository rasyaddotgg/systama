import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMahasiswaByNim } from "@/services/api";
import type { MahasiswaType } from "@/types/mahasiswa";
import { AxiosError } from "axios";
import MahasiswaForm from "@/components/mahasiswa/MahasiswaForm";

export default function MahasiswaEdit() {
  const params = useParams();
  const nim = params.nim as string;
  const [mahasiswa, setMahasiswa] = useState<MahasiswaType | null>(null);

  useEffect(() => {
    getMahasiswaByNim(nim)
      .then((res) => {
        setMahasiswa(res.data as MahasiswaType);
      })
      .catch((err: AxiosError) => {
        // const response = err.response?.data;
        // console.log(response?.message);
      });
  }, []);

  console.log(mahasiswa);

  return (
    <div className="w-full max-w-4xl mx-auto bg-white p-8 rounded shadow mt-6">
      <h1 className="text-2xl font-bold mb-6">Edit Mahasiswa</h1>
      <MahasiswaForm initialData={mahasiswa} isEdit />
    </div>
  );
}
